import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../components/App.vue';
import MintUI from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css'; // 引入mui的扩展图标样式
import '../iconfont/demo.css';
import '../iconfont/iconfont.css';
// import VueScroll from 'vue-scroll';//引入vue-scroll插件
// import BScroll from 'better-scroll';


Vue.use(VueRouter);
Vue.use(MintUI);
// Vue.use(VueScroll);
// Vue.use(BScroll);


//导入路由对象
import router from './router.js';  // 路由



new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
