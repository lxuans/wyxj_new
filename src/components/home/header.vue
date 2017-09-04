<template>
    <header class="header">
        <mt-header fixed :title="title">
            <div @click="rollback" slot="left">
                <mt-button icon="back">返回</mt-button>
                <!-- <mt-button @click="handleClose">关闭</mt-button> -->
            </div>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </header>
</template>

<script>
export default {

    // 接收来自父指定的title数据
    props: ['title'],

    data: function() {
        return {
            
        }
    },
    methods: {
    // 调用返回上一页
    rollback() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="less" scoped>
.header {
    .mint-header.is-fixed {
        position: static;
    }
    .mint-header {
        width: 750px;
        height: 88px;
        background-color: #000;
    }
}
</style>


