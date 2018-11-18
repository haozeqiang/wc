<template>
    <div class="select">
        <Header></Header>
        <div class="page">
            <div class="breadcrumbs m0a w1100">
                <ul>
                    <li>
                        <router-link to="">女士频道</router-link>
                        <span> &gt; </span>
                    </li>
                    <li>"<span v-model="select">{{select}}</span>"共{{q.length}}个结果</li>
                </ul>
            </div>
            <div class="w1100 m0a allProducts clearfloat mb20">
                <div class="left">
                    <dl>
                        <dt>全部产品</dt>
                        <dd class="psr tree" v-for="(item,i) in allProducts" :key="i">
                            <div class="tree_bg psa"></div>
                            <a class="item" @click="getfl(i)">{{item.name}}</a>
                            <div class="treeChild">
                            <div class="secCategory" v-show="fl==i">
                                <a class="item" v-for="ss in item.item" :key="ss.nid">{{ss}}</a>
                            </div>
                        </div>
                        </dd>
                        
                    </dl>
                    <div class="otherArea">
                        <a><img src="@/assets/select/fx.jpg" /></a>
                        <a><img src="@/assets/select/yq.jpg" /></a>
                    </div>
                </div>
                <div class="right">
                    <div class="sortWays" v-show="l">
                        <div class="left">
                            <a class="item on">最新</a>
                            <a class="item">销量</a>
                            <a class="item">
                                价格
                                <i class="icon-homemay-sort-price">
                                    <i class="icon-homemay-sort-price-up"></i>
                                    <i class="icon-homemay-sort-price-down"></i>
                                </i>
                            </a>
                        </div>
                    </div>
                    <div class="list3_to_4" v-show="l">
                        <router-link class="product_card " v-for="(item,i) in q" :key="i" :to="'/details?nid='+item.nid">
                            <span class="image">
                                <span class="image_ab">
                                    <img :src="item.pic">
                                </span>
                            </span>
                            <span class="brand">{{item.title}}</span>
                            <span class="name">{{item.subtitle}}</span>
                            <span class="price">￥{{item.nprice}}</span>
                        </router-link>
                        <a class="product_card">
                            <img src="@/assets/select/next-page.png" />
                        </a>
                    </div>
                    <div class="pages" v-show="l">
                        <a class="no_page current">11</a>
                        <a class="page">22</a>
                        <a class="page">下一页<span>&gt;</span></a>
                    </div>
                    <div class="empty-search" v-show="!l">
                        <div class="search-no-results-txt1">抱歉！没有找到与"{{select}}"相关的商品</div>
                        <form action="">
                            <div class="search_input_box">
                                <input class="search_input" type="text"/>
                                <input type="submit" class="btn-submit" value="" />
                            </div>
                            <p class="notice">建议您：看看输入的文字是否有误 / 减少分类条件限制 / 重新搜索</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
//引入网页底部内容
import Footer from '../components/footer.vue'
//引入网页底部内容
import Header from '../components/header.vue'

    export default{
        data(){
            return {
                fl:-1,
                q:'',
                allProducts:[
                    {name:'上衣',item:['全部上衣','T恤','衬衫','背心/吊带','毛衣/针织衫','帽衫/卫衣','牛仔服','牛仔衬衫','风衣','夹克','皮衣','大衣','羽绒服/棉服','运动服','其他']},
                    {name:'裤装',item:['全部裤装','休闲裤','短裤','西裤','连体裤','牛仔裤','运动裤']},
                    {name:'裙装',item:['全部裙装','连衣裙','半身裙','牛仔裙']},
                    {name:'泳装/家居服',item:['全部泳装/家居服','比基尼','连体泳衣','防晒服','起居服','睡裙','内衣','起居配件',]},
                    {name:'鞋类',item:['全部鞋类','时装鞋','靴子','高跟鞋','凉鞋/凉拖','休闲/运动鞋']},
                    {name:'包类',item:['全部包类','手拎包','单肩包','双肩包','包配饰','环保袋','钱包/卡包/钥匙包']},
                    {name:'首饰/配件类',item:['全部首饰/配件类','围巾/丝巾','眼镜/太阳镜','手链','帽子','耳环/耳钉','手表','袜子/丝袜','戒指','饰品套装','腰带','项链','其他']},
                    {name:'化妆品',item:['全部化妆品','面部护肤','彩妆','面膜','洗护','美容工具','美甲']},
                    {name:'创意生活',item:['全部创意生活','香蕉','创意设计','家纺','数码产品']},
                    ],
                    select:'',
                    l:'',
            }
        },
        components:{
            Header,Footer
        },
        created() {
            this.getSearch()
        },
        methods:{
            getSearch(){
                let search=sessionStorage.search;
                console.log(sessionStorage.search)
                if(search!==undefined){
                    this.axios.get('http://localhost:3000/products/search?search='+search).then(res=>{
                        this.q=res.data;
                        console.log(this.q)
                        if(res.data.length>0){
                            this.l=true;
                        }else{
                            this.l=false
                        }
                    })
                }else{return}
                
            },
            getfl(i){
                if(i==this.fl){
                    this.fl=-1
                }else{
                    this.fl=i
                }
            }
        },
        mounted(){
            this.select=sessionStorage.search;
            console.log(this.select);
        }
    }
</script>
<style scoped>
.breadcrumbs{
    height: 36px;
    line-height: 36px;
}
.mb20 {
    margin-bottom: 20px;
}
.clearfloat:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.psr {
    position: relative;
}
.m0a{
    margin:0 auto;
}
.w1100{
    width:1100px;
}
.breadcrumbs ul {
    display: inline-block;
    width: 100%;
}
.breadcrumbs li {
    float: left;
    font-size: 12px;
    color: #9e9e9e;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 560px;
}
.breadcrumbs li a {
    font-size: 12px;
    color: #9e9e9e;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: 150px;
}
.breadcrumbs li span {
    padding: 0 12px;
}
.allProducts > .left {
    width: 140px;
    border-top: 1px solid #d9d9d9;
}

.left {
    float: left;
}
.allProducts .left dl {
    border-bottom: 1px solid #d9d9d9;
}
.allProducts .left dl dt, .allProducts .left dl a.on {
    color: #626161;
}
.allProducts .left dl dt, .allProducts .left dl a {
    display: block;
    height: 36px;
    line-height: 36px;
}
.allProducts .left dl dt {
    font-weight: bold;
}
.allProducts .left dl div.tree_bg {
    display: block;
    width: 20px;
    height: 36px;
    left: 0;
    top: 0;
    z-index: 99;
    background: url(../assets/select/icon_tree_menu.png) no-repeat left center;
    background-size: 4px 6.8px;
    cursor: pointer;
}
.psa {
    position: absolute;
}

.allProducts .left dl a {
    padding-left: 20px;
    color: #9e9e9e;
    cursor: pointer;
}

.allProducts .left dl dt, .allProducts .left dl a {
    display: block;
    height: 36px;
    line-height: 36px;
}
.allProducts .left .treeChild {
    *display: none;
}
.allProducts .left .otherArea a, .allProducts .left .otherArea a img {
    display: block;
    width: 140px;
    margin-top: 12px;
}
.allProducts > .right {
    width: 940px;
}

.right {
    float: right;
}
.allProducts .sortWays {
    line-height: 38px;
    color: #9e9e9e;
    border-top: 1px solid #d9d9d9;
}
.allProducts .sortWays .left a {
    padding: 0 13px;
    border-left: 1px solid #d9d9d9;
}
.allProducts .sortWays .left a, .allProducts .sortWays .right a {
    color: #9e9e9e;
    cursor: pointer;
}
.allProducts .sortWays .left a:first-child {
    padding-left: 0;
    border-left: none;
}
.allProducts .sortWays .left a.on {
    color: #626161;
}
.icon-homemay-sort-price {
    display: inline-block;
    width: 5px;
    height: 10px;
    position: relative;
}
.icon-homemay-sort-price-up {
    background: url(../assets/select/icon-pc-sort-price-up.png) no-repeat;
    background-size: 5px 3px;
    top: 0;
}
.icon-homemay-sort-price-up, .icon-homemay-sort-price-down, .icon-homemay-sort-price-up-on, .icon-homemay-sort-price-down-on {
    display: inline-block;
    width: 5px;
    height: 3px;
    position: absolute;
    left: 0;
    cursor: pointer;
}
.icon-homemay-sort-price-down {
    background: url(../assets/select/icon-pc-sort-price-down.png) no-repeat;
    background-size: 5px 3px;
    bottom: 0;
}
.allProducts .sortWays:after {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
}
.list3_to_4:after {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
}
.list3_to_4 .product_card {
    width: 220px;
    margin-left: 20px;
    margin-bottom: 26px;
}
.list3_to_4 .product_card:nth-child(4n+1){
    margin-left: 0;
    clear: left;
}
/**product_card小商品循环 */
.product_card {
    display: block;
    width: 100%;
    text-align: center;
    color: #626161;
    font-size: 12px;
    margin-left: 20px;
    padding: 0;
    float: left;
    position: relative;
}
.product_card .image {
    width: 100%;
    padding-top: 133.3333333%;
    position: relative;
}

.product_card span {
    display: block;
    width: 100%;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    text-align: center;
}
.product_card .brand {
    display: inline-block;
    color: #626161;
    font-size: 12px;
    font-family: montserratregular;
    width: 100%;
    line-height: 14px;
    height: 14px;
    margin-top: 16px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
}
.product_card .name {
    display: inline-block;
    font-size: 12px;
    width: 100%;
    line-height: 20px;
    height: 20px;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    text-align: left;
    color: #9e9e9e;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.product_card span.price {
    text-align: left;
}
.product_card .image .image_ab {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
    z-index: 0;
}
.product_card .image .image_ab img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
}

/**结束 */
.pages {
    text-align: center;
    height: 20px;
    line-height: 20px;
    padding: 20px 0;
    border-top: 1px solid #d9d9d9;
}
.pages a.page {
    height: 20px;
    padding: 0 8px;
}

.pages a {
    margin: 0 10px;
    color: #626161;
    display: inline-block;
    cursor: pointer;
}
.pages a.current {
    background-color: #626161;
    color: #fff;
    padding: 0 8px;
}

.pages .no_page {
    cursor: default;
}
.empty-search {
    border-top: 1px solid #d9d9d9;
    text-align: center;
}
.empty-search .search-no-results-txt1 {
    margin-top: 70px;
    font-size: 16px;
    font-weight: 500;
    color: #626161;
}
.empty-search .search_input_box {
    margin: 30px auto 15px;
    width: 440px;
}
.empty-search .search_input_box .search_input {
    float: left;
    width: 380px;
    height: 45px;
    border: solid 1px #626161;
    box-sizing: border-box;
}
.empty-search .search_input_box .btn-submit {
    float: left;
    background: url(../assets/select/icon_search.png) no-repeat center center;
    width: 55px;
    height: 45px;
    background-color: #626161;
    border: solid 1px #626161;
}
.empty-search .search_input_box:after {
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
}
.empty-search .notice {
    font-size: 12px;
    color: #9e9e9e;
}
</style>