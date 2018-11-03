const Summit = require('../../model/Summit')
const path = require('path')
const fs = require('fs')

module.exports = async (req, res) => {
  const filePath = path.resolve(
    path.join(__dirname, '../../statics/summits.xls')
  )

  await new Promise((resolve, reject) => {
    const onData = function(data) {
      fs.appendFile(filePath, data, function(err) {
        if (err) {
          console.error(err)
          reject(err)
        }
      })
    }

    const onEnd = function() {
      req.off('data', onData)
      req.off('end', onEnd)
      resolve()
    }

    req.on('data', onData)
    req.on('end', onEnd)
    req.on('error', reject)
  })
  
  res.end()
}
