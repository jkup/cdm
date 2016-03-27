const fs   = require('fs')
const path = require('path')

module.exports = cdm

const cdm = (path, cb) => {
  fs.mkdir(path, (err) => {
    if (err) {
      fs.stat(path, (err, stats) => {
        process.chdir(path)
      })
    }  
  }) 
}
