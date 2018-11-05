const Summit = require('../../model/Summit')
const path = require('path')
const fs = require('fs')
const XLSX = require('xlsx')
const shortid = require('shortid')

const startProcessing = async filePath => {
  const workbook = XLSX.readFile(filePath)
  const data = XLSX.utils.sheet_to_json(
    workbook.Sheets[workbook.SheetNames[0]],
    {
      headers: 1
    }
  )
  return data.map(row => ({
      name: row['Название'],
      height: row['Высота'],
      ridge: row['Хребет'],
      coords: [
        row['Широта'],
        row['Долгота']
      ]
  }))
}

module.exports = async (req, res) => {
  const filePath = path.resolve(
    path.join(__dirname, `../../statics/${shortid.generate()}.xls`)
  )

  const writeQueue = []
  await new Promise((resolve, reject) => {
    const onData = data => {
      const promise = new Promise((resolve, reject) =>
        fs.appendFile(filePath, data, error => error ? reject(error) : resolve())
      )
      writeQueue.push(promise)
    }

    req.on('data', onData)
    req.once('end', () => {
      req.off('data', onData)
      resolve()
    })
    req.once('error', reject)
  })

  await Promise.all(writeQueue)
  const data = await startProcessing(filePath)

  for (const row of data) {
    let summit = await Summit.findOne({
      name: row.name
    })
    if (summit) {
      Object.assign(summit, row)
    } else {
      summit = new Summit(row)
    }
    await summit.save()
  }
  
  res.json(data)
}
