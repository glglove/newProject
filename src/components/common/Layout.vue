<!--
  User: gaol
  Date: 2020/01/26
  功能： 基础页面组件
-->

<style lang="stylus" rel="stylesheet/stylus" scoped>
.el-row
    height 100%
    background #f4f7f9
    .app-wrapper
        height 100%
        .routerCotentBox
            height calc(100vh - 60px)
            .contentBox
                height 100%
</style>

<template>
    <el-row :span="24">
        <div class="app-wrapper">
            <menu-cmp></menu-cmp>

            <div class="routerCotentBox">
                <transition name="fade" mode="out-in">
                    <keep-alive>
                        <div class="contentBox">
                            <router-view></router-view>
                        </div>
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
