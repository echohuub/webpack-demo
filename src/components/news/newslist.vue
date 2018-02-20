<template>
    <div id="tmpl">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in list">
                <router-link to="/#">
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
                this.list = [
                    {
                        title: "为什么小商贩小商店都爱用微信支付，却偏偏不喜欢支付宝？",
                        desc: "从用户体验的角度来说，微信支付体验更好，尽管支付宝的装机量超级大，但是和微信比较起来在使用场景上却差很多，",
                        create_time: new Date(),
                        click_count: 10,
                        img_url: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2761234783,2576814745&fm=173&s=32829D47E8F66A968920D17B03004011&w=218&h=146&img.JPG",
                    },
                    {
                        title: "沸腾！支付宝被海内外一片怒赞，网友：全世界都在认识支付宝！",
                        desc: "众所周知，这些年“汉语热”在全球兴起，关于汉语的消息在海外迅速走红，这让我们有理由相信“全世界都在讲中国话”不仅仅是一句歌词。",
                        create_time: new Date(),
                        click_count: 10,
                        img_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=720811332,1467008143&fm=173&s=67301BC65C33649E53B104C80300D010&w=218&h=146&img.JPEG"
                    },
                    {
                        title: "3男子吃饭无钱付账，取钱时一去不返，5天后老板收到一封信",
                        desc: "阿波里耐是英国伦敦一家餐厅的老板，2月11日这天餐厅里来了三名男子就餐，吃过饭后他们发现谁都没有带现金，而这家餐厅又不支持刷信用卡，于是三人和阿波里耐商量去附近ATM机取钱，可是此后三人再也没有露面",
                        create_time: new Date(),
                        click_count: 10,
                        img_url: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3548078708,3983534997&fm=173&s=2C784C864AF116848935753E03001018&w=218&h=146&img.JPEG"
                    },
                    {
                        title: "2018福布斯富豪榜，马化腾排名国内第一",
                        desc: "众所周知，每个人的财富都是会随着一些事情的变化，随时变更的，无论是富豪，还是普通人。富豪有自己变动的方式，平常人也有自己的方式。福布斯也有自己的实时富豪排行榜单。",
                        create_time: new Date(),
                        click_count: 10,
                        img_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3499769259,2608098564&fm=173&s=2C84A45DAE464255488875BD03003040&w=218&h=146&img.JPEG"
                    },
                    {
                        title: "护照上盖满戳是怎样的体验？",
                        desc: "驻外狗。2015年，2016年连续两年的星空联盟Top1000飞客，联盟内每年大概飞140段，40多万公里吧。有时候一周内辗转多个国家，国家免签证或者发长期签证，2014年，2015年6月份，2016年7月换发新护照，理由都是签证页用完了。",
                        create_time: new Date(),
                        click_count: 10,
                        img_url: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1093813852,3320126068&fm=173&s=80B85A95101323D00A35F7B50300A005&w=218&h=146&img.JPG"
                    },
                    {
                        title: "QQ新规开始正式生效，网友直呼“马化腾，你还会缺钱？”",
                        desc: "智能手机应用越来越广泛，给人们带来了很大便捷，成为了生活的一部分“代步工具”—可以使用淘宝进行网上购物，省去了去实体店选择的时间与路程；银行卡转账，提现只要用手机支付工具就能实现，省去了不必要的工序。近几年手机支付APP的种类也是越来越多，例如最火的APP要属马云的支付宝，马化腾的微信了，不论是转账，还是发红包都很方便快捷，用户也达到了几个亿左右，尤其是马云的淘宝只支持支付宝付款，用户的积累量自然是更多的。",
                        create_time: new Date(),
                        click_count: 10,
                        img_url: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2957224009,921681685&fm=173&s=6BA638622CFA87B52A3C75AC02003022&w=218&h=146&img.JPEG"
                    },
                    {
                        title: "快播王欣出狱后，遭投资人疯抢。网友表示:欠他一个会员",
                        desc: "作为80后、90后，在快播王欣入狱后，无数人可能都会听过乃至表露过一个说法：我们欠王欣一个会员！快播的存在，不收年费，不收会费，而且功能如此强大，给万千网友带来了很大的便利。",
                        create_time: new Date(),
                        click_count: 10,
                        img_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4012884864,2977259809&fm=173&s=EA406184A4A9CCB2CCA5BDD80300D0B2&w=218&h=146&img.JPEG"
                    },
                    {
                        title: "《祖宗十九代》遭强制下架！网友讨伐电影院：凭什么！",
                        desc: "在今年春节上映的电影，基本都是国产片，其中还包括不少当红艺人，像白百何赵丽颖王宝强岳云鹏等明星参与主演。多部电影同时上映，肯定是有人欢喜有人忧，像白百何的《捉妖记2》简直是来势汹汹~",
                        create_time: new Date(),
                        click_count: 10,
                        img_url: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3196621407,2383597571&fm=173&s=A8184597144076EA0601A5ED0300B033&w=218&h=146&img.JPEG"
                    }
                ]
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