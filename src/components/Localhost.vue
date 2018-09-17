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
  created () {
    this._getLocalStyle()
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJheS1sZWUiLCJhIjoiY2pseDMyMjhkMWFpYjN2cW4zNjZqeXQ3YSJ9.Y13hIm8Bs-Kc1veKGf5ZIw'
      this.map = new mapboxgl.Map({
        container: this.$refs.localMap,
        // style: this.styleObj,
        style: 'mapbox://styles/mapbox/basic-v9',
        // center: [109.9150899566626, 36.25956997955441],
        center: [-74.0066, 40.7135],
        zoom: 5
      })
      //  添加缩放控件
      this.map.addControl(new mapboxgl.NavigationControl())
    },
    _getLocalStyle () {
      axios.get('/api/localStyle')
        .then((res) => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped lang="stylus">
.localhost
  height: 600px
  .map
    width: 100%
    height: 80%
</style>
