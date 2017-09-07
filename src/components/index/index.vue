<template>
    <section class="index">
        <v-header title="私家云"></v-header>
        <div class="box_show">
            <div class="menu">
                <router-link to="/index/changebox">
                    <span class="left hamburger icon-hamburger"></span>
                </router-link>
                <span class="right lan icon-lan" @click="showNotice()">
                </span>
            </div>
            <!--会闪的星星  -->
            <div class="stars"></div>
            <div class="circle">
                加载中...
            </div>
            <div class="cloud"></div>
        </div>
        <div class="nav_bar">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/index/all">
                        <span class="all_document icon-all_document" style="color:#ffc581"></span>
                        <div class="mui-media-body">全部</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="tag_fill icon-tag_fill" style="color:#7fcf8e"></span>
                        <div class="mui-media-body">标签</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="favorite_fill icon-favorite_fill" style="color:#ff7878"></span>
                        <div class="mui-media-body">收藏</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/index/picture">
                        <span class="image icon-image" style="color:#7fcf8e"></span>
                        <div class="mui-media-body">图片</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="video icon-video" style="color:#b3afff"></span>
                        <div class="mui-media-body">视频</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/index/music">
                        <span class="music_small icon-music_small" style="color:#ff88a5"></span>
                        <div class="mui-media-body">音乐</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <router-link to="/index/doc">
                        <span class="document icon-document1" style="color:#86b9ff"></span>
                        <div class="mui-media-body">文档</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="usb icon-usb" style="color:#e7e7e7"></span>
                        <div class="mui-media-body">USB</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="sdcard icon-sdcard" style="color:#e7e7e7"></span>
                        <div class="mui-media-body">SD卡</div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mask" v-show="isShow">
            <div class="noticePage" >
                <div class="notice_card">
                    <div class="card_header">
                        <div class="closeBtn" @click="hideNotice()">
                            <span class="close icon-close"></span>
                        </div>
                        <div class="title">
                            <i class="right lan icon-lan"></i>
                            近场网络</div>
                    </div>
                    <div class="card_content">
                        <img src="../../imgs/hint_nearfield_pic.png" alt="">
                    </div>
                    <div class="card_footer">手机与私家云设备处于同一WiFi网络。可以使用私家云全部功能。</div>
                </div>
                <div class="notice_card">
                    <div class="card_header">
                        <div class="title">
                            <i class="right lan icon-lan"></i>
                            近场网络</div>
                    </div>
                    <div class="card_content">
                        <img src="../../imgs/hint_farend_pic.png" alt="">
                    </div>
                    <div class="card_footer">手机与私家云设备处于同一WiFi网络。可以使用私家云全部功能。</div>
                </div>
                <div class="known" @click="hideNotice()">
                    <span>我知道了</span>
                </div>
            </div>
        </div>
        <v-footer></v-footer>
    </section>
</template>


<script>

// 引入顶部固定功能栏
import Cheader from '../common/header.vue'
// 引入底部导航栏
import Cfooter from '../common/footer.vue';

export default {
    data: () => {
        return {
            isShow: false,
        }
    },
    methods: {
        showNotice: function(){
            this.isShow = !this.isShow
            // alert(this.isShow)
            // alert(123)
        },
        hideNotice: function(){
            this.isShow = !this.isShow
        }
    },
    // created(){
    //     this.alertNotice()
    // },
    components: {
        'v-header': Cheader,
        'v-footer': Cfooter
    }
}
</script>

<style lang="less" scoped>

@import url('../../iconfont/iconfont.css');


    .index {
        position: relative;
        .box_show {
            width: 750px;
            height: 538px;
            position: relative;
            text-align: center;
            background-image: linear-gradient(to top, #ffffff, #7383ff 60%, #4073ff);
            .menu {
                height: 75px;
                span {
                    font-size: 40px;
                    color: #fff;
                }
                .left {
                    float: left;
                    margin-left: 30px;
                }
                .right {
                    float: right;
                    margin-right: 30px;
                }
            } // .stars {
            //     width: 691px;
            //     height: 246px;
            //     margin: 34px 25px 80px 34px;
            //     background-color: #ffffff;
            // }
            .circle {
                width: 360px;
                height: 360px;
                border-radius: 50%;
                position: absolute;
                top: 75px;
                left: 50%;
                transform: translateX(-50%);
                text-align: center;
                line-height: 360px;
                color: #fff;
                background-image: linear-gradient(to top, rgba(255, 255, 255, 0.3));
                box-shadow: inset 18.4px 18.4px 70px 0 rgba(255, 255, 255, 0.75);
            }
            .cloud {
                // background: url("../imgs/cloud1.png") no-repeat;
            }
        }

        .nav_bar {
            height: 571px;
            width: 750px;
            margin-bottom: 97px;
            .mui-grid-9 {
                border: none;
                background-color: #fff;
                .mui-table-view-cell {
                    height: 180px;
                    padding: 40px 15px;
                    margin-bottom: 10px;
                    border: none;
                    a {
                        font-size: 24px;
                        &:nth-of-type(-n+2) {
                            color: #eee;
                        }
                    }
                    :hover {
                        text-decoration: none;
                    }
                }
            }
        }
        .mask {
            width: 750px;
            height: 1206px;
            background: rgba(0, 0, 0, .3);
            position: absolute;
            top: 0;
            left: 0;
            .noticePage {
                width: 650px;
                height: 818px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                background-color: #fff;
                border-radius: 5px;
                .notice_card {
                    font-size: 24px;
                    color: #333;
                    height: 358px;
                    padding: 0 64px;
                    border-bottom: 1px solid #ccc;
                    .card_header {
                        height: 112px;
                        padding-bottom: 24px;
                        .closeBtn {
                            font-size: 28px;
                            color: #66a7ff;
                            float: right;
                            margin-top: 20px;
                            margin-right: -44px;
                        }
                        .title {
                            padding-bottom: 25px;
                            line-height: 112px;
                        }
                    }
                    .card_content {
                        width: 520px;
                        height: 130px;
                    }
                    .card_footer {
                        height: 117px;
                        padding: 19px 22px 0 16px;
                    }
                }
                .known {
                    text-align: center;
                    span {
                        font-size: 32px;
                        line-height: 99px;
                        color: #66a7ff;
                    }
                }
            }
        }
        .active {
        border-bottom: 4px solid #66a7ff;
        color: #66a7ff;
    }
    }
</style>


