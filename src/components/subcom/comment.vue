<template>
    <!-- 评论组件 -->
    <div>
        <div id="postcomment">
            <h3>提交评论</h3>
            <p></p>
            <textarea placeholder="请输入要评论的内容..." v-model="comment"></textarea>
            <mt-button type="primary" size="large" @click="postcomment">提交</mt-button>
        </div>

        <div id="list">
            <h3>评论列表</h3>
            <p class="p"></p>
            <div v-for="(item,index) in list">
                <div class="title">
                    <span>用户：匿名用户</span>
                    <span>发表时间：{{new Date() | datefmt("YYYY-MM-DD HH:ss")}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell">{{item}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import common from "../../utils/common.js";
    import {Toast} from 'mint-ui';

    export default {
        props: ['id'],
        data: function () {
            return {
                comment: "",
                list: []
            }
        },
        created: function () {
            this.getCommentList();
        },
        methods: {
            getCommentList: function () {
                this.list = ['你好', "我好"];
            },
            postcomment: function () {
                // var url = common.apiDomain + "/xxx";
                // this.$http.post(url, {content: this.comment}, {emulateJSON: true})
                //     .then(response=>{
                //         console.log("xxx1");
                //         Toast("评论成功");
                //     })
                //     .then(response=>{
                //         console.log("xxx2");
                //         Toast("评论成功");
                //     });
                Toast("评论成功");
                this.list.splice(0, 0, this.comment);
                this.comment = '';
            }
        }
    }
</script>

<style scoped>

    #postcomment {
        padding: 5px;
    }

    #postcomment p {
        width: 100%;
        height: 1px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    #list {
        padding: 5px;
    }

    #list p {
        width: 100%;
        height: 1px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    #list span {
        color: rgba(0, 0, 0, 0.7);
        font-size: 14px;
    }

</style>