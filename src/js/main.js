import Vue from 'vue';
import App from '../components/App.vue';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'mui/dist/css/mui.css';
import '../iconfont/demo.css';
import '../iconfont/iconfont.css';

Vue.use(MintUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
