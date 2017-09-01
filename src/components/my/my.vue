<template>
  <section class="user">
    <div class="user_info">
      <div class="info_photo">
        <img src="../../imgs/user.png" alt="">
      </div>
      <span></span>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.user {
  width: 750px;
  height: 1108px;
  background: url("../../imgs/mine_bg.jpg") no-repeat;
  padding-top: 30px;
  .user_info {

    // background-color: red;
    
    position: relative;
    .info_photo {
      width: 160px;
      height: 160px;
      margin: 0 auto;
      border-radius: 50%;
      overflow: hidden;
    }
    span {
      display: inline-block;
      width: 90px;
      height: 30px;
      background: url("../../imgs/owner_tag.png") no-repeat;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
