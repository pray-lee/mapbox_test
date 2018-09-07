<template>
  <div id="app">
    <tab></tab>
    <router-view/>
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
</style>
