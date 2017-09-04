import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../components/index/index.vue';
import Cchangebox from '../components/index/changebox.vue';
import Call from '../components/index/all/all.vue';
import CallSearch from '../components/index/all/all_search.vue';

import Cshare from '../components/share/share.vue';
import Cmy from '../components/my/my.vue';

export default new VueRouter({
    routes: [

        // 私家云
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },
        // 切换设备组件
        { path: '/index/changebox', component: Cchangebox },
        // 导航-全部
        { path: '/index/all', component: Call},
        { path: '/all/all_search', component: CallSearch},
        

        // 共享
        { path: '/', redirect: '/share' },
        { path: '/share', component: Cshare },

        //我的
        { path: '/', redirect: '/my' },
        { path: '/my', component: Cmy },
    ]
});