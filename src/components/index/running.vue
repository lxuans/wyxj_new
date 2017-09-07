<template>
    <main>
        <v-header title="私家云"></v-header>
        <div class="running">
            <div class="turns" @click="trunPage">{{sec}}跳过</div>
            <div class="copyright">Copyright © 2016-2017 炒米科技</div>
        </div>
    </main>
</template>

<script>

import Cheader from '../common/header.vue';

export default {
    data:function(){
        return {
            sec:3
        }
    },
    methods:{
        count:function(){
            var _this = this;
            var timeID = setInterval(function(){
                _this.sec --;
                if( _this.sec < 0){
                    clearInterval(timeID);
                    console.log(_this.sec)
                    location.hash = "#/index";
                }
            },1000);
            
        },
        trunPage:function(){
            location.hash = "#/index";
        }
    },
    created(){
        this.count()
    },
    components: {
        "v-header": Cheader
    }
}
</script>

<style lang="less" scoped>
    .running {
        height: 1206px;
        background: url("../../imgs/splash_default.jpg") no-repeat;
        position: relative;
        .turns {
            width: 100px;
            height: 60px;
            position: absolute;
            top: 40px;
            right: 30px;
            border-radius: 4px;
            background-color:rgba(0, 0, 0, .5);
            font-size: 28px;
            color: #fff;
            text-align: center;
            line-height: 60px;
        }
        .copyright {
            width: 750px;
            text-align: center;
            position: absolute;
            bottom: 40px;
            font-size: 20px;
            color: #999999;
        }
    }
</style>


