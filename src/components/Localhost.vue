<template>
  <div class="localhost">
    <div id="map" class="map" ref="localMap"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
export default {
  name: 'Localhost',
  data () {
    return {
      map: null,
      styleObj: {}
    }
  },
  mounted () {
    this._getLocalStyle()
  },
  methods: {
    init () {
      console.log(this.styleObj)
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJheS1sZWUiLCJhIjoiY2pseDMyMjhkMWFpYjN2cW4zNjZqeXQ3YSJ9.Y13hIm8Bs-Kc1veKGf5ZIw'
      this.map = new mapboxgl.Map({
        container: this.$refs.localMap,
        style: this.styleObj,
        // center: [109.9150899566626, 36.25956997955441],
        center: [114.28321838378906, 30.54302215576172],
        zoom: 12
      })
      //  添加缩放控件
      this.map.addControl(new mapboxgl.NavigationControl())
      //  添加sources和layer
      this.map.on('load', () => {
        this._addSource()
        this._addLayer()
      })
    },
    // 添加数据源
    _addSource () {
      this.map.addSource('points', {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [{
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-77.03238901390978, 38.913188059745586]
            },
            'properties': {
              'title': 'Mapbox DC 中国文字',
              'icon': 'monument'
            }
          }, {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [-122.414, 37.776]
            },
            'properties': {
              'title': 'Mapbox SF',
              'icon': 'harbor'
            }
          }]
        }
      })
    },
    // 添加图层，使得上面的数据源里面的数据可视化
    _addLayer () {
      this.map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': 'points',
        'layout': {
          'icon-image': '{icon}-15',
          'text-field': '{title}',
          'text-font': ['Open Sans Regular'],
          'text-offset': [0, 0.6],
          'text-anchor': 'top'
        }
      })
    },
    // 获取style数据
    _getLocalStyle () {
      axios.get('/api/localStyle')
        .then((res) => {
          this.styleObj = res.data.localStyle
          // 获取完数据初始化
          this.init()
        })
    }
  }
}
</script>

<style scoped lang='stylus'>
.localhost
  height: 600px
  .map
    width: 100%
    height: 80%
</style>
