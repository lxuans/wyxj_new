<template>
    <section class="changebox">
        <v-header></v-header>
        <div class="mui-table-view-cell mui-media">
            <div class="list_item">
                <img class="mui-media-object mui-pull-left" src="../../imgs/device_pink.png">
                <div class="mui-media-body">
                    <div class="title">
                        <span>小孟的私家云</span>
                    </div>
                    <div class="mui-ellipsis">
                        <span>已接入 | CM1B1H1BA16ATAGSDF</span>
                    </div>
                </div>
                <div class="owner">
                    <img src="../../imgs/loading.png" alt="">
                </div>
            </div>
        </div>
        <div class="mui-table-view-cell mui-media">
            <div class="list_item">
                <img class="mui-media-object mui-pull-left" src="../../imgs/device_pink.png">
                <div class="mui-media-body">
                    <div class="title">
                        <span>小孟的私家云</span>
                    </div>
                    <div class="mui-ellipsis">
                        <span>已接入 | CM1B1H1BA16ATAGSDF</span>
                    </div>
                </div>
                <div class="owner">
                    <img src="../../imgs/loading.png" alt="">
                </div>
            </div>
        </div>
        <div class="mui-table-view-cell mui-media">
            <div class="list_item">
                <img class="mui-media-object mui-pull-left" src="../../imgs/device_pink.png">
                <div class="mui-media-body">
                    <div class="title">
                        <span>小孟的私家云</span>
                    </div>
                    <div class="mui-ellipsis">
                        <span>已接入 | CM1B1H1BA16ATAGSDF</span>
                    </div>
                </div>
                <div class="owner">
                    <img src="../../imgs/loading.png" alt="">
                </div>
            </div>
        </div>
        <div class="mui-table-view-cell mui-media">
            <div class="list_item">
                <img class="mui-media-object mui-pull-left" src="../../imgs/device_pink.png">
                <div class="mui-media-body">
                    <div class="title">
                        <span>小孟的私家云</span>
                    </div>
                    <div class="mui-ellipsis">
                        <span>已接入 | CM1B1H1BA16ATAGSDF</span>
                    </div>
                </div>
                <div class="owner">
                    <img src="../../imgs/loading.png" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import Cheader from '../home/header.vue';

export default {
    components: {
        'v-header': Cheader
    }
}
</script>

<style lang="less" scoped>
.changebox {
    height: 1294px;
    .mui-table-view-cell {
        height: 160px;
        padding: 43px 31px 44px 24px;
        position: relative;
        img {
            width: 72px;
            height: 72px;
            margin-right: 29px;
        }
        .title {
            font-size: 32px;
        }
        .mui-ellipsis {
            font-size: 24px;
            color: #ccc;
        }
        .owner {
            display: inline-block;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            position: absolute;
            right: 31px;
            top: 50px;
            img {
                width: 60px;
                height: 60px;
            }
        }
    }
}
</style>


