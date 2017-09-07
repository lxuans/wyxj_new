<template>
    <section class="music">
        <v-header :title="title"></v-header>
        <div class="player">
            <div class="player_disk">
                <img src="../../imgs/player_disk.png" alt="">
            </div>
            <div class="music_info">
                <p>Just Awake.mp3</p>
                <span>未知艺人 - 未知专辑</span>
            </div>
            <div class="progress">
                <span class="start">00:00</span>
                <div class="progress_bar">
                    <div class="now">
                        <i class="ctrlBtn"></i>
                    </div>
                </div>
                <span class="end">03:14</span>
            </div>
            <div class="controlls">
                <div class="left">
                    <i class="triagle_left icon-triagle_left"></i>
                </div>
                <div class="play">
                    <i class="start icon-start"></i>
                </div>
                <div class="right">
                    <i class="triagle_right icon-triagle_right"></i>
                </div>
            </div>
        </div>

    </section>
</template>

<script>

// 引入顶部固定功能栏
import Cheader from '../common/header.vue';
import { Range } from 'mint-ui';

export default {
    data: function() {
        return {
            title: "播放的歌名",
            rangeValue: "",
            start: parseInt(40),
            end: parseInt(60),
            // range: parseInt(40),
        }
    },
    methods: {
        controlProgress: function() {

            var start = this.$el.querySelector('.start');
            var progress = this.$el.querySelector('.progress');
            var progress_bar = this.$el.querySelector('.progress_bar');
            var now = this.$el.querySelector('.now');
            var end = this.$el.querySelector('.end');
            var ctrlBtn = this.$el.querySelector('.ctrlBtn');
            console.log(start,progress_bar,now,end,ctrlBtn);

            var eClientX, currentLeft, marginLeft, nWidth, percentage;

            currentLeft = -(ctrlBtn.offsetLeft);
            marginLeft = parseInt(start.clientWidth) + 35 ;
            // console.log(marginLeft);
            
            // 点击进度条时,按钮和进度跟着变化
            progress_bar.onclick = function(e) {
                // 获取鼠标点击的横坐标,减去进度条与浏览器的距离,目的是移动进度的宽度和按钮的位置
                eClientX = e.clientX - marginLeft - currentLeft / 2;
                // console.log(eClientX);
                // console.log(progress_bar.clientWidth);
                
                nWidth = now.style.width;
                // 按钮和进度不能超出进度条的总宽度
                if (now.clientWidth <= 0) {
                    now.Width = 0 + "px";
                };
                if (eClientX > progress_bar.clientWidth) {
                    eClientX = 500;
                    now.style.width = eClientX + 'px';
                    ctrlBtn.style.left = parseInt(nWidth) - currentLeft + 'px';
                };
                // 移动进度的宽度和按钮的位置
                now.style.width = eClientX + 'px';
                ctrlBtn.style.left = parseInt(now.style.width) - currentLeft / 2 + 'px';


            }
        }
    },
    mounted() {
        this.controlProgress();
    },
    components: {
        'v-header': Cheader,
    }
}
</script>

<style lang="less" scoped>
.music {

    .player {
        height: 1206px;
        background-color: #fff;
        padding: 120px 0;
        .player_disk {
            width: 500px;
            height: 500px;
            border-radius: 20px;
            box-shadow: 0px 12px 24px 0 rgba(4, 0, 0, 0.1);
            border: solid 1px #b3b3b3;
            margin: 0 auto;
            position: relative;
            &::before {
                display: block;
                content: "";
                width: 73px;
                height: 78px;
                background: url("../../imgs/player_stick.png") no-repeat;
                position: absolute;
                top: 30px;
                right: 30px;
            }
        }
        .music_info {
            margin: 52px 0;
            text-align: center;
            p {
                font-size: 32px;
                color: #333;
                margin-bottom: 25px;
            }
            span {
                font-size: 24px;
                color: #b3b3b3;
            }
        }
        .progress {
            width: 690px;
            margin: 0 auto;
            .progress_bar {
                display: inline-block;
                width: 500px;
                height: 6px;
                background-color: #e7e7e7;
                border-radius: 3px;
                .now {
                    width: 0px;
                    height: 6px;
                    background-color: #66a7ff;
                    border-radius: 3px;
                    position: relative;
                    transition: width 0.5s;
                    .ctrlBtn {
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        display: block;
                        position: absolute;
                        left: -6px;
                        top: -3px;
                        background-color: pink;
                        transition: left 0.5s;
                    }
                }
            }

            .start,
            .end {
                display: inline-block;
                width: 86px;
                font-size: 24px;
                color: #999999;
                text-align: center;
            }
        }
        .controlls {
            width: 510px;
            margin: 0 auto;
            text-align: center;
            .left {
                display: inline-block;
                color: #66a7ff;
            }
            .play {
                display: inline-block;
                width: 160px;
                height: 160px;
                border-radius: 50%;
                background-color: #66a7ff;
                text-align: center;
                line-height: 160px;
                margin: 70px 119px 0 119px;
                i {
                    color: #fff;
                }
            }
            .right {
                display: inline-block;
                color: #66a7ff;
            }
        }
    }
}
</style>

