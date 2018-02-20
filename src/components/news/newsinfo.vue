<template>
    <div id="tmpl">
        <div class="title">
            <h4>{{title}}</h4>
            <p>{{create_time | datefmt("YYYY-MM-DD HH:mm")}} {{view_count}}次浏览</p>
        </div>

        <div class="line"></div>

        <div id="content">
            {{content}}
        </div>
    </div>
</template>

<script>

    import common from "../../utils/common.js";

    export default {
        data: function () {
            return {
                id: 0,
                title: "",
                create_time: "",
                view_count: 0,
                content: ""
            }
        },
        created: function () {
            this.id = this.$route.params.id;
            this.getNewsInfo(this.id);
        },
        methods: {
            getNewsInfo: function (id) {

                var url = common.apiDomain + "/newsInfo";

                this.$http.get('static/newslist.json').then(response => {
                    var list = response.body;
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        if (item['id'] === parseInt(id)) {
                            this.title = item['title'];
                            this.create_time = item['create_time'];
                            this.view_count = item['click_count'];
                            this.content = item['desc'];
                            break;
                        }
                    }
                })
            }
        }
    }
</script>

<style scoped>

    .title h4 {
        color: #0094ff;
        line-height: 24px;
    }

    .title p {
        color: rgba(0, 0, 0, 0.5);
    }

    .title, #content {
        padding: 5px;
    }

    .line {
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.1);
        margin-bottom: 5px;
    }
</style>