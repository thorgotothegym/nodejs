const fs = require('node:fs')
const path = require('node:path')

const thePath = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
)

console.log(thePath)

const getProductsFromFile = cb => {
  fs.readFile(thePath, (err, fileContent) => {
    // eslint-disable-next-line n/no-callback-literal
    err ? cb([]) : cb(JSON.parse(fileContent))
  })
}

module.exports = class Product {
  constructor (t) {
    this.title = t
  }

  save () {
    getProductsFromFile(products => {
      products.push(this)
      fs.writeFile(thePath, JSON.stringify(products), (err) => {
        err ? console.log('error', err) : console.log(`the ${JSON.stringify(this.title)} has been add in the db`)
      })
    })
  }

  static fetchAll (cb) {
    getProductsFromFile(cb)
  }
}
