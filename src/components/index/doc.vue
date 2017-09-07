<template>
    <section class="doc">
        <v-header :title="title"></v-header>
        <!--文档导航栏  -->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell active">
                <router-link to="">全部</router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="">DOC</router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="">PDF</router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="">XLS</router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="">PPT</router-link>
            </li>
            <li class="mui-table-view-cell">
                <router-link to="">其他</router-link>
            </li>
        </ul>
        <!--搜索  -->
        <div class="all_search">
            <router-link to="/search_history">
                <button>
                    <i class="search icon-search"></i>
                    搜索
                </button>
            </router-link>
        </div>
        <!--文件列表  -->
        <div class="total">共有个{{}}文件</div>
        <div class="all_data">
            <div class="wrapper">
                <div class="last">
                    <div class="update_time">
                        <span>昨天</span>
                        <span>(2)</span>
                        <i class="arrow_right icon-arrow_right right"></i>
                    </div>
                    <div class="data_list">
                        <ul class="data_list_view">
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
                        <span>8.30</span>
                        <span>(2)</span>
                        <i class="arrow_right icon-arrow_right right"></i>
                    </div>
                    <div class="data_list">
                        <ul class="data_list_view">
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
            title: "文档"
        }
    },
    methods: {
        // 点击导航项切换样式
        addClass: function() {
            let lis = document.querySelectorAll(".mui-table-view-cell");
            for (var i = 0; i < lis.length; i++) {
                lis[i].onclick = function() {
                    document.querySelector('.active').classList.remove("active");
                    this.classList.add("active");
                }
            }
        }
    },
    mounted() {
        this.addClass();
    },
    components: {
        "v-header": Cheader
    }
}
</script>

<style lang="less" scoped>
.doc {

    .mui-table-view {
        height: 88px;
        padding: 0 30px;
        .mui-table-view-cell {
            float: left;
            height: 88px;
            width: 115px;
            text-align: center;
            line-height: 88px;
            font-size: 28px;
            padding: 0 30px;
            &>a:not(.mui-btn) {
                padding: 0;
                text-decoration: none;
            }
        }
    }

    .mui-card-header img {
        width: 100%;
        height: 100%;
        &[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
    }

    .all_search {
        width: 750px;
        height: 88px;
        border-radius: 30px;
        padding: 14px 30px; // margin: 0 auto;
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
    .all_data {
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
        .data_list {
            overflow: hidden;
            .data_list_view {
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
    .active {
        border-bottom: 4px solid #66a7ff;
        color: #66a7ff;
    }
}
</style>

