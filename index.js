const elasticlunr = require('elasticlunr');
const fs = require("fs");

const index = elasticlunr(function () {
    this.addField('title')
    this.addField('body')
    this.saveDocument(false);
});

const doc1 = {
    "id": 1,
    "title": "Oracle released its latest database Oracle 12g",
    "body": "Yestaday Oracle has released its new database Oracle 12g, this would make more money for this company and lead to a nice profit report of annual year."
}

const doc2 = {
    "id": 2,
    "title": "Oracle released its profit report of 2015",
    "body": "As expected, Oracle released its profit report of 2015, during the good sales of database and hardware, Oracle's profit of 2015 reached 12.5 Billion."
}

index.addDoc(doc1);
index.addDoc(doc2);
fs.writeFileSync("demo_index.json", JSON.stringify(index));