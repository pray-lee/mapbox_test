<template>
  <div class="container">
    <div class="style-wrapper">
      <div class="form-check form-check-inline" v-for="item in styleList" :key="item.id">
        <input class="form-check-input" type="radio" @click="_setStyle(item.type)" name="inlineRadioOptions" :id="item.type" value="option1">
        <label class="form-check-label" :for="item.type">{{item.type}}</label>
      </div>
    </div>
    <!-- map -->
    <button class="btn btn-warning my3d">3D</button>
    <div id="map" class="map" ref="map"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
export default {
  name: 'mapbox',
  data () {
    return {
      styleList: [],
      map: null
    }
  },
  created () {
    this._getStyle() // 获取样式数据
  },
  mounted () {
    this.init('dark')
  },
  methods: {
    init (type) {
      // init
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJheS1sZWUiLCJhIjoiY2pseDMyMjhkMWFpYjN2cW4zNjZqeXQ3YSJ9.Y13hIm8Bs-Kc1veKGf5ZIw'
      this.map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/' + type + '-v9',
        // center: [109.9150899566626, 36.25956997955441],
        center: [-74.0066, 40.7135],
        zoom: 15.5,
        pitch: 45,
        bearing: -17.6
      })
      //  添加缩放控件
      this.map.addControl(new mapboxgl.NavigationControl())
      //  加3d地图
      this._add3DBuilding()
    },
    // add 3d building
    _add3DBuilding () {
      this.map.on('load', () => {
        var layers = this.map.getStyle().layers
        var labelLayerId
        for (var i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id
            break
          }
        }
        this._add3DLayer(labelLayerId)
      })
    },
    _add3DLayer (labelLayerId) {
      this.map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate', ['linear'], ['zoom'],
            15, 0,
            15.05, ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      }, labelLayerId)
    },
    _getStyle () {
      axios.get('/api/getStyle')
        .then((res) => {
          this.styleList = res.data.styleList
        })
    },
    _setStyle (type) {
      this.map = null
      this.init(type)
    }
  }
}
</script>

<style scoped lang="stylus">
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
.container
  height: 600px
  .map
    width: 100%
    height: 80%
  .my3d
    width: 200px
    margin: 30px 0 30px 0
</style>
