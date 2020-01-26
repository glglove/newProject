<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <div>
      <el-button @click="startHacking">Start</el-button>
    </div> -->
    <keep-alive>
      <router-view v-wechat-title="$route.meta.title"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
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

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  width: 100%;
  height: 100%
}
</style>
