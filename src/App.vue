<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div> -->
    <home></home>
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

<style lang="less">
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  height: 100%
}
</style>
