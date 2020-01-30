<!--
  User: gaol
  Date: 2020/01/26
  功能： menu 导航组件
-->

<style lang="less">
.top-box {
    position: relative;
    .menuBox {
        ul {
            padding-left: 20%;
            box-sizing: border-box;
            li {
                // float: right !important;
                font-size: 16px !important;
                .el-submenu__title {
                    font-size: 16px !important;
                    i {
                        display: none !important
                    }
                }
                .el-menu-item {

                }
            }
        }
    }
    .top-login-box {
        position: absolute;
        top: 15px;
        right: 10px;
        width: 200px;
    }
}
</style>

<template>
    <div class="top-box">
        <div class="menuBox">
            <el-menu
                :default-active="activeIndex"
                :staticEnableDefaultPopOutImage="false"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">

                <el-menu-item index="1">发布需求</el-menu-item>

                <el-submenu index="2">
                    <template slot="title">项目大厅</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>

                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">成为开发者</a></el-menu-item>

            </el-menu>
        </div>

        <div class="top-login-box">
            <el-button 
                type="primary" 
                size="mini"
                @click.native="handlerLogin">
                登陆
            </el-button>
            <el-button 
                type="primary" 
                size="mini">
                注册
            </el-button>            
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    data() {
        return {
            activeIndex: '1'
        }
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handlerLogin(){
          this.$router.push({
              path: '/login'
          })
      }      
    }
}
</script>
