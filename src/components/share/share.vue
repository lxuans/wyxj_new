<template>
  <section class="share_list">
    <v-header></v-header>
    <mt-navbar v-model="selectedTab">
      <mt-tab-item id="v-file">
        <span>文件</span>
      </mt-tab-item>
      <mt-tab-item id="v-user">
        <span>用户</span>
      </mt-tab-item>
    </mt-navbar>

    <div class="total">
      <p>共有0个文件</p>
    </div>
    

    <!-- tab-container -->
    <component :is="selectedTab"></component>
    <!-- <div class="share_file" v-show="isShow">
      <v-file></v-file>
    </div>
    <div class="share_user" v-hide="isHide">
      <v-user></v-user>
    </div> -->
        
    
    <v-footer></v-footer>
  </section>
</template>

<script>

// 引入顶部固定功能栏
import Cheader from '../home/header.vue'
// 引入文件列表
import Cfile from './share_file.vue'
// 引入用户列表
import Cuser from './share_user.vue'
// 引入底部导航栏
import Cfooter from '../home/footer.vue';


export default {

  components: {
    'v-header': Cheader,
    'v-file': Cfile,
    'v-user': Cuser,
    'v-footer': Cfooter
  },

  data: function() {
    return {
      selectedTab: "",
      
    }
  },
  methods: {
    
  }
 
  
}

</script>

<style lang="less" scoped>
.share_list {
  background-color: #fff;
  .mint-navbar {
    width: 750px;
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

  .total {
        height: 40px;
        margin-top: 16px;
        text-align: center;
        font-size: 24px;
    }
  
  .mint-tab-container {
    height: 981px;
    overflow: hidden;
    #wrapper {
      height: 750px;
    }
    .mui-table-view {
      width: 750px;
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
}
</style>


