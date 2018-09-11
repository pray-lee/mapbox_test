<template>
  <div class="container">
    <div class="style-wrapper">
       <div class="custom-control custom-radio" v-for="item in styleList" :key="item.id">
        <input type="radio" id="item.type" name="customRadio" class="custom-control-input" ref="radio">
        <label class="custom-control-label" for="item.type">{{item.type}}</label>
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
      styleList: []
    }
  },
  created () {
    this.getStyle()
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // init
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJheS1sZWUiLCJhIjoiY2pseDMyMjhkMWFpYjN2cW4zNjZqeXQ3YSJ9.Y13hIm8Bs-Kc1veKGf5ZIw'
      let map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [109.9150899566626, 36.25956997955441],
        zoom: 3
      })
      //  添加缩放控件
      map.addControl(new mapboxgl.NavigationControl())
      // setStyle
      this.setStyle()
    },
    getStyle () {
      axios.get('/api/getStyle')
        .then((res) => {
          this.styleList = res.data.styleList
        })
    },
    setStyle () {
      console.log(this)
      x.onclick = this.switchLayer
    },
    switchLayer (e) {
      map.setStyle(`mapbox://styles/mapbox/${e.target.id}-v9`)
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
