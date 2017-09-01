<template>
    <header class="header">
        <mt-header fixed title="私家云">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
                <!-- <mt-button @click="handleClose">关闭</mt-button> -->
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <div></div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header {
    
    .mint-header {
        width: 750px;
        height: 88px;
        background-color: #000;
    }
    div {
        height: 88px;
    }
}
</style>


