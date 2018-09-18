// const sources = require('./mapStyle/sources').sources
const localStyle = {
  "version": 8,
  "name": "Mapbox Streets",
  "sprite": "http://localhost:8080/assets/sprite",
  "glyphs": "http://localhost:8080/src/assets/fonts/{fontstack}/{range}.pbf",
  "sources": {
    "mapbox-terrain-rgb": {
      "type": "raster-dem",
      "url": "mapbox://mapbox.terrain-rgb"
    }
  },
  "layers": []
}
exports.localStyle = localStyle
