import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import 'react-images-uploader/styles.css'
import 'react-images-uploader/font.css'
import './styles.css'

console.groupCollapsed('process.env')
for (let key of Object.keys(process.env)) {
  console.info(key, process.env[key])
}
console.groupEnd()

console.groupCollapsed('localStorage')
for (let key of Object.keys(localStorage)) {
  console.info(key, localStorage[key])
}
console.groupEnd()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
