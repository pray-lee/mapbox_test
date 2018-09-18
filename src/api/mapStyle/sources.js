const sources = {
  "osm-tiles": {
    "type": "raster",
    'tiles': [
      "http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ],
    'tileSize': 256
  }

}
exports.sources = sources
