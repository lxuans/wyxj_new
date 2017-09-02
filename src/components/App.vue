
<template>
  <main>
    
    <router-view></router-view>
    
  </main>
</template>

<script>

// 引入顶部固定功能栏
// import Cheader from './home/header.vue'
// 引入底部导航栏
// import Cfooter from './home/footer.vue';

export default {
  // components:{
  //   'v-header':Cheader,
  //   'v-footer': Cfooter
  // }
}
</script>

<style>
  * {
     font-family: "microsoft yahei" 
  }
  body {
    height: 1334px;
    width: 750px;
    padding-top: 40px;
    
  }
</style>



