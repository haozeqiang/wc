<template>
    <div class="index">
        <Header></Header>
        <Banner></Banner>
        <div class="pro-section">
            <div class="top-tit">
                <h2>新品精选</h2>
            </div>
            <div class="bottom-tit">
                <div class="tit-info">
                    <div class="info-item" v-for="item in xp" :key="item.nid">
                        <router-link to="#">
                            <span class="image">
                                <span class="image_ab">
                                    <img :src="item.pic" alt="" />
                                </span>
                                <span class="brand">{{item.title}}</span>
                                <span class="name">{{item.subtitle}}</span>
                                <span class="price">
                                    <span>{{item.nprice}}</span>
                                    <span class="old-price">{{item.oprice}}</span>
                                </span>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="pro-section">
            <div class="top-tit">
                <h2>热门品类</h2>
            </div>
            <div class="categorys">
                <router-link to="#" :checked="index == 0" v-for="(item,index)  in rmpl" :key="item.nid"  :class="{'current':index==hoverIndex}" @mouseover.native="hoverIndex = index"
                >{{item}}</router-link>
            </div>
            <div class="bottom-tit">
                <div class="tit-info">
                    <div class="info-item" v-for="(item,index) in list1.arry[hoverIndex]" :key="index">
                        <router-link to="#">
                            <span class="image">
                                <span class="image_ab">
                                    <img :src="item.pic" alt="" />
                                </span>
                                <span class="brand">{{item.title}}</span>
                                <span class="name">{{item.subtitle}}</span>
                                <span class="price">
                                    <span>{{item.nprice}}</span>
                                    <span class="old-price">{{item.oprice}}</span>
                                </span>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="small-ban">
            <div class="ban-b">
                <router-link to="#"><img src="" alt="" /></router-link>
            </div>
        </div>
        <div class="rmtj">
            <div class="rmtj-section">
                <div class="top-tit">
                    <h2>热门推荐</h2>
                </div>
                <div class="center-tit">
                    <div class="row-tit">
                        <div class="tit-item" v-for="item in list2" :key="item.nid">
                            <router-link to="#">
                                <div class="tit-image">
                                    <img :src="item.pic" alt="" />    
                                    <p class="tit-brand">{{item.title}}</p>
                                    <div class="tit-name">{{item.subtitle}}</div>
                                    <p class="tit-price">
                                        <span class="tit-oldprice">发布时间：2018-11-05 18:29:11</span>
                                    </p>
                                </div>
                            </router-link>
                        </div>
                    </div>
<!-- v-for="item in list3" :key="item.nid"-->
                    <div class="row-titbot">
                        <router-link to="#" v-for="item in list3" :key="item.nid">
                            <span class="sm-image">
                                <span class="sm-image_ab">
                                    <img :src="item.pic" alt="" />
                                </span>
                                <span class="sm-image_ab sm-dz">
                                    <img :src="item.dpic" alt="" />
                                </span>
                                <span class="sm-brand">{{item.title}}</span>
                                <span class="sm-name">{{item.subtitle}}</span>
                                <span class="sm-price">
                                    <span>{{item.nprice}}</span>
                                    <span class="sm-old-price">{{item.oprice}}</span>
                                </span>
                            </span>
                        </router-link>   
                    </div>
                </div>
            </div>
        </div>
        <div class="pro-section">
            <div class="top-tit">
                <h2>热销品牌</h2>
                <router-link to="#" class="rx-more">MORE</router-link>
            </div>
            <div class="bottom-tit">
                <div class="tit-info">
                    <div class="info-item" v-for="item in list4" :key="item.nid">
                        <router-link to="#">
                            <span class="image desc-span">
                                <span class="image_ab desc-span">
                                    <img :src="item.pic" alt="" />
                                </span>
                                <span class="brand desc-span">{{item.title}}</span>
                                <span class="name desc desc-span">{{item.subtitle}}</span>
                                <span class="price desc-span">
                                    <span class="more">MORE</span>
                                </span>
                                <span class="name"></span>
                            </span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div class="pro-section">
            <div class="top-tit">
                <h2>爱豆原款</h2>
            </div>
            <div class="bottom-tit">
                <router-link to="#" class="ad-item" v-for="item in ad" :key="item.aid">
                    <img :src="item.apic"/>
                    <span class="product">
                        <span class="desc">{{item.adesc}}</span>
                        <img :src="item.appic" class="product_img" />
                        <span class="product_info">
                            <span class="brand_name">{{item.atitle}}</span>
                            <span class="product_name">{{item.asubtitle}}</span>
                            <span class="price">￥{{item.anprice}}</span>
                        </span>
                    </span>
                </router-link>
            </div>
        </div>

        <!-- 热销商品 -->
        <div class="hotgoods">
            <div class="hot-top">
                <h2>热销商品</h2>
            </div>
            <div class="hot-info">
                <router-link v-for="item in list5" :key="item.nid" :to="'/details?nid='+item.nid" class="hotinfo-item">
                    <span class="image">
                        <span class="image_ab">
                            <img :src="item.pic" alt=""/>
                        </span>
                        <span class="dz-info">
                            <img :src="item.dpic" alt="" />
                        </span>
                    </span>
                    <span class="brand">{{item.title}}</span>
                    <span class="name">{{item.subtitle}}</span>
                    <span class="price">
                        <span>￥{{item.nprice}}</span>
                        <span class="oldprice">￥{{item.oprice}}</span>
                    </span>
                </router-link>
            </div>
            <router-link to="#" class="see_more">查看更多</router-link>
        </div>






        <Footer></Footer>
    </div>
</template>

<script>
//引入网页底部内容
import Footer from '../components/footer.vue'
//引入网页底部内容
import Header from '../components/header.vue'
//引入轮播图

import Banner from '../components/banner.vue'
// import func from './vue-temp/vue-editor-bridge';


export default {
    data(){
        return {banner:[],list1:{arry:[]},rmpl:['大衣','夹克','裙装','针织','卫衣','裤装','靴子','单肩包','帽子','时装鞋','耳环/耳钉','休闲鞋'],
        hoverIndex: 0,
        list2:{arry2:[]},
        list3:{arry3:[]},
        list4:{arry4:[]},
        ad:[],
        list5:{arry5:[]},
        xp:'',
        sid:this.$route.query.sid,
        }
    },
    components:{
        Header,Footer,Banner
    },

    methods:{
        getshop(){

        },
        init(){
            this.axios.get('http://localhost:3000/products/indexpro').then(res=>{
            //console.log(res.data);
            let dataList = res.data.slice(0,48);
            this.list3 = res.data.slice(50,56);
            this.list2=res.data.slice(48,50);
            this.list4 = res.data.slice(56,60);
            this.list5 = res.data.slice(68,);
            this.xp=res.data.slice(0,4);
            let arry = [];
            let arry3 = [];
            function del(){
                for(let n=12; n <dataList.length-1;n--){
                    arry.push(dataList.splice(0,4))
                }
            }
            del();
            this.list1 = {arry};
            /*banner下面小图数据*/ 


        });
        },
        /*获取爱豆原款的数据*/
        getadinfo(){
            this.axios.get('http://localhost:3000/products/adinfo').then(res=>{
                this.ad=res.data;
            })
        }
    },
    mounted() {
        this.init();
        this.getadinfo();
    },
    created() {
        //console.log(this.$route)
    },
}
</script>
<style scoped>
.pro-section{
    background-image: url(../assets/index/account_init.png);
    background-repeat: no-repeat;
    background-position: center center;
    *min-height: 550px;
    width: 1100px;
    margin: 0 auto;
}
.top-tit{
    text-align: center;
    position: relative;
}
.top-tit h2 {
    height: 28px;
    line-height: 28px;
    font-size: 20px;
    color: #2d2d2d;
    text-align: center;
    display: inline-block;
    position: relative;
    margin: 65px 0 35px;
}
.top-tit h2:after,.top-tit h2:before{
    content: '';
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 144px;
    height: 1px;
    background: #2d2d2d;
    line-height: 0;
    font-size: 0;
}
.top-tit h2:before {
    left: -180px;
}
.top-tit h2:after {
    right: -180px;
}
.tit-info{
    background: #fff;
}
.tit-info .tit-info .image{
    padding-top:0;
}
.tit-info{
    position: relative;
    overflow: hidden;
}
/* 商品组件开始循环*/ 
.info-item{
    position: relative;
    min-height: 1px;
    float: left;
    width: 259.5px;
    margin-right: 20px;
}
.info-item a{
    width: 100%;
    max-width: 260px;
    margin: 0;
}
.info-item span{
    display: block;
    width: 100%;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    text-align: center;
}
.image{
    width: 100%;
    padding-top: 133.3333333%;
    position: relative;
}
.info-item .image .image .image_ab{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
    z-index: 0;
}
.info-item .image .image_ab img{
    width: 100%;
    margin: auto;
}
.info-item .brand{
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
.info-item .name{
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
.info-item .price{
    font-size: 14px;
    height: 22px;
    line-height: 18px;
    margin-top: 8px;
    text-align: left;
    color: #626161;
    font-weight: bold;
}
.info-item .price span{
    display: inline;
}
.info-item .price .old-price{
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
    margin-left: 9px;
    text-decoration: line-through;
}
.info-item:nth-child(4n+4){
    margin-right:0;
}
/**单个商品的详细信息结束*/
.categorys{
    text-align: center;
    margin-bottom: 25px;
}
.categorys>a{
    display: inline-block;
    margin: 3px 15px;
    font-size: 12px;
    color: #626161;
    height: 25px;
    box-sizing: border-box;
}
.current{
    color: #2d2d2d;
    font-family: PingFangSC-Medium;
    border-bottom: 3px solid #2d2d2d;
}
.categorys>a:hover .info-item{
    display: none;
}
/*/**/
.small-ban,.rmtj{
    background-image: url(../assets/index/account_init.png);
    background-repeat: no-repeat;
    background-position: center center;    
}
.small-ban .ban-b{
    margin-top: 65px;
}
.small-ban .ban-b a{
    display: block;
    width: 100%;
    height: 187px;
    background: url(../assets/index/sm-ban.jpg) center top no-repeat;
}
.rmtj{
    min-height: 949px;
}
.rmtj-section{
    margin-bottom: 30px;
    width: 1100px;
    margin: 0 auto;
    background-color:#fff;
}
.center-tit row-tit{
    margin-bottom: 32px;
}
.center-tit .row-tit .tit-item{
    width: 535px;
    height: auto !important;
    margin-right: 0;
    float:left;
}  
.center-tit .row-tit .tit-item:last-child{
    float:right;
}
.center-tit .row-tit .tit-item img{
    width:100%;
}

.row-tit:after{
    content:'';
    display:block;
    clear:both;
}
.tit-brand{
    height: 22px;
    font-size: 16px;
    font-weight: 500;
    color: #626161;
    margin-top: 20px;
    width: 100%;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
}
.tit-name{
    font-size: 14px;
    color: #9e9e9e;
    line-height: 20px;
    height: 40px;
    margin-top: 8px;
    width: 100%;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.tit-price{
    font-size: 12px;
    color: #9e9e9e;
    margin-top: 18px;
}
.row-titbot a{
    float:left;
    width: 169px;
    margin-bottom: 10px;
    margin-right: 14px;
}
.row-titbot span{
    display: block;
    width: 100%;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    text-align: center;
}
.sm-image{
    width: 100%;
    padding-top: 133.3333333%;
    position: relative;
}
.sm-image_ab {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
    z-index: 0;
}
.sm-image_ab img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
}
.sm-brand {
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
.sm-name {
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
.sm-price {
    font-size: 14px;
    height: 22px;
    line-height: 18px;
    margin-top: 8px;
    text-align: left;
    color: #626161;
    font-weight: bold;
}
.sm-price span {
    display: inline;
}
.sm-price .sm-old-price {
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
    margin-left: 9px;
    text-decoration: line-through;
}
.row-titbot:after{
    content:'';
    display:block;
    clear:both;
}
.row-titbot a:last-child{
    margin-right:0;
}
.row-titbot a:nth-child(3){
    margin-right:30px;
}
.row-titbot{
    margin-top:30px;
}
.sm-dz img{
    position: absolute;
    bottom: 80px;
    left: 0;
}
.desc-span{
    padding: 12px 17px 0 20px;
}
.desc{
    display: block;
    width: 100%;
    height: 72px;
    font-size: 12px;
    line-height: 20px;
    color: #9e9e9e;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.desc-span>span{
    display: inline-block;
    position: relative;
    font-size: 12px;
    line-height: 17px;
    color: #626161;
    font-weight:normal;
}
.desc-span .more:after{
    content: ' ';
    position: absolute;
    top: 6px;
    left: 40px;
    border: 3px solid transparent;
    border-left: 4px solid #626161;
}
.rx-more{
    display: block;
    width: 50px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    right: 0px;
    top: 59px;
    color: #2d2d2d;
    font-size: 12px;
    border: 1px solid #2d2d2d;
    position: absolute;
}
.ad-item:first-child{
    margin-left:0;
}
.ad-item{
    float: left;
    width: 260px;
    margin-left: 20px;
}
.ad-item>img{
    float: left;
    max-width: 100%;
}
.ad-item>.product {
    float: left;
    width: 100%;
    padding: 20px 15px;
    border: 1px solid #f3f3f3;
    box-sizing:border-box;
}
.ad-item>.product>a:first-child{
    margin-left:0;
}
.ad-item>.product .desc{
    float: left;
    width: 100%;
    height: 72px;
    margin-bottom: 25px;
    font-size: 12px;
    text-align: justify;
    color: #7a7a7a;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
.ad-item>.product .product_img{
    float: left;
    width: 67px;
    height: 89px;
}
.ad-item>.product .product_info {
    float: right;
    width: 150px;
    line-height: 18px;
}
.ad-item>.product .product_info .brand_name {
    float: left;
    width: 100%;
    font-size: 12px;
    color: #626161;
    font-family: montserratregular;
    line-height: 14px;
    margin-bottom: 8px;
}
.ad-item>.product .product_info .product_name {
    float: left;
    width: 100%;
    height: 35px;
    font-size: 12px;
    color: #9e9e9e;
    margin-bottom: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.ad-item>.product .product_info .price {
    float: left;
    font-size: 14px;
    line-height: 22px;
    font-weight: 600;
    color: #626161;
    padding-right: 15px;
}
.bottom-tit{
    background:#fff;
}
.bottom-tit:after{
    content:'';
    display:block;
    clear:both;
}
.hotgoods{
    width: 1100px;
    margin: 0 auto;
}
.hot-top{
    text-align: center;
    position: relative;
}
.hot-top h2{
    height: 28px;
    line-height: 28px;
    font-size: 20px;
    color: #2d2d2d;
    text-align: center;
    display: inline-block;
    position: relative;
    margin: 65px 0 35px;
}
.hot-top h2:before, .hot-top h2:after {
    content: '';
    position: absolute;
    top: 50%;
    display: inline-block;
    width: 144px;
    height: 1px;
    background: #2d2d2d;
    line-height: 0;
    font-size: 0;
}
.hot-top h2:before {
    left: -180px;
}
.hot-top h2:after {
    right: -180px;
}
.hot-info>a{
    display: block;
    text-align: center;
    font-size: 12px;
    padding: 0;
    float: left;
    position: relative;
    width: 204px;
    margin-left: 20px;
    margin-bottom: 26px;
}
.hotinfo-item:nth-child(5n+1){
    margin-left: 0;
    *clear: left;
}

.hot-info span{
    display: block;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    text-align: center;
}
.hot-info .image{
    width: 100%;
    padding-top: 133.3333333%;
    position: relative;
}
.image_ab {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
    z-index: 0;
}
.image_ab img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
}
.brand {
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
.name {
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
.price{
    font-size: 14px;
    height: 22px;
    line-height: 18px;
    margin-top: 8px;
    text-align: left;
    color: #626161;
    font-weight: bold;
}
.price span {
    display: inline;
}
.oldprice{
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
    margin-left: 9px;
    text-decoration: line-through;
}
.hot-info:after {
    content: '';
    display: block;
    clear: both;
}
.see_more {
    display: block;
    height: 35px;
    width: 120px;
    margin: 0 auto 40px;
    background-color: #000;
    color: #fff;
    font-size: 14px;
    line-height: 35px;
    text-align: center;
}
.dz-info img{
    width: 100%;
    position: absolute;
    left: 0;
    bottom:0;
}








</style>








