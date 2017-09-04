<template>
    <section class="search">
        <v-header title="搜索"></v-header>
        <div class="search_box">
            <i class="search icon-search"></i>
            <input type="text" placeholder="请输入关键字">
            <input type="button" value="搜索">
        </div>
        <div class="total">共有个{{}}文件</div>
        <div class="search_list">
            <ul class="search_list_view">
                <li class="list_view_cell">
                    <img class="list_view_cell_look mui-pull-left" src="../../../imgs/device_pink.png">
                    <div class="list_view_cell_item">
                        <div class="cell_item_body">
                            <div class="title">
                                <span>IMG10165456498.jpg</span>
                            </div>
                            <div class="detail">
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="share icon-share"></i>
                    </div>
                </li>
                <li class="list_view_cell">
                    <img class="list_view_cell_look mui-pull-left" src="../../../imgs/device_pink.png">
                    <div class="list_view_cell_item">
                        <div class="cell_item_body">
                            <div class="title">
                                <span>IMG10165456498.jpg</span>
                            </div>
                            <div class="detail">
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="share icon-share"></i>
                    </div>
                </li>
                <li class="list_view_cell">
                    <img class="list_view_cell_look mui-pull-left" src="../../../imgs/device_pink.png">
                    <div class="list_view_cell_item">
                        <div class="cell_item_body">
                            <div class="title">
                                <span>IMG10165456498.jpg</span>
                            </div>
                            <div class="detail">
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="share icon-share"></i>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

import Cheader from '../../home/header.vue'
export default {
    data: function() {
        return {

        }
    },
    components: {
        'v-header': Cheader
    }
}
</script>

<style lang="less" scoped>
.search {
    background-color: #fff;
    height: 1206px;
    .search_box {
        width: 720px;
        height: 60px;
        margin: 14px 30px;
        position: relative;
        i {
            display: inline-block;
            width: 30px;
            height: 30px;
            position: absolute;
            left: 20px;
            top: 5px;
            font-size: 30px;
            color: #b3b3b3;
        }
        input[type=text] {
            width: 582px;
            height: 60px;
            background-color: #f7f7f7;
            font-size: 24px;
            padding-left: 60px;
            margin: 0;
            border-radius: 30px;
        }
        input[type=button] {
            width: 108px;
            height: 60px;
            text-align: center;
            border: none;
            font-size: 28px;
            color: #66a6ff;
        }
    }
    .total {
        height: 40px;
        text-align: center;
        font-size: 24px;
        color: #b3b3b3;
    }
    .search_list {
        height: 1106px;
        overflow: hidden;
        .search_list_view {
            width: 750px;
            .list_view_cell {
                height: 140px;
                padding: 0;
                .list_view_cell_look {
                    width: 100px;
                    height: 100px;
                    margin: 20px 25px;
                    max-width: 100px;
                }
                .list_view_cell_item {
                    display: inline-block;
                    width: 570px;
                    padding: 27px 30px 28px 0;
                    margin: 0;
                    color: inherit; 
                    border-bottom: 1px solid #ccc;
                    position: relative;
                    .title {
                        font-size: 32px;
                    }
                    .detail {
                        font-size: 24px;
                        color: #ccc;
                    }
                }
            }
        }
    }
    .share {
        display: inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        color: #66a6ff;
    }
}
</style>


