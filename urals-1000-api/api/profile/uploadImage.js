const path = require('path')
const imagesUpload = require('images-upload-middleware').default

module.exports = imagesUpload(
  path.resolve(__dirname, '../../statics'),
  process.env.APP_STATICS_PREFIX
)
