const geoJson = require('./geojson.json')
const sources = {
  // "geojson-lines": {
  //   "type": "geojson",
  //   "data": geoJson
  // }
  "xixi": {
    'type':'vector',
    'scheme':'tms',
    'tiles':['http://192.168.3.85:5444/geoserver/gwc/service/tms/1.0.0/bdcloud%3Ajk0poly@EPSG%3A4326@geojson']
  }
}
exports.sources = sources
