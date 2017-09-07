<template>
    <section class="agree">
        <v-header :title="title"></v-header>
        <div class="container">
            <div class="success_msg">
                <div class="msg">
                    <i class="alert_done icon-alert_done"></i>
                    <p>操作成功</p>
                    <span>已拒绝"无敌闪电狗"使用你的私家云</span>
                </div>
                <div class="user_box">
                    <img src="../../imgs/device_black.png">
                    <div class="box_info">
                        <p>汪德尔的私家云</p>
                        <span>已有4位好友加入</span>
                    </div>
                </div>
                <router-link to="/my">
                    <button class="closePage">
                        关闭页面
                    </button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>

// 引入顶部固定功能栏
import Cheader from '../common/header.vue';

export default {
    data: function() {
        return {
            title: "用户申请",
        }
    },
    components: {
        'v-header': Cheader,
    }
}
</script>

<style lang="less" scoped>
.agree {
    .container {
        height: 1294px;
        background: url('../../imgs/mine_bg.jpg') no-repeat #fff;
        background-size: 750px 604px;
        padding: 186px 50px;
        .success_msg {
            height: 844px;
            border-radius: 20px;
            background-color: #fff;
            box-shadow: 0 0 20px 0 rgba(4, 0, 0, 0.15);
            padding: 60px 46px;
            .msg {
                text-align: center;
                i {
                    display: block;
                    margin: 0 auto;
                    width: 160px;
                    height: 160px;
                    line-height: 160px;
                    text-align: center;
                    font-size: 50px;
                    color: #fff;
                    border-radius: 50%;
                    background-color: #66a7ff;
                }
                p {
                    text-align: center;
                    margin-top: 11px;
                    font-size: 32px;
                    color: #333;
                    margin-bottom: 20px;
                }
                span {
                    font-size: 24px;
                    color: #b3b3b3;
                }
            }
            .user_box {
                height: 140px;
                width: 550px;
                box-shadow: inset -0px -1px 0 0 #e6e6e6, inset 0px 1px 0 0 #e6e6e6;
                background-color: #fff;
                margin: 0 auto;
                margin-top: 62px;
                img {
                    width: 72px;
                    height: 72px;
                    margin: 34px 0 34px 113px;
                    vertical-align: top;
                }
                .box_info {
                    padding: 40px 0;
                    display: inline-block;
                    p {
                        font-size: 32px;
                        color: #333;
                        margin-bottom: 20px;
                    }
                    span {
                        font-size: 24px;
                        color: #b3b3b3;
                    }
                }
            }
        }


        .closePage {
            margin: 60px 0;
            width: 560px;
            height: 100px;
            border-radius: 50px;
            border: 1px solid #e6e6e6;
            box-sizing: border-box;
            text-align: center;
            color: #333;
            font-size: 30px;
            font-family: 'microsoft yahei';
            line-height: 100px;
            padding: 0;
        }
    }
}
</style>







