<template>
    <section class="picture">
        <v-header :title="title"></v-header>
        <div class="picture_search">
            <router-link to="/search_history">
                <button>
                    <i class="search icon-search"></i>
                    搜索
                </button>
            </router-link>
        </div>
        <div class="total">共有个{{}}文件</div>
        <div class="picture_data">
            <div class="wrapper">
                <div class="last">
                    <div class="update_time">
                        <span>昨天</span>
                        <span>(2)</span>
                        <i class="arrow_right icon-arrow_right right"></i>
                    </div>
                    <div class="picture_list">
                        <ul class="picture_list_view">
                            <li class="list_view_cell">
                                <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                                <div class="list_view_cell_item">
                                    <div class="detail">
                                        <p>IMG10165456498.jpg</p>
                                        <span>01-24 12:05 | 32.56K</span>
                                    </div>
                                </div>
                            </li>
                            <li class="list_view_cell">
                                <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                                <div class="list_view_cell_item">
                                    <div class="detail">
                                        <p>IMG10165456498.jpg</p>
                                        <span>01-24 12:05 | 32.56K</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="far">
                    <div class="update_time">
                        <span>昨天</span>
                        <span>(2)</span>
                        <i class="arrow_right icon-arrow_right right"></i>
                    </div>
                    <div class="picture_list">
                        <ul class="picture_list_view">
                            <li class="list_view_cell">
                                <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                                <div class="list_view_cell_item">
                                    <div class="detail">
                                        <p>IMG10165456498.jpg</p>
                                        <span>01-24 12:05 | 32.56K</span>
                                    </div>
                                </div>
                            </li>
                            <li class="list_view_cell">
                                <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                                <div class="list_view_cell_item">
                                    <div class="detail">
                                        <p>IMG10165456498.jpg</p>
                                        <span>01-24 12:05 | 32.56K</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Cheader from '../common/header.vue';
export default {
    data: function() {
        return {
            title: "图片"
        }
    },
    components: {
        "v-header": Cheader
    }
}
</script>

<style lang="less" scoped>
.picture {
    background-color: #fff;
    .picture_search {
        width: 750px;
        height: 80px;
        padding: 10px 30px; // margin: 0 auto;
        button {
            width: 690px;
            height: 60px;
            border-radius: 30px;
            font-size: 24px;
            font-family: "microsoft yahei";
            color: #b3b3b3;
            text-align: center;
            line-height: 60px;
            background-color: #f7f7f7;
            padding: 0;
        }
    }

    .total {
        height: 40px;
        text-align: center;
        font-size: 24px;
        color: #b3b3b3;
    }
    .picture_data {
        height: 1086px;
        .update_time {
            height: 70px;
            line-height: 70px;
            padding: 0px 55px 0px 32px;
            font-size: 32px;
            color: #333333;
            span:nth-of-type(2) {
                color: #b3b3b3;
                font-size: 24px;
            }
        }
        .picture_list {
            overflow: hidden;
            .picture_list_view {
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
                                margin-bottom: 30px
                            }
                        }
                    }
                }
            }
        }
    }
    .right {
        float: right;
    }
}
</style>


