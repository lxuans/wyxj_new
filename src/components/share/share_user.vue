<template>
    <section class="user">
        <div id="user_wrapper" ref="user_wrapper">
            <div>
                <div class="more">
                    <p>上拉加载更多</p>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="">
                            <div class="mui-media-body title">
                                王尔德
                                <p class="mui-ellipsis">03-12 共享了4个文件 | 已共享32个文件</p>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="">
                            <div class="mui-media-body title">
                                王尔德
                                <p class="mui-ellipsis">03-12 共享了4个文件 | 已共享32个文件</p>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="">
                            <div class="mui-media-body title">
                                王尔德
                                <p class="mui-ellipsis">03-12 共享了4个文件 | 已共享32个文件</p>
                            </div>
                        </a>
                    </li>
                    <li class="mui-table-view-cell mui-media">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" src="">
                            <div class="mui-media-body title">
                                王尔德
                                <p class="mui-ellipsis">03-12 共享了4个文件 | 已共享32个文件</p>
                            </div>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    </section>
</template>

<script>

// import BScroll from 'better-scroll';

export default {
    methods: {
        scroll() {
            // new BScroll('#user_wrapper', {})
        }
    },
    mounted() {
        // this.scroll();
    }
}
</script>

<style lang="less" scoped>
#user_wrapper {
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
        .mui-table-view-cell {
            height: 140px;
            padding: 35px 30px 34px 30px;
            border-bottom: 1px solid #eee;
            >a:not(.mui-btn) {
                margin: 0;
                padding: 0;
            }
            .title {
                font-size: 32px;
            }

            .mui-ellipsis {
                font-size: 24px;
                color: #ccc;
                span:nth-of-type(2) {
                    float: right;
                }
            }
        }
    }
}




.new {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
}
</style>

