
<template>
  <main>
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </main>
</template>

<script>

// 引入顶部固定功能栏
import Cheader from './home/header.vue'
// 引入底部导航栏
import Cfooter from './home/footer.vue';

export default {
  components:{
    'v-header':Cheader,
    'v-footer': Cfooter
  }
}
</script>

<style>

</style>



