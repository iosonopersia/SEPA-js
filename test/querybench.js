const assert = require('assert');
const Bench = require('../lib/querybench.js');

describe('querybench', function() {
  it('test empty query', function() {
    bench = new Bench()
    assert.equal("", bench.sparql("",{}))
  });
  it('test initializated namespaces', function() {
    namespaces = {
      test : "hello",
      pippo : "world"
    }
    bench = new Bench(namespaces)
    assert.equal("PREFIX test:hello PREFIX pippo:world", bench.sparql("",{}))
  });
  it('test initializated namespaces with query no bindgs', function() {
    namespaces = {
      test : "hello",
      pippo : "world"
    }
    bench = new Bench(namespaces)
    query = bench.sparql("select * where{?a ?b ?c}",{})
    assert.equal("PREFIX test:hello PREFIX pippo:world select * where{?a ?b ?c}",query )
  });
  it('test initializated namespaces with query and bindgs', function() {
    namespaces = {
      test : "hello",
      pippo : "world"
    }
    bench = new Bench(namespaces)
    query = bench.sparql("select * where{?a ?b ?c}",{a:{
      value :"hello"
    }})
    assert.equal("PREFIX test:hello PREFIX pippo:world select * where{?a ?b ?c}",query )
  });
})