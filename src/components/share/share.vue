<template>
  <section>
    <mt-navbar v-model="selected">
      <mt-tab-item id="file" class="is-selected">
        <span>文件</span>
      </mt-tab-item>
      <mt-tab-item id="user">
        <span>用户</span>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="file">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media">
            <div class="list_item">
              <img class="mui-media-object mui-pull-left" src="../../imgs/device_pink.png">
              <div class="mui-media-body">
                <div class="title">
                  <span>IMG10165456498.jpg</span>
                </div>
                <div class="mui-ellipsis">
                  <span>01-24 12:05 | 32.56K</span>
                  <span>超级大懒猫</span>
                </div>
              </div>
              <i class="new"></i>
            </div>

          </li>
          <li class="mui-table-view-cell mui-media">
            <div class="list_item">
              <img class="mui-media-object mui-pull-left" src="../../imgs/device_pink.png">
              <div class="mui-media-body">
                <div class="title">
                  <span>IMG10165456498.jpg</span>
                </div>
                <div class="mui-ellipsis">01-24 12:05 | 32.56K</div>
              </div>
              <i class=""></i>
            </div>
          </li>
          <li class="mui-table-view-cell mui-media">
            <div class="list_item">
              <img class="mui-media-object mui-pull-left" src="../../imgs/device_pink.png">
              <div class="mui-media-body">
                <div class="title">
                  <span>IMG10165456498.jpg</span>
                </div>
                <div class="mui-ellipsis">01-24 12:05 | 32.56K</div>
              </div>
              <i class=""></i>
            </div>
          </li>

        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="user">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-left" src="">
              <div class="mui-media-body">
                王尔德
                <p class="mui-ellipsis">03-12 共享了4个文件 | 已共享32个文件</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;" class="">
              <img class="mui-media-object mui-pull-left" src="">
              <div class="mui-media-body">
                幸福
                <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-left" src="">
              <div class="mui-media-body">
                木屋
                <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-left" src="">
              <div class="mui-media-body">
                CBD
                <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
              </div>
            </a>
          </li>

        </ul>
      </mt-tab-container-item>
    </mt-tab-container>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      selected: true,
      title: "内容"
    }
  },
  methods:{
    selectedItem:()=>{
      
    }
  }
}

</script>

<style lang="less" scoped>
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


