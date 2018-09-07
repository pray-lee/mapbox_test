const express = require('express')
const router = express.Router()
const port = process.env.PORT || 3000
const cors = require('cors')
const app = express()

app.use(cors()) //跨域
app.use(router)

//接口数据
const tabJSON = require('./src/api/tab')

//tab数据
router.get('/tab', (req, res) => {
  res.send(tabJSON)
  res.end() 
})

app.listen(port, () => {
  console.log(`server is running at port ${port}`)
})