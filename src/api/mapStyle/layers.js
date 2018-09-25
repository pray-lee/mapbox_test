const layers = [
  {
    "id": "water",
    "type": "fill",
    "source": "geojson-lines",
    // "source-layer": "water",
    "minzoom": 0,
    "maxzoom":22,
    "paint": {
      "fill-color": "#ff5252"
    }
  }
]
exports.layers = layers
