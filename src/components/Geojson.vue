<template>
  <div class="geojson">
    <div id="map" class="map" ref="localMap"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import axios from 'axios'
export default {
  name: 'Geojson',
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
      // mapboxgl.accessToken = 'pk.eyJ1IjoicHJheS1sZWUiLCJhIjoiY2pseDMyMjhkMWFpYjN2cW4zNjZqeXQ3YSJ9.Y13hIm8Bs-Kc1veKGf5ZIw'
      this.map = new mapboxgl.Map({
        container: this.$refs.localMap,
        style: this.styleObj,
        center: [108.8196, 30.8666],
        zoom: 6
      })
      //  添加缩放控件
      this.map.addControl(new mapboxgl.NavigationControl())
    },
    // 获取style数据
    _getLocalStyle () {
      axios.get('/api/getJson')
        .then((res) => {
          console.log(res)
          this.styleObj = res.data.localStyle
          // 获取完数据初始化
          this.init()
        })
    }
  }
}
</script>

<style scoped lang='stylus'>
.geojson
  height: 700px
  .map
    width: 100%
    height: 80%
</style>
