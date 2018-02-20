<template>
    <div id="tmpl">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList">
                <img v-bind:src="item.img">
            </mt-swipe-item>
        </mt-swipe>

        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/news/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photo/photolist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">留言反馈</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">视频专区</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">联系我们</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import common from "../utils/common.js";

    export default {
        data: function () {
            return {
                lunboList: []
            };
        },

        created: function () {
            this.getImages();
        },

        methods: {
            getImages: function () {
                // 模拟网络请求
                var url = common.apiDomain + "/images";
                this.$http.get(url).then(response => {
                    // success callback
                }, response => {
                    // error callback
                    this.lunboList = [
                        {
                            "url": "",
                            "img": "http://www.fzlol.com/upimg/allimg/141021/1_0T243L11.jpg"
                        },
                        {
                            "url": "",
                            "img": "http://img1.3lian.com/2015/w11/98/d/61.jpg"
                        },
                        {
                            "url": "",
                            "img": "https://tse3.mm.bing.net/th?id=OIP.jkHNnUPGsvzBusYObKb_LwHaEo&pid=Api"
                        }
                    ];
                });
            }
        }
    }
</script>

<style scoped>

    .mint-swipe {
        height: 256px;
    }

    .mint-swipe-item {
        width: 100%;
        height: 100%;
    }

    .mint-swipe-item img {
        width: 100%;
    }

    .mui-content {
        background-color: white;
    }

    .mui-content ul {
        background-color: white;
    }

</style>