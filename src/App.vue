<template>
  <div id="app">
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import Tab from '@components/Tab.vue'
export default {
  name: 'App',
  components: {
    Tab
  }
}
</script>

<style>
</style>
