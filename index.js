const fs      = require('fs')
const path    = require('path')
const process = require('process')

module.exports = cdm

function cdm(path, cb) {
  fs.mkdir(path, (err) => {
    process.chdir(path)
  }) 
}
