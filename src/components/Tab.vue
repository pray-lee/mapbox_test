<template>
  <div class="tab">
    <ul>
      <li v-for="item in list" :key="item.id">
        <button type="button" class="btn" :class="btnStyle[item.id]">{{item.categories}}</button>
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

      ],
      btnStyle: ['btn-dark', 'btn-primary', 'btn-success', 'btn-danger', 'btn-warning']
    }
  },
  created () {
    axios.get('http://localhost:3000/tab')
      .then(res => {
        console.log(res)
        this.list = res.data.abJSON
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
    text-align: center
    button
      width: 50%
</style>
