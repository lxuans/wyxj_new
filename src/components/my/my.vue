<template>
  <section class="user">
    <v-header :title="title"></v-header>
    <div class="user_info">
      <div class="info_photo">
        <img src="../../imgs/user.png" alt="">
        <i></i>
      </div>
      <p class="userName">超级大懒猫</p>
      <div class="mui-media share_box">
        <div class="box_info">
          <img class="mui-media-object mui-pull-left" src="../../imgs/device_black.png">
          <div class="mui-media-body">
            <div class="title">
              <span>汪德尔的私家云</span>
            </div>
            <div class="mui-ellipsis">
              <span>CM1B1H1BA1641AR7TE08</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user_share">
      <div class="share_ewm">
        <img src="../../imgs/ewm.png" alt="">
        <p>扫一扫上面的二维码图案，分享设备</p>
        <div class="share_button">
          <i class="wechat icon-wechat"></i>
          分享给微信好友</div>
      </div>
    </div>
    <v-footer></v-footer>
  </section>

</template>

<script>

// 引入顶部固定功能栏
import Cheader from '../home/header.vue'
// 引入底部导航栏
import Cfooter from '../home/footer.vue';

export default {
  data: function(){
    return {
      title: "我的"
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
  height: 1108px;
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
    }
    .userName {
      text-align: center;
      color: #fff;
      font-size: 32px;
      margin-top: 19px;
    }
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
    .share_box {

      width: 460px;
      margin: 0 auto;
      margin-top: 36px;
      .box_info {
        img {
          width: 72px;
          height: 72px;
          margin: 14px;
        }
        .title {
          font-size: 32px;
          color: #fff;
        }
        .mui-ellipsis {
          font-size: 26px;
          color: #fff;
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
      top: -200px;
      img {}
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
}
</style>
