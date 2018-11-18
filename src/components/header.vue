<template>
    <div class="header-top">
        <topHeader v-show="istopHeader"></topHeader>
        <div class="header">
            <div class="leftArea">
                <router-link to="#"><img src="@/assets/header/homelogo.png"></router-link>
            </div>
            <div class="rightArea">
                <form action="">
                    <div class="search">
                        <input type="text" placeholder="请输入搜索内容" v-model="search" @keyup.enter="getSearch" />
                        <a href="#"><img src='@/assets/header/icon_search.png' alt="" @click.stop.prevent="getSearch"></a>
                    </div>
                </form>
                <div class="associatives"></div>
                <ul></ul>
            </div>
        </div>
        <div class="menu">
            <div class="nav">
                <ul>
                    <li>
                        <router-link to="#">商店</router-link>
                        <!--<div class="menu-item"></div>-->
                    </li>
                    <li>
                        <router-link to="#">双十一预热</router-link>
                        <!--<div class="menu-item"></div>-->
                    </li>
                    <li>
                        <router-link to="#">新品</router-link>
                        <div class="menu-item">
                            <div class="item-products">
                                <div class="res-ml">
                                    <router-link to="#" v-for="item in info1" :key="item.nid">
                                        <span class="image">
                                            <span>
                                                <img :src="item.pic" alt="">
                                            </span>
                                        </span>
                                        <span class="brand">{{item.title}}</span>
                                        <span class="name">{{item.subtitle}}</span>
                                        <span class="price">
                                            <span class="new-price">¥&nbsp;{{item.nprice}}</span><span class="old-price">¥&nbsp;{{item.oprice}}</span>
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <router-link to="#">热销</router-link>
                        <div class="menu-item">
                            <div class="item-products">
                                <div class="res-ml">
                                    <router-link to="#" v-for="item in info2" :key="item.nid">
                                        <span class="image">
                                            <span>
                                                <img :src="item.pic" alt="">
                                            </span>
                                        </span>
                                        <span class="brand">{{item.title}}</span>
                                        <span class="name">{{item.subtitle}}</span>
                                        <span class="price">
                                            <span class="new-price">¥&nbsp;{{item.nprice}}</span><span class="old-price">¥&nbsp;{{item.oprice}}</span>
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <router-link to="#">服饰</router-link>
                        <div class="menu-item">
                            <div class="item-products">
                                <div class="cart-z">
                                    <div class="left-col">
                                        <router-link to="#">帽衫／卫衣</router-link>
                                        <router-link to="#">衬衫</router-link>
                                        <router-link to="#">毛衣/针织衫</router-link>
                                        <router-link to="#">T恤</router-link>
                                        <router-link to="#">大衣/风衣</router-link>
                                        <router-link to="#">夹克</router-link>
                                        <router-link to="#">皮衣</router-link>
                                    </div>
                                </div>
                                <div class="cart-z">
                                    <div class="left-col">
                                        <router-link to="#">连衣裙</router-link>
                                        <router-link to="#">半身裙</router-link>
                                        <router-link to="#">休闲裤</router-link>
                                        <router-link to="#">运动裤</router-link>
                                        <router-link to="#">西裤</router-link>
                                        <router-link to="#">羽绒服/棉服</router-link>
                                    </div>
                                </div>
                                <div class="res-ml">
                                    <router-link to="#" v-for="item in info3" :key="item.nid">
                                        <span class="image">
                                            <span>
                                                <img :src="item.pic" alt="">
                                            </span>
                                        </span>
                                        <span class="brand">{{item.title}}</span>
                                        <span class="name">{{item.subtitle}}</span>
                                        <span class="price">
                                            <span class="new-price">¥&nbsp;{{item.nprice}}</span><span class="old-price">¥&nbsp;{{item.oprice}}</span>
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <router-link to="#">鞋履</router-link>
                        <div class="menu-item">
                            <div class="item-products">
                                <div class="cart-z">
                                    <div class="left-col">
                                        <router-link to="#">休闲鞋/运动鞋</router-link>
                                        <router-link to="#">时装鞋</router-link>
                                        <router-link to="#">高跟鞋</router-link>
                                        <router-link to="#">靴子</router-link>
                                        <router-link to="#">凉鞋/凉拖</router-link>
                                    </div>
                                </div>
                                <div class="res-ml">
                                    <router-link to="#" v-for="item in info4" :key="item.nid">
                                        <span class="image">
                                            <span>
                                                <img :src="item.pic" alt="">
                                            </span>
                                        </span>
                                        <span class="brand">{{item.title}}</span>
                                        <span class="name">{{item.subtitle}}</span>
                                        <span class="price">
                                            <span class="new-price">¥&nbsp;{{item.nprice}}</span><span class="old-price">¥&nbsp;{{item.oprice}}</span>
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <router-link to="#">包配</router-link>
                        <div class="menu-item">
                            <div class="item-products">
                                <div class="cart-z">
                                    <div class="left-col">
                                        <router-link to="#">单肩包</router-link>
                                        <router-link to="#">双肩包</router-link>
                                        <router-link to="#">手拎包</router-link>
                                        <router-link to="#">手包</router-link>
                                        <router-link to="#">钱包/卡包/钥匙包</router-link>
                                        <router-link to="#">耳环/耳钉</router-link>
                                        <router-link to="#">项链</router-link>
                                    </div>
                                </div>
                                <div class="cart-z">
                                    <div class="left-col">
                                        <router-link to="#">戒指</router-link>
                                        <router-link to="#">手链</router-link>
                                        <router-link to="#">手表</router-link>
                                        <router-link to="#">帽子</router-link>
                                        <router-link to="#">披肩/丝巾</router-link>
                                        <router-link to="#">袜子/丝袜</router-link>
                                        <router-link to="#">更多</router-link>
                                    </div>
                                </div>
                                <div class="res-ml">
                                    <router-link to="#" v-for="item in info5" :key="item.nid">
                                        <span class="image">
                                            <span>
                                                <img :src="item.pic" alt="">
                                            </span>
                                        </span>
                                        <span class="brand">{{item.title}}</span>
                                        <span class="name">{{item.subtitle}}</span>
                                        <span class="price">
                                            <span class="new-price">¥&nbsp;{{item.nprice}}</span><span class="old-price">¥&nbsp;{{item.oprice}}</span>
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <router-link to="#">男士</router-link>
                        <!--<div class="menu-item"></div>-->
                    </li>
                    <li>
                        <router-link to="#">生活</router-link>
                        <div class="menu-item">
                            <div class="item-products">
                                <div class="cart-z">
                                    <div class="left-col">
                                        <router-link to="#">数码产品</router-link>
                                        <router-link to="#">面部护肤</router-link>
                                        <router-link to="#">面膜</router-link>
                                        <router-link to="#">彩妆</router-link>
                                        <router-link to="#">洗护</router-link>
                                        <router-link to="#">美甲</router-link>
                                    </div>
                                </div>
                                <div class="res-ml">
                                    <router-link to="#" v-for="item in info6" :key="item.nid">
                                        <span class="image">
                                            <span>
                                                <img :src="item.pic" alt="">
                                            </span>
                                        </span>
                                        <span class="brand">{{item.title}}</span>
                                        <span class="name">{{item.subtitle}}</span>
                                        <span class="price">
                                            <span class="new-price">¥&nbsp;{{item.nprice}}</span><span class="old-price">¥&nbsp;{{item.oprice}}</span>
                                        </span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="cir">
                        <router-link to="#"><span>●</span></router-link>
                        <!--<div class="menu-item"></div>-->
                    </li>
                    <li>
                        <router-link to="#">折扣</router-link>
                        <!--<div class="menu-item"></div>-->
                    </li>
                    <li>
                        <router-link to="#">品牌</router-link>
                        <!--<div class="menu-item"></div>-->
                    </li>
                    <li>
                        <router-link to="#"><span></span></router-link>
                    </li>
                    <li class="find">
                        <router-link to="#">发现</router-link>
                        <!--<div class="menu-item"></div>-->
                    </li>
                    <li>
                        <router-link to="#"><span></span></router-link>
                    </li>
                    <li>
                        <router-link to="#">推荐</router-link>
                        <!--<div class="menu-item"></div>-->
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
//引入头部的header文件
import topHeader from './topHeader.vue'
    export default{
        data(){
            return {
                info1:'',
                info2:'',
                info3:'',
                info4:'',
                info5:'',
                info6:'',
                item:'',
                istopHeader:true,
                search:'',
            }
        },
        components:{
            topHeader
        },
        mounted() {
            this.axios.get('http://localhost:3000/products').then(res=>{
                //console.log(res.data)
                //console.log(JSON.stringify(res.data))
                this.info1=res.data.slice(0,6);
                this.info2=res.data.slice(6,12);
                this.info3=res.data.slice(12,16);
                this.info4=res.data.slice(16,21);
                this.info5=res.data.slice(21,25);
                this.info6=res.data.slice(26);
            });
        },
        methods:{
            /*getSearch(){
                let search=this.search;
                console.log(search)
                this.axios.get('http://localhost:3000/products/search?search='+search).then(res=>{
                    this.q=res.data;
                })
            }*/
            getSearch(){
                let search=this.search;
                sessionStorage.setItem('search',search);
                console.log()
                let a=sessionStorage.search;
                this.$router.push({
                    name:'bb',
                    params:{a}
                    })
            }
        },
        created() {
            /*this.search=sessionStorage.search;
            console.log(this.$route.path)
            if(sessionStorage.search == undefined){
                this.search=''
            }else if(this.$route.path=='/'){
                this.search=''
            }else{
                this.search=sessionStorage.search
            }*/
        },
    }
</script>

<style scoped>
a{
    font-size: 12px;
    color: #9e9e9e;
}
a:hover{
    color: #2d2d2d;
}
.header-top{
    width:100%;
    *height:33px;
    line-height: 33px;
    *border-bottom: 1px solid #d9d9d9;
    box-sizing: border-box;
}
.header-top .top-area:after {
    content: "";
    display: table;
    clear: both;
}
.header-top .top-area{
    width:1100px;
    margin:0 auto;
}
.header-top .top-area .left{
    float:left;
}
.header-top .top-area .left a{
    padding-right: 22px;
}
.header-top .top-area .left a:last-child{
    position:relative;
}
.header-top .top-area .left a:last-child img{
    display:none;
    position:absolute;
    left:0;
    z-index: 99;
    width: 133px;
    height: 133px;
    padding: 10px;
    background: #fff;
    border: 1px solid #eee;
}
.header-top .top-area .left a:last-child:hover img{
    display:block;
}
.header-top .top-area .right{
    float:right;
    display:flex;
    box-sizing: border-box;
}
.header-top .top-area .right>a{
    margin-left: 42px;
    padding-left: 22px;
}
.header-top .top-area .right>a:first-child{
    background:url('../assets/header/cartheader.png') no-repeat left center;
    background-size: 15px 15px;
}
.header-top .top-area .right>a:nth-child(2){
    background: url('../assets/header/likeheader.png') no-repeat left center;
    background-size: 15px 15px;
}
.header-top .top-area .right>a>span{
    font-weight: 500;
    color: #fd5158;
    }
.header-top .top-area .right .placeholder{
    width: 107px;
    margin-left: 22px;
    float: left;
    height: 33px;
    position: relative;
    margin-right: -10px;
}
.header-top .top-area .right .placeholder ul{
    position: absolute;
    right: 0;
    border: 1px solid transparent;
    padding-left: 11px;
    padding-right: 3px;
}
.header-top .top-area .right .placeholder ul:hover{
    z-index: 99;
    background-color: #fff;
    border: 1px solid #979797;
}
.header-top .top-area .right .placeholder ul li{
    display: none;
    float: left;
    clear: both;
    padding-left: 25px;
}
.header-top .top-area .right .placeholder ul .icon-my{
    background: url('../assets/header/myheader.png') no-repeat left center;
    background-size: 15px 15px;
    display: block;
    background-position:0 9px;
}
.header-top .top-area .right .placeholder ul .icon-my:hover~li{
    display:block;
}
.header-top .top-area .right .placeholder ul .icon-my a{
    background: url('../assets/header/pCenter_qian.png') no-repeat left center;
    background-size: 7px 4px;
    background-position: 54px 7px;
    padding-right: 18px;
}
/*中间header部分 */
.header-top .header{
    width: 1100px;
    height: 94px;
    margin: 0 auto;
    position: relative;
    font-family: PingFangSC, sans-serif, Microsoft Yahei;
    font-size: 14px;
}
.header-top .header .leftArea a{
    width: 138px;
    margin: 0 auto;
    padding-top: 30px;
    float: left;
}
.header-top .header .leftArea a>img{
    float: none;
    width:100%;
    padding: 0;
    position: relative;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    color: #626161;
}
.header-top .header .rightArea{
    float: right;
    position: relative;
    top: 0;
    right: 0;
    text-align: right;
}
.header-top .header .rightArea form .search{
    height: 40px;
    margin-top: 28px;
    width: 241px;
    box-sizing: border-box;
}
.header-top .header .rightArea form>ul{
    position: absolute;
    background: #fff;
    width: 100%;
    z-index: 11;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.header-top .header .rightArea form>ul:after{
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.header-top .header .rightArea form .search input{
    box-sizing: border-box;
    border-radius: 25px;
    -moz-border-radius: 25px;
    border: 1px solid #626161;
    height: 40px;
    padding-right: 30px;
    line-height: 34px;
    font-size: 13px;
    width: 240px;
    color: #626161;
    padding-left: 13px;
}
.header-top .header .rightArea form .search a{
    background-color: transparent;
    position: absolute;
    right: 2px;
    top: 35px;
    z-index: 1;
    width: 35px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    float:right;
}
.header-top .header .rightArea form .search a img{
    display: inline-block;
    width: 13px;
    height: 13px;
}
.header-top .header .rightArea .associatives{
    position: absolute;
    background: #fff;
    width: 100%;
    z-index: 11;
    box-sizing: border-box;
}
/*menu菜单部分*/
.header-top .menu{
    height: 80px;
    background-color: #000;
}
.header-top .menu::after{
    content: '';
    display: block;
    clear: both;
}
.header-top .menu .nav{
    width: 1100px;
    margin: 0 auto;
    position: relative;
}
.menu-item>.item-products>:last-child:after{
    content: '';
    display: block;
    clear: both;
}
.header-top .menu .menu-item{
    position: absolute;
    display: none;
    top: 80px;
    left: 0;
    z-index: 999;
    background-color: rgba(255, 255, 255, 0.95);
    padding: 16px;
}

/**************************/
.menu .menu-item .cat-z .left-col a{
    float: left;
    width: 100%;
    padding-left: 8px;
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 20px;
    color: #626161;
}
.header-top .menu .menu-item .item-products .res-ml>:first-child{
    margin-left: 0;
}






.header-top .menu-item .item-products .cart-z .left-col a{
    font-size:14px;
}
.header-top .menu .menu-item .item-products>div:last-child{
    float: left;
}
.header-top .menu .menu-item .item-products div a{
    display: block;
    text-align: center;
    font-size: 12px;
    padding: 0;
    float: left;
    position: relative;
    width: 163px;
    margin-left: 18px;
}
/*.header-top .menu .menu-item .item-products div a:first-child{
    margin-left:0;
}*/
/*.item-products div>a:first-child{
    margin-left:0;
}*/
.header-top .menu .menu-item .item-products div a>span{
    display: block;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow: hidden;
    text-align: center;
}
.header-top .menu .menu-item .item-products div a .image{
    width: 100%;
    padding-top: 133.3333333%;
    position: relative;
}
.header-top .menu .menu-item .item-products div a .image span{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    text-align: center;
    z-index: 0;
}
.header-top .menu .menu-item .item-products div a .image span img{
    max-width: 100%;
    max-height: 100%;
    margin: auto;
}
.header-top .menu .menu-item .item-products div a .brand{
    *display: inline-block;
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
.header-top .menu .menu-item .item-products div a .name{
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
.header-top .menu .menu-item .item-products div a .price{
    font-size: 14px;
    height: 22px;
    line-height: 18px;
    margin-top: 8px;
    text-align: left;
    color: #626161;
    font-weight: bold;
}
.header-top .menu .menu-item .item-products div a .price span{
    display: inline;
}
.header-top .menu .menu-item .item-products div a .price .old-price{
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
    margin-left: 9px;
    text-decoration: line-through;
}



.header-top .menu .nav ul{
    float:left;
}
.header-top .menu .nav ul li{
    float: left;
    font-size: 16px;
    padding-left: 20.1667px;
    padding-right: 20.1667px;
    line-height:80px;
}
.header-top .menu .nav ul li:hover div{
    display:block;
}
.header-top .menu .nav ul li:first-child{
    padding-left: 0;
}
.header-top .menu .nav ul li:last-child{
    padding-right:0;
}
.header-top .menu .nav ul li:first-child a{
    font-size:20px;
    font-weight: 600;
    position:relative;
}
.header-top .menu .nav ul li:first-child a:before{
    content: ' ';
    display:inline-block;
    position: absolute;
    top: 58px;
    left: 0;
    right: 0;
    border-bottom: 3px solid #fff;
}
.header-top .menu .nav ul li:last-child a,.header-top .menu .nav ul li.find a{
    font-size:20px;
    font-weight: 600;
    font-family: PingFangSC , sans-serif;
}
.header-top .menu .nav ul li.cir a span{
    font-size: 0px;
    vertical-align: middle;
    background: #fff;
    border-radius: 50%;
    display: inline-block;
    width: 4px;
    height: 4px;
    opacity: 1;
}
.header-top .menu .nav ul li>a{
    float: left;
    height: 80px;
    color: #fff;
    line-height: 80px;
    font-size: 16px;
}
.header-top .menu .nav ul li>a span{
    opacity: 0.5;
    border-left: solid 1px #ffffff;
}
.cart-z{
    float: left;
}
.left-col {
    float: left;
    width: 163px;
}
.left-col a {
    float: left;
    width: 100%;
    padding-left: 8px;
    margin-bottom: 25px;
    font-size: 14px;
    line-height: 20px;
    color: #626161;
}



</style>

