const Mock = require('mockjs')
exports.abJSON = Mock.mock({
  'list|5': [{
    'id|+1': 0,
    'categories': '@cname'
  }]
})
