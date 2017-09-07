<template>
    <section class="invide">
        <v-header :title="title"></v-header>
        <div class="content">
            <div class="user_info">
                <div class="info_photo">
                    <img src="../../imgs/user.png" alt="">
                </div>
                <p class="userName">超级大懒猫</p>
                <p>邀请你使用私家云盒子</p>
                <div class="share_box">
                    <div class="box_info">
                        <img class="list_view_cell_look" src="../../imgs/user.png">
                        <div class="detail">
                            <p>王尔德</p>
                            <span>已有3位好友加入</span>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="mui-table-view">
                <li class="list_view_cell">
                    <img class="list_view_cell_look" src="../../imgs/user.png">
                    <div class="list_view_cell_item">
                        <div class="detail">
                            <p>王尔德</p>
                            <span>03-12 共享了4个文件 | 已共享32个文件</span>
                        </div>
                    </div>
                </li>
                <li class="list_view_cell">
                    <img class="list_view_cell_look" src="../../imgs/user.png">
                    <div class="list_view_cell_item">
                        <div class="detail">
                            <p>王尔德</p>
                            <span>03-12 共享了4个文件 | 已共享32个文件</span>
                        </div>
                    </div>
                </li>
                <li class="list_view_cell">
                    <img class="list_view_cell_look" src="../../imgs/user.png">
                    <div class="list_view_cell_item">
                        <div class="detail">
                            <p>王尔德</p>
                            <span>03-12 共享了4个文件 | 已共享32个文件</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <router-link to="/apply">
            <div class="footer">
                <button>我也要加入</button>
            </div>
        </router-link>
    </section>
</template>

<script>

// 引入顶部固定功能栏
import Cheader from '../common/header.vue';

export default {
    data: function() {
        return {
            title: "私家云分享",
        }
    },
    components: {
        'v-header': Cheader,
    }
}
</script>

<style lang="less" scoped>
.invide {
    .content {
        height: 1106px;
        background: url('../../imgs/mine_bg.jpg') no-repeat #fff;
        background-size: 750px 372px;
        .user_info {
            position: relative;
            padding-top: 30px;
            .info_photo {
                width: 160px;
                height: 160px;
                margin: 0 auto;
                border-radius: 50%;
                overflow: hidden;
            }
            >p {
                text-align: center;
                color: #fff;
                font-size: 24px;
            }
            .userName {
                font-size: 32px;
                margin-top: 11px;
            }
            .share_box {
                height: 140px;
                width: 490px;
                border-radius: 20px;
                background-color: #fff;
                margin: 0 auto;
                margin-top: 30px;
                padding: 14px 25px 0 25px;
                .box_info {
                    img {
                        width: 72px;
                        height: 72px;
                        margin: 14px;
                        float: left;
                    }
                    .detail {
                        float: left;
                        font-size: 24px;
                        color: #ccc;
                        p {
                            font-size: 32px;
                            color: #333;
                            margin-top: 18px;
                            margin-bottom: 25px;
                        }
                    }
                }
            }
        }

        .mui-table-view {
            width: 750px;
            .list_view_cell {
                height: 140px;
                padding: 0;
                .list_view_cell_look {
                    width: 100px;
                    height: 100px;
                    margin: 20px 25px;
                    max-width: 100px;
                    float: left;
                }
                .list_view_cell_item {
                    display: inline-block;
                    float: left;
                    width: 560px;
                    height: 140px;
                    padding: 27px 30px 28px 0;
                    margin: 0;
                    color: inherit;
                    border-bottom: 1px solid #eee;
                    position: relative;

                    .detail {
                        font-size: 24px;
                        color: #ccc;
                        p {
                            font-size: 32px;
                            margin-top: 7px;
                            margin-bottom: 30px;
                            color: #333;
                        }
                    }
                }
            }
            .mui-table-view-cell:after {
                height: 0px;
            }
            .mui-table-view-cell+.mui-table-view-cell {
                border-top: 1px solid #ccc;
            }
        }
        .mui-table-view:before {
            height: 0px;
        }
        .mui-table-view:after {
            height: 0px;
        }
    }
    .footer {
        button {
            width: 750px;
            height: 100px;
            background-color: #66a7ff;
            text-align: center;
            color: #fff;
            font-size: 30px;
            font-family: 'microsoft yahei';
        }
    }
}
</style>


