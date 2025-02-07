const elasticlunr = require('elasticlunr');
const source = require('./data.json')
const fs = require("fs");

var index = elasticlunr(function () {
    this.addField('name')
    this.saveDocument(false);
});

const productList = source.data
productList.forEach(product => {
  index.addDoc(product);
});

const result = index.search("labubu").map(o => ({
  ...o,
  product: productList.find(p => p.id === parseInt(o.ref)),
}))
console.log(result)
fs.writeFileSync("saved_index.json", JSON.stringify(index));
