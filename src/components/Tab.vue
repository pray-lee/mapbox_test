<template>
  <div class="tab">
    <ul>
      <li v-for="item in list" :key="item.id"></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axois'
export default {
    name: 'Tab',
    data() {
      return {
        list: [

        ]
      }
    },
    created() {
      axios.get('http://locahost/api/tab.js')
        .then(res => {
          console.log(res)
        })
    },
    methods: {

    }
}
</script>

<style scoped lang="stylus">

</style>