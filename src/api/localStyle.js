const sources = require('./mapStyle/sources').sources
const localStyle = {
  "version": 8,
  "name": "Mapbox Streets",
  "sprite": "mapbox://sprites/mapbox/streets-v8",
  "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  "sources": sources,
  "layers": []
}
exports.localStyle = localStyle
