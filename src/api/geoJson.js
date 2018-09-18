const sources = require('./mapStyle/sources').sources
const layers = require('./mapStyle/layers').layers
const geoJson = {
  "version": 8,
  "name": "Mapbox Streets",
  // "sprite": "http://localhost:8080/src/assets/sprite",
  // "glyphs": "http://localhost:8080/src/assets/fonts/{fontstack}/{range}.pbf",
  "sources": sources,
  "layers": layers
}
exports.localStyle = geoJson
