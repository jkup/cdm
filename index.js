const fs   = require('fs')
const path = require('path')

module.exports = cdm

function cdm(path, cb) {
  fs.mkdir(path, function(error) {
    if (error) {
      fs.stat(p, function(error, stats) {
        process.chdir(p)
      })
    }  
  }) 
}
