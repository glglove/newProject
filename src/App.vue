<template>
  <div id="app" class="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <el-backtop target="#app" :bottom='150' :visibility-height="10">
      <div
        style="{
          height: 100%;
          width: 100%;
          background-color: #f2f5f6;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: #1989fa;
        }"
      >
        UP
      </div>      
    </el-backtop>     
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
    font-family Helvetica, sans-serif
    text-align center
    width 100%
    height 100%
    overflow auto
</style>
