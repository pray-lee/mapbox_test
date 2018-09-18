const express = require('express')
const fs = require('fs')
const router = express.Router()
const port = process.env.PORT || 3000
const cors = require('cors')
const app = express()

app.use(cors()) //跨域
app.use(router)
//接口数据
const tabJSON = require('./src/api/tab')
const styleList = require('./src/api/styleList')
const localStyle = require('./src/api/geoJson')

//tab数据
router.get('/tab', (req, res) => {
  res.send(tabJSON)
  res.end()
})
//style数据
router.get('/getStyle', (req, res) => {
  res.send(styleList)
  res.end()
})
//localStyle数据
router.get('/getJson', (req, res) => {
  res.send(localStyle)
  res.end()
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})
