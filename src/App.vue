<template>
  <div id="app">
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Tab from 'components/Tab'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0
}
[v-cloak] {
  display: none;
}
</style>
