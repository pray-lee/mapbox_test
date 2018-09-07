<template>
  <div class="tab">
    <ul>
      <li v-for="item in list" :key="item.id">
        {{item.categories}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Tab',
  data () {
    return {
      list: [

      ]
    }
  },
  created () {
    axios.get('http://localhost:3000/tab')
      .then(res => {
        console.log(res)
        this.list = res.data.abJSON.list
      })
  },
  methods: {

  }
}
</script>

<style scoped lang="stylus">
ul
  display: flex
  justify-content: center
  height: 80px
  line-height: 80px
  li
    height: 100%
    list-style: none
    flex: 1
</style>
