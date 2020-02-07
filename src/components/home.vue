<!--
  User: gaol
  Date: 2020/01/26
  功能： home 页面
-->

<style lang="stylus" rel="stylesheet/stylus" scoped>
.containerBox
    .topBannerBox
        position relative
        .top_tit_box
            position absolute
            top 0
            bottom 0 
            right 0
            left 0
            width 100%
            height 70%
            margin auto
            .tit_head
                width 100%
                font-size 33px
                font-weight 400
            .tit_middle
                width 100%
                font-size 17px
                font-weight 400
                margin-top -20px
            .releaseBtn
                width 100%
                margin-top -20px
    .grid-container
        width 70%
        margin 0 auto
        .item
            width 15%
            margin 10px


</style>

<template>
    <div>
        <el-row>
            <el-col :span="24">

                <div class="containerBox">
                    <div class="topBannerBox">
                        <el-image
                            style="width: 100%; height: 100%"
                            :src="topBannerPic"  
                            fit="contain"                      
                        >u-f-wrap
                        </el-image>
                        <div class="top_tit_box u-f-ac u-f-wrap">
                            <p class="tit_head u-f0">百万专业开发资源</p>
                            <p class="tit_middle u-f0">垂直技术社区10年沉淀   350万+活跃开发者   海量行为数据智能匹配</p>
                            <div class="releaseBtn u-f0">
                                <el-button 
                                    style="width: 200px;border-radius:100px"
                                    type="primary">
                                    免费发布需求
                                </el-button>
                            </div>
                        </div>
                    </div>

                    <el-row 
                        class="grid-container wrap1330 u-f-ac u-f-ajc u-f-wrap">
                        <div 
                            v-for="(item,key) in appTypes"
                            :key="key"
                            :class="`item item_${key}`"
                        >
                            <el-card 
                                shadow="hover"
                                :body-style="{ padding: '0px' }">
                                <el-image 
                                    :src="item.src" 
                                    class="image"
                                    fit="fill">
                                </el-image>
                                <div style="padding: 14px;">
                                    <span>{{item.name}}</span>
                                    <div class="bottom clearfix">
                                    <time class="time">{{ currentDate }}</time>
                                    <el-button type="text" class="button">{{item.tip}}</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </div>
                    </el-row>

                    <el-row>
                        <el-col :span="24">
                            <h3>4步，完成您的项目</h3>
                            <ul class="u-f-ac u-f-ajc">
                                <li class="item u-f-ac u-f-ajc margin20">
                                    <div>1</div>
                                    <div>
                                        <h3>发布需求</h3>
                                        <p>免费发布项目需求</p>
                                        <p>极速对接开发资源</p>
                                    </div>
                                </li>
                                <li class="item u-f-ac u-f-ajc margin20">
                                    <div>2</div>
                                    <div>
                                        <h3>发布需求</h3>
                                        <p>免费发布项目需求</p>
                                        <p>极速对接开发资源</p>
                                    </div>
                                </li>
                                <li class="item u-f-ac u-f-ajc margin20">
                                    <div>3</div>
                                    <div>
                                        <h3>发布需求</h3>
                                        <p>免费发布项目需求</p>
                                        <p>极速对接开发资源</p>
                                    </div>
                                </li>
                                <li class="item u-f-ac u-f-ajc margin20">
                                    <div>4</div>
                                    <div>
                                        <h3>发布需求</h3>
                                        <p>免费发布项目需求</p>
                                        <p>极速对接开发资源</p>
                                    </div>
                                </li>                                
                            </ul>
                        </el-col>
                    </el-row>

                    <el-row class="marginT20">
                        <el-col :span="24">
                            <h3>现在，开始体验专业的众包服务</h3>
                            <div>
                                <el-button type="primary">免费发布需求</el-button>
                                <el-button type="primary">预约项目管家</el-button>
                            </div>
                        </el-col>
                    </el-row>                    
                </div>

                <div class="footerBox marginT20">
                    <footer-cmp></footer-cmp>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/ecmascript-6">
    import MenuCmp from '@/components/common/Menu.vue'
    import FooterCmp from '@/components/common/Footer.vue'

    import topBannerPic from '@/assets/pic/top-banner.jpg'

    import bigDataTypes from '@/assets/pic/bigData_types.png'
    import blockChainTypes from '@/assets/pic/blockChain_types.png'
    import brainPowerTypes from '@/assets/pic/brainPower_types.png'
    import cloudTypes from '@/assets/pic/cloud_types.png'
    import gamesTypes from '@/assets/pic/games_types.png'
    import html5Types from '@/assets/pic/html5_types.png'
    import IOTTypes from '@/assets/pic/IOT_types.png'
    import mobileTypes from '@/assets/pic/mobile_types.png'
    import webTypes from '@/assets/pic/web_types.png'
    import wechatTypes from '@/assets/pic/wechat_types.png'
    export default {
        components:{
            MenuCmp,
            FooterCmp
        },
        data() {
            return {
                loading: false,
                topBannerPic: topBannerPic,
                appTypes: [
                    {
                        src: bigDataTypes,
                        name: '大数据',
                        tip: "40,000+ 开发商"
                    },
                    {
                        src: blockChainTypes,
                        name: '区块链',
                        tip: "80,000+ 开发商"
                    },
                    {
                        src: brainPowerTypes,
                        name: '人工智能',
                        tip: "80,000+ 开发商"
                    },
                    {
                        src: cloudTypes,
                        name: '云计算',
                        tip: "80,000+ 开发商"
                    },
                    {
                        src: gamesTypes,
                        name: '游戏开发',
                        tip: "80,000+ 开发商"
                    },
                    {
                        src: html5Types,
                        name: 'HTML5应用',
                        tip: "80,000+ 开发商"
                    },
                    {
                        src: IOTTypes,
                        name: '物联网',
                        tip: "80,000+ 开发商"
                    },
                    {
                        src: mobileTypes,
                        name: 'APP开发',
                        tip: "80,000+ 开发商"
                    },
                    {
                        src: webTypes,
                        name: '网站开发',
                        tip: "80,000+ 开发商"
                    },
                    {
                        src: wechatTypes,
                        name: '微信/小程序',
                        tip: "80,000+ 开发商"
                    }                                                                                                                                                                                    
                ]
            }
        }
    }
</script>
