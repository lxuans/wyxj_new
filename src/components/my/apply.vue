<template>
    <section class="apply">
        <v-header :title="title"></v-header>
        <div class="container">
            <div class="user_apply">
                <div class="user_msg">
                    <img src="../../imgs/user.png" alt="">
                    <p>无敌闪电狗</p>
                    <span>申请使用你的私家云盒子</span>
                </div>
                <div class="user_box">
                    <img src="../../imgs/device_black.png">
                    <div class="box_info">
                        <p>汪德尔的私家云</p>
                        <span>已有3位好友加入</span>
                    </div>
                </div>
                <div class="confirmBtn">
                    <router-link to="/apply/agree">
                        <button class="agree">同意</button>
                    </router-link>
                    <router-link to="/apply/refuse">
                        <button class="refuse">残忍拒绝</button>
                    </router-link>
                </div>

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
.apply {
    .container {
        height: 1294px;
        background: url('../../imgs/mine_bg.jpg') no-repeat #fff;
        background-size: 750px 604px;
        padding: 186px 50px;
        .user_apply {
            height: 844px;
            border-radius: 20px;
            background-color: #fff;
            box-shadow: 0 0 20px 0 rgba(4, 0, 0, 0.15);
            padding: 51.5px 44px;
            .user_msg {
                text-align: center;
                img {
                    width: 160px;
                    height: 160px;
                    margin: 0 auto;
                    border-radius: 50%;
                    overflow: hidden;
                }
                p {
                    font-size: 32px;
                    margin-top: 11px;
                    color: #333333;
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
            .confirmBtn {
                padding: 60px 0;
                .agree,
                .refuse {
                    width: 560px;
                    height: 100px;
                    border-radius: 50px;
                    text-align: center;
                    font-size: 30px;
                    font-family: 'microsoft yahei';
                    line-height: 100px;
                    padding: 0;
                }
                .agree {
                    color: #fff;
                    border: none;
                    background-color: #66a6ff;
                }
                .refuse {
                    color: #333;
                    margin-top: 19px;
                }
            }
        }
    }
}
</style>



