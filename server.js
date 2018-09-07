const express = require('express')
const router = express.Router()
const port = process.env.PORT || 3000
const app = express()

//接口数据
const tabJSON = require('./src/api/tab')

//tab数据
router.get('/tab', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //取消跨域限制
  res.send(tabJSON)
  res.end() 
})



app.use(router)
app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})