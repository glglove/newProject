<!--
  User: gaol
  Date: 2020/01/26
  功能： home 页面
-->

<style lang="less" scoped>
.tableBox{
    height: 300px
}
</style>

<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card class="card-box">
                    登陆页面
                </el-card>
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
