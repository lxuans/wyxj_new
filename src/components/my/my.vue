<template>
  <section class="user">
    <v-header :title="title"></v-header>
    <div class="user_info">
      <div class="info_photo">
        <img src="../../imgs/user.png" alt="">
        <i></i>
      </div>
      <p class="userName">超级大懒猫</p>
      <div class="share_box">
        <div class="box_info">
          <img src="../../imgs/device_black.png">
          <div class="info">
            <p>汪德尔的私家云</p>
            <span>CM1B1H1BA1641AR7TE08</span>
          </div>
        </div>
      </div>
    </div>
    <div class="user_share">
      <div class="share_ewm">
        <router-link to="/my/invide">
          <img src="../../imgs/ewm.png" alt="">
        </router-link>
        <p>扫一扫上面的二维码图案，分享设备</p>
        <div class="share_button" @click="shareFile">
          <i class="wechat icon-wechat"></i>
          分享给微信好友</div>
      </div>
    </div>
    <div class="share_arrow" v-if="isShow" @click="shareFile">
      <img src="../../imgs/share_arrow.png" alt="">
    </div>
    <v-footer></v-footer>
  </section>
</template>

<script>

// 引入顶部固定功能栏
import Cheader from '../common/header.vue'
// 引入底部导航栏
import Cfooter from '../common/footer.vue';

export default {
  data: function() {
    return {
      title: "我的",
      isShow: false
    }
  },
  methods: {
    shareFile: function() {
      this.isShow = !this.isShow
    }
  },
  components: {
    'v-header': Cheader,
    'v-footer': Cfooter
  }
}
</script>

<style lang="less" scoped>
.user {
  width: 750px;
  height: 1200px;
  position: relative;
  background-color: #fff;
  .user_info {
    position: relative;
    height: 600px;
    padding-top: 30px;
    background: url("../../imgs/mine_bg.jpg") no-repeat;
    .info_photo {
      width: 160px;
      height: 160px;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
      i {
        display: inline-block;
        width: 90px;
        height: 30px;
        background: url("../../imgs/owner_tag.png") no-repeat;
        position: absolute;
        top: 165px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .userName {
      text-align: center;
      color: #fff;
      font-size: 32px;
      margin-top: 19px;
      margin-bottom: 56px;
    }
    .share_box {
      background-color: red;
      width: 460px;
      margin: 0 auto;
      margin-top: 36px;
      .box_info {
        background-color: pink;
        
        img {
          width: 72px;
          height: 72px;
          margin: 0 0 17px 27px;
          vertical-align: middle;
          float: left;
        }
        .info {
          margin-left: 20px;
          margin-bottom: 20px;
          width: 304px;
          float: left;
          p {
            font-size: 32px;
            color: #fff;
            padding-bottom: 10px;
          }
          span {
            font-size: 26px;
            color: #fff;
          }
        }
      }
    }
  }
  .user_share {
    width: 460px;
    height: 509px;
    margin: 0 auto;
    position: relative;

    .share_ewm {
      position: absolute;
      top: -220px;
      p {
        text-align: center;
        font-size: 28px;
        margin-top: 15px;
        margin-bottom: 41px;
      }
      .share_button {
        width: 460px;
        height: 100px;
        border-radius: 50px;
        background-color: #66a7ff;
        color: #fff;
        font-size: 30px;
        text-align: center;
        line-height: 100px;
        padding: 0 87px;
      }
    }
  }
  .share_arrow {
    width: 750px;
    height: 1118px;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 88px;
    img {
      float: right;
      margin-right: 30px;
    }
  }
}
</style>
