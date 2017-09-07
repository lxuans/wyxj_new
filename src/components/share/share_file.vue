<template>
    <section class="file">
        <div id="file_wrapper" ref="wrapper">
            <div>
                <div class="more">
                    <p>上拉加载更多</p>
                </div>
                <ul class="mui-table-view content">
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                    <li class="list_view_cell">
                        <img class="list_view_cell_look" src="../../imgs/device_blue.png">
                        <div class="list_view_cell_item">
                            <div class="detail">
                                <p>IMG10165456498.jpg</p>
                                <span>01-24 12:05 | 32.56K</span>
                            </div>
                        </div>
                        <i class="new"></i>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>

import BScroll from 'better-scroll';

export default {
    methods: {
        scroll() {
            new BScroll('#file_wrapper', {})
        }
    },
    mounted() {
        this.scroll();
    }
}
</script>

<style lang="less" scoped>
#file_wrapper {
    height: 981px;
    overflow: hidden;
    .more {
        height: 40px;
        margin-top: 16px;
        text-align: center;
        font-size: 24px;
    }
    .mui-table-view {
        width: 750px;
        .list_view_cell {
            height: 140px;
            padding: 0;
            position: relative;
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
            .new {
                display: block;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: red;
                position: absolute;
                top: 50%;
                right: 30px;
                transform: translateY(-50%);
            }
        }
    }
}
</style>

