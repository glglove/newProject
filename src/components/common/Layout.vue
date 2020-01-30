<!--
  User: gaol
  Date: 2020/01/26
  功能： 基础页面组件
-->

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>

<template>
    <el-row :span="24">
        <div class="app-wrapper">
            <menu-cmp></menu-cmp>

            <div class="routerCotentBox">
                <transition name="fade" mode="out-in">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
            </div>
        </div>
    </el-row>
</template>

<script type="text/ecmascript-6">
import MenuCmp from '@/components/common/Menu.vue'
export default {
    components: {
        MenuCmp
    },
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }        
    }
}
</script>
