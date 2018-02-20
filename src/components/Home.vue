<template>
    <div id="tmpl">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunboList">
                <img v-bind:src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
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
                var url = "https://www.baidu.com";
                this.$http.get(url).then(response => {
                    // success callback
                    console.log("成功");
                }, response => {
                    // error callback
                    console.log("失败");
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
        background-color: red;
    }

    .mint-swipe-item img {
        width: 100%;
    }

</style>