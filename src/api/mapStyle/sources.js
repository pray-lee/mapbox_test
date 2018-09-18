const geoJson = require('./chongqing.json')
const sources = {
  "geojson-lines": {
    "type": "geojson",
    "data": geoJson
  }
}
exports.sources = sources
