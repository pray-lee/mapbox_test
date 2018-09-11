<template>
  <div class="container">
    <div id="map" ref="map"></div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
export default {
  name: 'mapbox',
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // init
      mapboxgl.accessToken = 'pk.eyJ1IjoicHJheS1sZWUiLCJhIjoiY2psMXh0NWF6MGUxbjN2bjNwY2RsaXcyNyJ9'
      let map = new mapboxgl.Map({
        container: this.$refs.map,
        style: 'mapbox://styles/mapbox/satellite-v9s',
        center: [137.9150899566626, 36.25956997955441],
        zoom: 1
      })
      //  添加缩放控件
      map.addControl(new mapboxgl.NavigationControl())
    }
  }
}
</script>

<style scoped>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
</style>
