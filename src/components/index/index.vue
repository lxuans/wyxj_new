<template>
    <section class="index">
        <header class="header">
            <div class="menu">
                <span class="left hamburger icon-hamburger"></span>
                <span class="right lan icon-lan"></span>
            </div>
            <!--会闪的星星  -->
            <div class="stars"></div>
            <div class="circle">
                加载中...
            </div>
            <div class="cloud"></div>
        </header>
        <div class="nav_bar">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="all_document icon-all_document" style="color:#ffc581"></span>
                        <div class="mui-media-body">全部</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="tag_fill icon-tag_fill" style="color:#7fcf8e"></span>
                        <div class="mui-media-body">标签</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="mui-icon-extra mui-icon-extra-heart-filled" style="color:#ff7878"></span>
                        <div class="mui-media-body">收藏</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="image icon-image" style="color:#7fcf8e"></span>
                        <div class="mui-media-body">图片</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="video icon-video" style="color:#b3afff"></span>
                        <div class="mui-media-body">视频</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="music_small icon-music_small" style="color:#ff88a5"></span>
                        <div class="mui-media-body">音乐</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                    <a href="#">
                        <span class="document icon-document1" style="color:#86b9ff"></span>
                        <div class="mui-media-body">文档</div>
                    </a>
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

    </section>
</template>


<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
    // height: 750px;
    // width: 750px;
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
    // height: 571px;
    margin-bottom: 97px;
    .mui-grid-9 {
        border: none;
        background-color: #fff;
        .mui-table-view-cell {
            height: 180px;
            padding: 40px 15px;
            border: none;
            a {
                font-size: 24px;
                &:nth-of-type(-n+2){
                    color: #eee;
                }
            }
            :hover {
                text-decoration: none;
            }
            
        }
    }
}
</style>


