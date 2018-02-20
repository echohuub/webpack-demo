<!-- 以后项目的根组件 -->
<template>

    <div>
        <mt-header fixed title="Vue CMS System"></mt-header>

        <div id="back" v-if="isshow">
            <a href="javascirpt:void(0);" @click="backto">返回</a>
        </div>

        <router-view></router-view>

        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-chat">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-contact">
                    <span class="mui-badge">0</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/tabbar-with-map">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">设置</span>
            </router-link>
        </nav>
    </div>

</template>

<script>

    import {Toast} from 'mint-ui';

    // 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
    export default {  // es6的导出对象的写法
        data() {  //等价于 es5的 data:function(){
            return {
                isshow: false,
                msg: 'hello vuejs!'
            }
        },
        watch: {
            '$route': function (newRoute, oldRoute) {
                if (newRoute.path.toLowerCase() == '/home') {
                    this.isshow = false;
                } else {
                    this.isshow = true;
                }
            }
        },
        methods: {
            backto: function () {
                this.$router.go(-1);
            }
        },
        created() {

        }
    }
</script>

<style scoped>

    #back {
        width: 50px;
        position: absolute;
        z-index: 101;
        top: 10px;
        left: 10px;
    }

    #back a {
        color: white;
        font-size: 16px;
        font-weight: bold;
    }
</style>