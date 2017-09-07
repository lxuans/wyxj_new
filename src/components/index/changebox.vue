<template>
    <section class="changebox">
        <v-header title="切换设备"></v-header>
        <ul class="all_list_view">
            <li class="list_view_cell">
                <img class="list_view_cell_look" src="../../imgs/device_pink.png">
                <div class="list_view_cell_item">
                    <div class="detail">
                        <p>IMG10165456498.jpg</p>
                        <span>01-24 12:05 | 32.56K</span>
                    </div>

                    <div class="owner">
                        <img src="../../imgs/loading.png" alt="">
                    </div>
                </div>
            </li>
            <li class="list_view_cell">
                <img class="list_view_cell_look" src="../../imgs/device_pink.png">
                <div class="list_view_cell_item">
                    <div class="detail">
                        <p>IMG10165456498.jpg</p>
                        <span>01-24 12:05 | 32.56K</span>
                    </div>

                    <div class="owner">
                        <img src="../../imgs/loading.png" alt="">
                    </div>
                </div>
            </li>
            <li class="list_view_cell">
                <img class="list_view_cell_look" src="../../imgs/device_pink.png">
                <div class="list_view_cell_item">
                    <div class="detail">
                        <p>IMG10165456498.jpg</p>
                        <span>01-24 12:05 | 32.56K</span>
                    </div>

                    <div class="owner">
                        <img src="../../imgs/loading.png" alt="">
                    </div>
                </div>
            </li>
            <li class="list_view_cell">
                <img class="list_view_cell_look" src="../../imgs/device_pink.png">
                <div class="list_view_cell_item">
                    <div class="detail">
                        <p>IMG10165456498.jpg</p>
                        <span>01-24 12:05 | 32.56K</span>
                    </div>

                    <div class="owner">
                        <img src="../../imgs/loading.png" alt="">
                    </div>
                </div>
            </li>
            <li class="list_view_cell">
                <img class="list_view_cell_look" src="../../imgs/device_pink.png">
                <div class="list_view_cell_item">
                    <div class="detail">
                        <p>IMG10165456498.jpg</p>
                        <span>01-24 12:05 | 32.56K</span>
                    </div>

                    <div class="owner">
                        <img src="../../imgs/loading.png" alt="">
                    </div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>

import Cheader from '../common/header.vue';

export default {
    components: {
        'v-header': Cheader
    }
}
</script>

<style lang="less" scoped>
.changebox {
    height: 1294px;
    .all_list_view {
        list-style: none;
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


