<template>
  <transition enter-active-class="animated zoomIn">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'Fade',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
.zoomIn
  animation-duration: .8s
</style>
