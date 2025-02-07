const elasticlunr = require('elasticlunr');
const indexJson = require('./saved_index.json')
const source = require('./data.json')
const productList = source.data

var index = elasticlunr.Index.load(indexJson);

const result = index.search("labubu").map(o => ({
  ...o,
  product: productList.find(p => p.id === parseInt(o.ref)),
}))
console.log(result)