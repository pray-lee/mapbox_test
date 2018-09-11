<template>
  <div class="container">
    <div class="style-wrapper">
      <div class="form-check form-check-inline" v-for="item in styleList" :key="item.id">
        <input class="form-check-input" type="radio" @click="setStyle(item.type)" name="inlineRadioOptions" :id="item.type" value="option1">
        <label class="form-check-label" for="item.type">{{item.type}}</label>
      </div>
    </div>
    <!-- map -->
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
    this.getStyle() // 获取样式数据
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // init
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJheS1sZWUiLCJhIjoiY2pseDMyMjhkMWFpYjN2cW4zNjZqeXQ3YSJ9.Y13hIm8Bs-Kc1veKGf5ZIw'
      this.map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [109.9150899566626, 36.25956997955441],
        zoom: 3
      })
      //  添加缩放控件
      this.map.addControl(new mapboxgl.NavigationControl())
    },
    getStyle () {
      axios.get('/api/getStyle')
        .then((res) => {
          this.styleList = res.data.styleList
        })
    },
    setStyle (type) {
      this.map.setStyle(`mapbox://styles/mapbox/${type}-v9`)
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
</style>
