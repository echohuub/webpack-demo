// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

import VueRouter from 'vue-router';

// 将VueRouter对象绑定到Vue对象上
Vue.use(VueRouter);

// 导入路由规则对应的组件对象
import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';

// 定义路由规则
var router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        {path: '/home', component: home},
        {path: '/shopcar', component: shopcar}
    ]
});

// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import Mint from 'mint-ui';

Vue.use(Mint);

import '../static/mui/css/mui.css';

import '../static/css/site.css';

import VueResource from 'vue-resource';

Vue.use(VueResource);

// 3.0 利用Vue对象进行解析渲染
new Vue({
    el: '#app',
    router: router,
    // render:function(create){create(App)} //es5的写法
    render: c => c(App)  // es6的函数写法 =>：goes to
});