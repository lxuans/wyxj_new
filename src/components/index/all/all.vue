<template>
    <section class="all">
        <v-header :title="title"></v-header>
        <div class="all_search" v-if="isHide">
            <router-link to="/search_history">
                <button>
                    <i class="search icon-search"></i>
                    搜索
                </button>
            </router-link>
        </div>
        <div class="selectItem" v-show="isShow">
            <header class="mint-header">
                <div class="mint-header-button is-left">
                    <button @click="checkNone" class="mint-button mint-button--default mint-button--normal">
                        <label class="mint-button-text">取消</label>
                    </button>
                </div>
                <h1 class="mint-header-title">已选择 0 项</h1>
                <div class="mint-header-button is-right">
                    <button @click="checkAll" class="mint-button mint-button--default mint-button--normal">
                        <label class="mint-button-text">全选</label>
                    </button>
                </div>
            </header>
            <button class="shareBtn">
                <i class="share icon-share"></i>
                分享
            </button>
        </div>
        <div class="total">共有个{{}}文件</div>
        <div class="all_list">
            <ul class="all_list_view">
                <li class="list_view_cell">
                    <img class="list_view_cell_look" src="../../../imgs/device_pink.png">
                    <div class="list_view_cell_item">
                        <div class="detail">
                            <p>IMG10165456498.jpg</p>
                            <span>01-24 12:05 | 32.56K</span>
                        </div>

                        <div class="mui-input-row mui-checkbox" id="chekbox">
                            <input name="checkbox1" value="Item 3" type="checkbox" :checked="checked" class="check">
                        </div>
                    </div>
                </li>
                <li class="list_view_cell">
                    <img class="list_view_cell_look" src="../../../imgs/device_pink.png">
                    <div class="list_view_cell_item">
                        <div class="detail">
                            <p>IMG10165456498.jpg</p>
                            <span>01-24 12:05 | 32.56K</span>
                        </div>

                        <div class="mui-input-row mui-checkbox" id="chekbox">
                            <input name="checkbox1" value="Item 3" type="checkbox" :checked="checked" class="check">
                        </div>
                    </div>
                </li>
                <li class="list_view_cell">
                    <img class="list_view_cell_look" src="../../../imgs/device_pink.png">
                    <div class="list_view_cell_item">
                        <div class="detail">
                            <p>IMG10165456498.jpg</p>
                            <span>01-24 12:05 | 32.56K</span>
                        </div>

                        <div class="mui-input-row mui-checkbox" id="chekbox">
                            <input name="checkbox1" value="Item 3" type="checkbox" :checked="checked" class="check">
                        </div>
                    </div>
                </li>
                <li class="list_view_cell">
                    <img class="list_view_cell_look" src="../../../imgs/device_pink.png">
                    <div class="list_view_cell_item">
                        <div class="detail">
                            <p>IMG10165456498.jpg</p>
                            <span>01-24 12:05 | 32.56K</span>
                        </div>

                        <div class="mui-input-row mui-checkbox" id="chekbox">
                            <input name="checkbox1" value="Item 3" type="checkbox" :checked="checked" class="check">
                        </div>
                    </div>
                </li>
                <li class="list_view_cell">
                    <img class="list_view_cell_look" src="../../../imgs/device_pink.png">
                    <div class="list_view_cell_item">
                        <div class="detail">
                            <p>IMG10165456498.jpg</p>
                            <span>01-24 12:05 | 32.56K</span>
                        </div>

                        <div class="mui-input-row mui-checkbox" id="chekbox">
                            <input name="checkbox1" value="Item 3" type="checkbox" :checked="checked" class="check">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

import Cheader from '../../common/header.vue';

export default {

    data: function() {
        return {
            title: "全部",
            isShow: false,
            isHide: true,
            checked: "",
        }
    },
    methods: {

        checkAll: function() {
            this.checked = true;
        },

        checkNone: function() {
            this.checked = false;
            this.isHide = true;
            this.isShow = false;
        },



    },
    mounted() {
        var check = this.$el.querySelectorAll('.check');
        var _this = this;
        for (var i = 0; i < check.length; i++) {
            check[i].onchange = function() {
                var that = this;
                if (that.checked === true) {
                    setTimeout(function() {
                        // that.checked = true;
                        _this.isHide = false;
                        _this.isShow = true;
                    }, 500)
                }
            }
        }






        // var obj = document.getElementById("tt");  
        // var value = obj.checked;  
        // alert(value);// 若选中，则返回true，否则返回false  
        // obj.checked = false;// 设置复选框为不选中状态
    },
    components: {
        'v-header': Cheader,

    }
}
</script>

<style lang="less" scoped>
.all {
    height: 1304px;
    background-color: #fff;
    position: relative;
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
    .selectItem {
        .mint-header {
            width: 750px;
            height: 88px;
            background-color: #66a7ff;
            padding: 0 40px;
            .mint-button-text {
                font-size: 32px;
            }
            .mint-header-title {
                font-size: 36px;
            }
        }
        .shareBtn {
            width: 750px;
            height: 98px;
            background-color: #66a7ff;
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 32px;
            color: #fff;
            border: none;
        }
    }
    .total {
        height: 40px;
        text-align: center;
        font-size: 24px;
        color: #b3b3b3;
    }
    .all_list {
        height: 1086px;
        overflow: hidden;
        .all_list_view {
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
    #chekbox {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 50%;
        right: 30px;
        transform: translateY(-50%);
        text-align: center;
        input[type='checkbox']:before {
            font-family: Muiicons;
            font-size: 48px;
            font-weight: normal;
            line-height: 1;
            text-decoration: none;
            color: #aaa;
            border-radius: 0;
            background: none;
            -webkit-font-smoothing: antialiased;
        }
        input[type='checkbox']:checked:before {
            color: #66a7ff;
        }
    }
}
</style>


