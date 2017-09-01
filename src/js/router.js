import VueRouter from 'vue-router';

// 导入index组件
import Cindex from '../components/index/index.vue';
import Cshare from '../components/share/share.vue';
import Cmy from '../components/my/my.vue';

export default new VueRouter({
    routes: [

        // 私家云
        { path: '/', redirect: '/index' },
        { path: '/index', component: Cindex },

        // 共享
        { path: '/', redirect: '/share' },
        { path: '/share', component: Cshare },

        //我的
        { path: '/', redirect: '/my' },
        { path: '/my', component: Cmy },
    ]
});