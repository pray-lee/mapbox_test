<template>
  <div class="tab">
    <ul>
      <li v-for="item in list" :key="item.id">
        <router-link :to="item.link">
          <button type="button" class="btn" :class="btnStyle[item.id]">{{item.categories}}</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
const btnStyle = ['btn-outline-dark', 'btn-outline-primary', 'btn-outline-success', 'btn-outline-danger', 'btn-outline-warning']
export default {
  name: 'Tab',
  data () {
    return {
      list: [

      ],
      btnStyle: btnStyle
    }
  },
  created () {
    axios.get('http://localhost:3000/tab')
      .then(res => {
        console.log(res)
        this.list = res.data.tabJSON
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
