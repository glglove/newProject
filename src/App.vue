<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Home from '@/components/home.vue'
export default {
  name: 'app',
  components: {
    Home
  },
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'it works',
        duration: 5000
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./assets/css/index.styl"
  #app 
    font-family: Helvetica, sans-serif;
    text-align: center;
    width: 100%;
    height: 100%
</style>
