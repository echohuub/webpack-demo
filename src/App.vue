<!-- 以后项目的根组件 -->
<template>

    <div>
        <!-- 1.0 template主要是放html元素的（html的页面结构） -->
        <span v-text="msg" class="red"></span>

        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>

        <router-view></router-view>

        <!-- Mint-UI组件 -->
        <mt-button type="danger" size="large" @click="tip">danger</mt-button>

        <!-- MUI组件 -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-home"></span>
                    <div class="mui-media-body">Home</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                    <div class="mui-media-body">Email</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-chatbubble"></span>
                    <div class="mui-media-body">Chat</div>
                </a></li>
            </ul>
        </div>
    </div>

</template>

<script>

    import {Toast} from 'mint-ui';

    // 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
    export default {  // es6的导出对象的写法
        data() {  //等价于 es5的 data:function(){
            return {
                msg: 'hello vuejs!'
            }
        },
        methods: {
            tip: function () {
                Toast("Hello");
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    /*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
    .red {
        color: red;
    }
</style>