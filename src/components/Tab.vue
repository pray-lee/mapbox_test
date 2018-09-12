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
const btnStyle = ['btn-dark', 'btn-primary', 'btn-success', 'btn-danger', 'btn-warning']
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
    this._getTabData()
  },
  methods: {
    _getTabData () {
      axios.get('/api/tab')
        .then(res => {
          this.list = res.data.tabJSON
        })
    }
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
