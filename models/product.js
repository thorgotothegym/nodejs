const fs = require('node:fs')
const path = require('node:path')

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
)

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    err ? cb([]) : cb(JSON.parse(fileContent))
  })
}

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }

  save() {
    this.id = Math.random.toString()
    getProductsFromFile((products) => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err)
      })
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb)
  }
}
