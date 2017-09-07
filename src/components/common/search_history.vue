<template>
    <section class="history">
        <v-header title="搜索"></v-header>
        <div class="search_box">
            <i class="search icon-search"></i>
            <input type="text" placeholder="请输入关键字">
            <router-link to="/all/all_search">
                <input type="button" value="搜索">
            </router-link>
        </div>
        <div class="historyItem">
            <span @click="showHistory" class="left">历史记录</span>
            <span class="trashbin icon-trashbin right" @click="clearHistory">清除</span>
        </div>
        <div class="history_list" v-if="isShow">
            <ul class="history_list_view">
                <li class="list_view_cell">
                    <span class="title">2015旅游</span>
                </li>
                <li class="list_view_cell">
                    <span class="title">2015旅游</span>
                </li>
                <li class="list_view_cell">
                    <span class="title">2015旅游</span>
                </li>
                <li class="list_view_cell">
                    <span class="title">2015旅游</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>

import Cheader from './header.vue'
export default {
    data: function() {
        return {
            isShow: true
        }
    },
    methods: {
        clearHistory:function(){
            this.isShow = false
        },
        showHistory:function(){
            this.isShow = true
        }
    },
    components: {
        'v-header': Cheader
    }
}
</script>

<style lang="less" scoped>
.history {
    background-color: #fff;
    height: 1206px;
    
    .search_box {
        width: 750px;
        height: 88px;
        padding: 13px 0px 14px 30px;
        position: relative;
        border-bottom: 1px solid #eee;
        i {
            display: inline-block;
            width: 30px;
            height: 30px;
            position: absolute;
            left: 45px;
            top: 25px;
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
            font-family: "microsoft yahei";
        }
        input[type=button] {
            width: 108px;
            height: 60px;
            text-align: center;
            border: none;
            font-size: 28px;
            color: #66a6ff;
            font-family: "microsoft yahei";
        }
    }
    .historyItem {
        height: 40px;
        padding: 0 30px;
        margin-top: 25px;
        font-size: 24px;
        color: #b3b3b3;
        
    }
    .history_list {
        height: 1106px;
        overflow: hidden;
        .history_list_view {
            width: 750px;
            padding: 0 30px;
            .list_view_cell {
                height: 110px;
                width: 690px;
                margin: 0;
                border-bottom: 1px solid #eee;
                .title {
                    font-size: 32px;
                    color: #333333;
                    line-height: 110px;
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
    .left {
        float: left;
    }
    .right {
        float: right;
    }
}
</style>


