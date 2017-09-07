import VueRouter from 'vue-router';

// 导入index组件
import Crunning from '../components/index/running.vue';
import Cindex from '../components/index/index.vue';
import Cchangebox from '../components/index/changebox.vue';
import Call from '../components/index/all/all.vue';
import CallSearch from '../components/index/all/all_search.vue';
import CallHistory from '../components/common/search_history.vue';
import Cpicture from '../components/index/picture.vue';
import Cdoc from '../components/index/doc.vue';
import Cmusic from '../components/index/music.vue';

import Cshare from '../components/share/share.vue';

import Cmy from '../components/my/my.vue';
import Cinvide from '../components/my/invide.vue';
import Capply from '../components/my/apply.vue';
import Cagree from '../components/my/agree.vue';
import Crefuse from '../components/my/refuse.vue';

export default new VueRouter({
    routes: [
        // 公共部分
        { path: '/search_history', component: CallHistory},


        // 私家云
        { path: '/', redirect: '/running' },
        { path: '/running',component: Crunning },
        { path: '/index', component: Cindex },
        // 切换设备组件
        { path: '/index/changebox', component: Cchangebox },
        // 导航-全部
        { path: '/index/all', component: Call },
        { path: '/all/all_search', component: CallSearch },
        // 导航-图片
        { path: '/index/picture', component: Cpicture },
        // 导航-文档
        { path: '/index/doc', component: Cdoc },
        // 导航-音乐
        { path: '/index/music', component: Cmusic },

        // 共享
        { path: '/share', component: Cshare },

        //我的
        { path: '/my', component: Cmy },
        { path: '/my/invide', component: Cinvide },
        { path: '/apply', component: Capply },
        { path: '/apply/agree', component: Cagree },
        { path: '/apply/refuse', component: Crefuse },
    ]
});