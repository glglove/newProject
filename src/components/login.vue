<!--
  User: gaol
  Date: 2020/01/26
  功能： home 页面
-->

<style lang="stylus" rel="sheetStylus" scoped>
.loginBox 
    height 100%
    width 100%
    .el-row
        height 100%
        width 100%
        .el-col
            position relative
            height 100%
            width 100%
            .loginFormBox
                position absolute
                top 0
                left 0
                right 0
                bottom 0
                margin auto
                width 500px
                height 400px
                .el-card 
                    height 100%
                    .footerBox
                        .el-button
                            width 100%
                        .forgetPassWord
                            color rgb(22, 155, 213)
                            margin-top 5px
                            margin-bottom 20px
                            text-align right
                            font-size 14px
                            cursor pointer
                        .titBox
                            margin-top 20px
                            .tit-noAccount
                                font-size 14px
                                color rgb(153, 153, 153)
                            .tit-register
                                color rgb(22, 155, 213)
                                cursor pointer

</style>

<template>
    <div class="loginBox">
        <el-row>
            <el-col :span="24">
                <div class="loginFormBox">
                    <el-card class="card-box">
                        <h3>登陆</h3>
                        <div class="footerBox">
                            <div class="forgetPassWord">
                                忘记密码
                            </div>                            
                            <el-button type="primary">登陆</el-button>
                            <div class="titBox marginT20">
                                <span class="tit-noAccount">没有账号?</span>
                                <span class="tit-register">立即注册</span>
                            </div>
                        </div>
                    </el-card>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    import MenuCmp from '@/components/common/Menu.vue'
    export default {
        components:{
            MenuCmp
        },
        data() {
            return {

            }
        }
    }
</script>
