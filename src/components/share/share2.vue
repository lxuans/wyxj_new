<template>
    <main>
        <div class="page-navbar" v-model="selected">
            <div class="mint-navbar page-part">
                <a class="mint-tab-item is-selected" id="file">
                    <div class="mint-tab-item-label">选项一</div>
                </a>
                <a class="mint-tab-item" id="user">
                    <div class="mint-tab-item-label">选项二</div>
                </a>
            </div>
            <div>
                <a class="mint-cell page-part">
                    <!---->
                    <div class="mint-cell-left"></div>
                    <div class="mint-cell-wrapper">
                        <div class="mint-cell-title">
                            <!---->
                            <span class="mint-cell-text">当前选中</span>
                            <!---->
                        </div>
                        <div class="mint-cell-value">1</div>
                    </div>
                    <div class="mint-cell-right"></div>
                    <!---->
                </a>
            </div>
            <div class="mint-tab-container" v-model="selected">
                <div class="mint-tab-container-wrap">
                    <div class="mint-tab-container-item" id="file">
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 1</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 2</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 3</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 4</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 5</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 6</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 7</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 8</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 9</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">内容 10</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                    </div>
                    <div class="mint-tab-container-item" id="user" style="display: none;">
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">测试 1</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">测试 2</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">测试 3</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                        <a class="mint-cell">
                            <!---->
                            <div class="mint-cell-left"></div>
                            <div class="mint-cell-wrapper">
                                <div class="mint-cell-title">
                                    <!---->
                                    <span class="mint-cell-text">测试 4</span>
                                    <!---->
                                </div>
                                <div class="mint-cell-value">
                                    <span></span>
                                </div>
                            </div>
                            <div class="mint-cell-right"></div>
                            <!---->
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script>
export default {
    data: function() {
        return {
            selected: true,
            title: "内容"
        }
    },
}
</script>

<style lang="less" scoped>
.mint-navbar {
    height: 72px;
    .mint-tab-item {
        font-size: 26px;
        color: #000;
        line-height: 72px;
        padding: 0;
        margin: 0;
        .mint-tab-item-label {
            span {
                line-height: 72px;
                font-size: 26px;
            }
        }
    }
    .mint-tab-item:hover {
        text-decoration: none;
    }
}

.mui-table-view {
    .mui-table-view-cell {
        height: 140px;
        padding: 35px 30px 34px 30px;
        border-bottom: 1px solid #eee;
        .list_item {
            margin: 0;
            padding: 0;
            color: inherit;
            .mui-media-object {
                margin-top: 20px;
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

