<template>
    <div id="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <router-link v-bind="{to: '/news/newsinfo/' + item.id}">
                    <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>{{item.desc}}</p>
                        <div class="ft">
                            <span>创建时间: {{item.create_time | datefmt('YYYY-MM-DD HH:mm')}}</span>
                            <span class="click">点击数: {{item.click_count}}</span>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                list: []
            };
        },
        created: function () {
            this.getNewsList();
        },
        methods: {
            getNewsList: function () {
                this.$http.get('static/newslist.json').then(response => {
                    this.list = response.body;
                });
            }
        }

    }
</script>

<style scoped>

    .mui-table-view img {
        width: 80px;
        height: 80px;
    }

    .mui-table-view .mui-media-object {
        max-width: 80px;
        line-height: 80px;
    }

    .ft {
        margin-top: 1.5em;
        font-size: 14px;
        color: #aaaaaa;
    }

    .ft .click {
        margin-left: 10px;
    }
</style>