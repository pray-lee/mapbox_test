<template>
  <transition enter-active-class="animated zoomIn">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'Fade'
}
</script>

<style scoped lang="stylus">
.zoomIn
  animation-duration: .8s
</style>
