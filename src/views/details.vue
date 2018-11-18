<template>
    <div class="products">
        <Header></Header>
    <div>
        <div class="pageTab page_block">
            <ul>
                <li v-for="(item,i) in fl" :key="i"><router-link to='#'>{{item}}</router-link><span>&gt;</span></li>
                <li>{{pname}}</li>
            </ul>
        </div>
        <div class="goodsDetail w1100 m0a">
            <div class="info w1100 mb20 clearfloat">
            <!--产品图片-->
                <!--<div class="productShow left psr">
                    <div class="bigimgShow psr">
                        <router-link to="#" class="item product_card" v-for="(item,i) in md" :key="i">
                            <img :src="item" v-show="index==i"/>
                        </router-link>
                    </div>
                    <div class="imgShow psa dbo">
                        <div class="imgView">
                            <div class="owl-carousel2 owl-carousel owl-theme owl-loaded">
                                <div class="owl-stage-outer">
                                    <div class="owl-stage" id="out">
                                        <div class="owl-item" v-for="(item,i) in sm" :key="i">
                                            <router-link to="#" class="item product_card">
                                                <img :src="item" @mouseover="index=i"/>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="owl-controls">
                                    <div class="owl-nav dbo">
                                        <div class="owl-prev" @click="prev">prev</div>
                                        <div class="owl-next"  @click="next">next</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>-->
                <div class="left psr productShow">
                    <div class="psa bigimgShow">
                        <div class="bigimgShow psr">
                            <router-link to="#" class="item product_card" v-for="(item,i) in md" :key="i">
                                <img :src="item" v-show="index==i"/>
                            </router-link>
                        </div>
                    </div>
                    <div class="psa imgShow">
                        <div class="imgView">
                            <div class="owl-carousel2 owl-carousel owl-theme owl-loaded">
                                <div class="ofh psa">
                                    <div class="psa smimgshow" ref='yd' style="left:-87px">
                                    <router-link to="#" class="item product_card ml20">
                                        <img :src="sm[sm.length-1]" />
                                    </router-link>
                                    <router-link to="#" class="item product_card ml20"  v-for="(item,i) in sm" :key="i" j="i">
                                        <img :src="item" @mouseover="index=i"/>
                                    </router-link>
                                    <router-link to="#" class="item product_card ml20">
                                        <img :src="sm[0]" />
                                    </router-link>
                                </div>
                                </div>
                                <span class="owl-prev" @click="prev"></span>
                                <span class="owl-next" @click="next"></span>
                            </div>
                        </div>
                    </div>
                </div>
            <!--产品图片-->
                <div class="productOption right">
                    <div class="productDescrip">
                        <p><router-link to="#">{{title}}</router-link></p>
                        <p class="product-name">{{pname}}</p>
                        <p>{{spec}}</p>
                    </div>
                    <div class="productPrice product-price">
                        <div class="productPrice">
                            <p class="storePrice clearfloat">
                                <em class="left mt12">价格：</em>
                                <span class="salePrice left">￥{{price}}</span>
                                <i class="discountNum left">{{promotion}}</i>
                                <span class="originPrice left">￥{{oprice}}</span>
                            </p>
                        </div>
                        <div class="detail-option-box choose-form-box">
                            <div class="product-detail-option-box">
                                <div class="option-box">
                                    <div class="product-options">
                                        <dl class="last">
                                            <dd class="option-select product-option-select-wrapper">
                                                <div class="select-wrapper">
                                                    <label><span>颜色</span></label>
                                                    <div class="btn-attr-list">
                                                        <button v-for="(item,i) in color" :key="i" class="attr_item on" type="button">{{item}}</button>
                                                    </div>
                                                </div>
                                            </dd>
                                            <dd class="option-select product-option-select-wrapper">
                                                <div class="select-wrapper">
                                                    <label><span>尺寸</span></label>
                                                    <div class="btn-attr-list">
                                                        <button v-for="(item,i) in size" :key="i" type="button" class="attr_item on">{{item}}</button>
                                                    </div>
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="selected-options-area">
                                        <span class="count option-result2">
                                            <span class="sale_qty">数量：</span>
                                            <span class="count-form clearfloat"><a class="minus"></a> <input readonly="readonly" type="text" class="option-item-qty" value='1'> <a class="plus"></a></span>
                                        </span>
                                    </div>
                                    <div class="clearer"></div>
                                </div>
                            </div>
                            <nav class="navbar-fixed-bottom btn-footer clearfloat">
                                <router-link to="" class="product-addtocart-button btn-bk">
                                    加入购物车
                                </router-link>
                                <div class="collectShare clearfloat">
                                    <router-link to="" class="productCollect unlike">收藏 (<span class="like-cnt">271</span>)</router-link>
                                    <router-link to="">联系客服</router-link>
                                </div>
                            </nav>
                            <!-- 成功加入购物车 -->
                            <div class="alert_login add_to_ShoppingArea">
                                <img src="@/assets/detail/icon_error.png"/>
                                <p>请先登录</p>
                                <div class="add_to_ShoppingArea_btn">
                                    <a class="continueShopping">取消</a>
                                    <router-link to="login" class="go_to_billingPage">去登录</router-link>
                                </div>
                            </div>
                            <!-- 加入购物车结束 -->
                        </div>
                        <div class="detail-info">
                            <div class="deliveryWay send_type_0">
                                <em>发货方式：</em>国内仓发货 包邮<span class="desc">13时之前下单 &nbsp;预计10个工作日送达</span>
                                <router-link to="#" class="checkDeliveryInfo">查看条款</router-link>
                            </div>
                            <!-- 成功加入购物车开始 -->
                            <div class="add_to_ShoppingArea">
                                <img src="@/assets/detail/certifySuccess.png">
                                <p>成功加入购物车</p>
                                <div class="add_to_ShoppingArea_btn">
                                    <router-link to="#" class="continueShopping">继续去购物</router-link>
                                    <router-link class="go_to_billingPage" to="#">去购物车结算</router-link>
                                </div>
                            </div>
                            <!-- 成功加入购物车结束 -->
                            <div class="returnPolicy">
                                <em>购物须知：</em>
                                <span>
                                    <span><img src="@/assets/detail/zheng.png">100%正品保障</span>
                                    <span><img src="@/assets/detail/qian.png">货物签收说明</span>
                                    <span><img src="@/assets/detail/shi.png">实名认证</span> 
                                    <span><img src="@/assets/detail/tui.png">七天省心退</span>
                                    <span><img src="@/assets/detail/shui.png">海外购额度说明</span></span>
                                    <router-link to="#"  class="checkPolicy">查看条款</router-link>
                            </div>
                            <div class="shipping-region">
                                <em>支持配送：</em>
                                <i class="icon-china"></i>
                                <span>中国大陆</span>
                            </div>
                        </div>
                        <div class="bdsharebuttonbox bdshare-button-style0-16">
                            <router-link to="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></router-link>
                            <router-link to="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></router-link>
                            <router-link to="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfloat w1100 m0a">
            <!--商品推荐-->
            <div class="left productRecommend">
                <h3>商品推荐</h3>
                <div class="col_item_1 cearfloat MT12">
                    <div>
                        <router-link to="#" class="product_card" v-for="item in sptj" :key="item.nid">
                            <span class="image">
                                <span class="image_ab">
                                    <img :src="item.pic"/>
                                </span>
                            </span>
                            <span class="brand">{{item.title}}</span>
                            <span class="name">{{item.subtitle}}</span>
                            <span class="formatted_final_price">
                                <span>￥{{item.nprice}}</span>
                                <span class="product-original-price">￥{{item.oprice}}</span>
                            </span>
                        </router-link><!--将来要循环的-->
                    </div>
                </div>
            </div>
            <div class="right productMenu mb20">
                <div class="main-category-view psr">
                    <!--将来需要判断显示隐藏-->
                    <div class="product-detail-menu-box psa">
                        <div class="psr m0a w935">
                            <ul>
                                <li v-for="(item,i) in siC" :key="i" class="detail" :class="{on:ssss==i}">
                                    <a href="#" class="current" @click.prevent="s(i)">{{item}}</a>
                                </li>
                                <!-- <li class="etc" :class="{on:index==siC}"><a href="#" role="tab" @click.prevent="g">购物须知</a></li>
                                <li class="etc" :class="{on:index==siC}"><a href="#" role="tab" @click.prevent="p">全部评论</a></li>
                                <li class="etc" :class="{on:index==siC}"><a href="#" role="tab" @click.prevent="c">标准尺码对照表</a></li> -->
                            </ul>
                        </div>
                    </div>
                    <div class="product-detail-box clearfloat">
                        <div class="tab-pane fade in active" v-show="ssss==0?true:false">
                            <div class="detail-size-box">
                                <div id="productAdditionalData">
                                    <div>
                                        <div class="size-box">
                                            <p class="size-tit">产品详情</p>
                                            <div class="size-info">{{details}}</div>
                                        </div>
                                        <div class="size-box">
                                            <p class="size-tit">产品参数</p> 
                                            <div class="size-common">
                                                <p v-for="(item,i) in parameters" :key="i"><span class="tit">{{item}}</span></p> 
                                                <!--<p><span class="tit"><span>面料/材质</span> <span>:</span></span> <span class="txt">{{item}}</span></p> 
                                                <p><span class="tit"><span>主要成分</span> <span>:</span></span> <span class="txt">{{item}}</span></p> 
                                                <p><span class="tit"><span>保养方式</span> <span>:</span></span> <span class="txt">{{item}}</span></p>-->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="detail-description-box">
                                <div id="productDescription">
                                    <div>
                                        <p><br></p>
                                        <!--商品详情图片开始循环-->
                                        <p v-for="(item,i) in info" :key="i"><img :src="item"></p>
                                        <p><br></p>
                                    </div>
                                </div>
                                <div class="brandInfo">
                                    <div class="detail-tit"><span>品牌介绍</span></div>
                                    <div class="brand-info">
                                        <router-link to="#"><img :src="ppjspic" class="img-responsive align-center" /></router-link>
                                        '{{ppjs}}'<br>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--商品详情的隐藏显示-->
                        <!--购物须知-->
                        <div class="gwxz" v-show="ssss==1?true:false">
                            <div class="detail-policy">
                                <p>
                                    <img src="https://img01.wconceptimg.cn/media/wysiwyg/xuzhi/gouwuxuzhi.jpg" alt="" />
                                </p>
                            </div>
                        </div>
                        <div class="cm" v-show="ssss==3?true:false">
                            <img src="https://img01.wconceptimg.cn/skin/frontend/wcc/default/images/homemay/sizechart.jpg" alt="" />
                        </div>
                        <div id="reviewsWrapper" v-show="ssss==0||3||2?true:false">
                            <div class="detail-tit"><span>累计评论</span></div>
                            <div class="review">
                                <div id="productReviewForm" class="review_from">
                                    <p class="cont clearfloat"><textarea placeholder="写评论" name="review"></textarea></p>
                                    <div class="clearfloat sendComment">
                                        <div class="left" style="position: relative">
                                            <a class="add ladda-button" style="position: relative; z-index: 1;">添加图片</a>
                                            <ul class="add-img clearfloat"></ul>
                                            <div class="moxie-shim moxie-shim-html5" style="position: absolute;top: 18px;left: 0px;width: 500px;height: 38px;overflow: hidden;z-index: 2;">
                                                <label class="file-uploads file-uploads-html5" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; cursor: pointer;">
                                                    <input type="file" name="image" id="image" multiple="multiple">
                                                </label>
                                            </div>
                                        </div>
                                        <div class="submit_btn right">
                                            <input type="submit" value="发送">
                                        </div>
                                    </div>
                                </div>
                                <div id="productReviewBox" class="review_list">
                                    <div class="item" v-for="item in sppl" :key="item.plid" v-show="spplOf">
                                        <div class="item_content">
                                            <div class="item_header">
                                                <span class="phone">{{item.uname}}</span>
                                                <span class="time">{{item.time}}</span>
                                            </div>
                                            <div class="item_content breakWord pr20">{{item.neir}}</div>
                                            <div class="row file clearfloat">
                                                <div class="left mr20 col-xs-4 col-sm-3 col-md-2 col-lg-1">
                                                    <div class="review-image-placeholder fix-ratio-100-100">
                                                        <img src="https://img01.wconceptimg.cn/media/review/495825/file0_4.jpg!/fw/120" class="fix-ratio-content">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item_replay"></div>
                                            <div class="replay_list">
                                                <div class="secondReplay btd9">
                                                    <p class="replay-name">
                                                        <span class="uColor">{{item.ouname}}</span> 
                                                        <span>：</span> 
                                                        <span class="txt">{{item.oneir}}</span>
                                                    </p>
                                                    <div class="replay-footer">
                                                        <span class="time">{{item.otime}}</span>
                                                        <div class="btn-replay">
                                                            <div class="item_replay">回复</div>
                                                        </div>
                                                    </div>
                                                    <div class="item_replay_comment">
                                                        <div class="reply_form">
                                                            <textarea id="replay-comment"></textarea> 
                                                            <input type="submit" value="评论" class="replay_submit">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
//引入网页最顶部内容
import Header from '../components/header.vue'
    export default{
        data(){
            return {
                nid:this.$route.query.nid,
                color:'',
                details:'',
                did:'',
                discount:'',
                hsj:'',
                //nid:'',
                oprice:'',
                pname:'',
                ppjs:'',
                ppjspic:'',
                parameters:'',
                price:'',
                promotion:'',
                size:'',
                spec:'',
                title:'',
                fl:'',
                info:'',
                sm:'',
                md:'',
                index:true,
                count:1,
                j:1,
                sptj:'',
                sppl:'',
                spplOf:false,
                siC:['商品详情','购物须知','全部评论','标准尺码对照表'],
                ssss:0,
            }
        },
        methods:{
            getinfo(){
                let nid=this.$route.query.nid;
                //console.log(nid)
                this.axios.get('http://localhost:3000/products/getinfo?nid='+nid).then(res=>{
                    this.nid=res.data[0].nid;
                    this.color=res.data[0].color.split(',');
                    this.details=res.data[0].details;
                    this.did=res.data[0].did;
                    this.discount=res.data[0].discount;
                    this.hsj=res.data[0].hsj;
                    this.oprice=res.data[0].oprice;
                    this.pname=res.data[0].pname;
                    this.ppjs=res.data[0].ppjs;
                    this.ppjspic=res.data[0].ppjspic;
                    this.parameters=res.data[0].parameters.split(',');
                    this.price=res.data[0].price;
                    this.promotion=res.data[0].promotion;
                    this.size=res.data[0].size.split(',');
                    this.spec=res.data[0].spec;
                    this.title=res.data[0].title;
                    console.log(res.data);
                });
                this.axios.get('http://localhost:3000/products/getpic?nid='+nid).then(res=>{
                    this.fl=res.data[0].fl.split(',');
                    this.info=res.data[0].info.split(',');
                    this.sm=res.data[0].sm.split(',');
                    this.md=res.data[0].md.split(',');
                    //console.log(this.pic)
                });
                this.axios.get('http://localhost:3000/products/sptj?nid='+nid).then(res=>{
                    this.sptj=res.data;
                    //console.log(res.data)
                });
                this.axios.get('http://localhost:3000/products/sppl?nid='+nid).then(res=>{
                    if(res.data.length>0){
                        this.sppl=res.data;
                        }else{this.spplOf=false}
                    
                    //console.log(res.data)
                });
            },
            prev(){
                let left=this.$refs.yd.style.left;
                if(this.j<2){
                    //this.j--;
                    this.$refs.yd.style.left=(-87*this.j)+'px';
                    //console.log('!!!!'+this.j)
                    return false;
                }else{
                    this.j--;
                    this.$refs.yd.style.left= (-87*this.j)+'px';
                    //console.log(this.j)
                    return false;
                }
            },
            next(){
                /*this.count++;
                console.log(this.count,this.index);*/
                let left=this.$refs.yd.style.left;
                
                if(this.sm.length-3>this.j){
                    this.j++;
                    this.$refs.yd.style.left=(-87*this.j)+'px';
                    
                    //console.log('!!!!'+this.j)
                    return false;
                }else{
                    this.$refs.yd.style.left= (-87*this.j)+'px';
                    //console.log(this.j)
                    return false;
                }
                
            },
            s(i){
                this.ssss=i;
            },
            
        },
        mounted(){
            this.getinfo();
        },
        created() {
            /*let sid=sessionStorage.uname;
            if(this.sid==''||this.sid==undefined){
            //
            //this.$router.push('/login')
            }
            console.log(this.$route)*/
            sessionStorage.setItem=this.$route.query.nid
        },
        components:{
            Header,Footer
            
        },
    }
</script>

<style scoped>
.pageTab{
    height: 36px;
    line-height: 36px;
}
.page_block {
    width: 1100px;
    margin: 0 auto;
}
.pageTab ul{
    display: inline-block;
    width: 100%;
}
.page_block li{
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
.m0a {
    margin: 0 auto;
}

.w1100 {
    width: 1100px;
}
.mb20 {
    margin-bottom: 20px;
}

.goodsDetail .productShow {
    width: 448px;
    height: 600px;
}
.psr {
    position: relative;
}
.left {
    float: left;
}
.goodsDetail .productShow .bigimgShow {
    width: 448px;
    height: 600px;
    overflow: hidden;
    position: relative;
}
.product_card:first-child {
    margin-left: 0;
}
.goodsDetail .productShow .bigimgShow img {
    width: 448px;
    max-height: 600px;
    left: 0;
    top: 0;
    *z-index: -9;
    position: absolute;
}
.product_card .goodsDetail .productShow .bigimgShow .active{
    z-index:0;
}
.changeIndex{
    z-index:0;
}
.goodsDetail .productShow .imgShow {
    width: 448px;
    height: 110px;
    background-color: rgba(0, 0, 0, 0.25);
    bottom: 3px;
    left: 0;
    *display: none;
}

.goodsDetail .productShow .dbo{
    display:block;
}
.goodsDetail .productShow .imgShow .imgView .owl-carousel2 {
    width: 330px;
    height: 85px;
    margin: 13px auto 0;
}
.owl-carousel.owl-loaded {
    display: block;
}
.owl-carousel {
    display: none;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    position: relative;
    z-index: 1;
}
.owl-carousel .owl-stage-outer {
    position: relative;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0);
}
.owl-carousel .owl-stage {
    position: relative;
    -ms-touch-action: pan-Y;
    transform: translate3d(-350px, 0px, 0px);
    transition: all 0.25s ease 0s;
    width: 1137.5px;
    *left:110%;
    *left:355px;
    right:-355px;
}
.owl-item {
    width: 67.5px;
    margin-right: 20px;
}

.goodsDetail .productShow .imgShow .imgView .owl-item {
    width: 63px;
    height: 85px;
}
.owl-carousel .owl-item {
    position: relative;
    min-height: 1px;
    float: left;
    -webkit-backface-visibility: hidden;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.product_card {
    display: block;
    *width: 100%;
    text-align: center;
    color: #626161;
    font-size: 12px;
    *margin-left: 20px;
    padding: 0;
    float: left;
    position: relative;
}
.product_card:first-child {
    margin-left: 0;
}
.zShow{
    z-index:0;
}

.goodsDetail .productShow .imgShow .imgView .owl-item img {
    width: 63px;
    max-height: 85px;
}

.owl-carousel .owl-item img {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
}
.owl-carousel .owl-item img {
    display: block;
    width: 100%;
    -webkit-transform-style: preserve-3d;
}
.owl-prev{
    left: -30px;
    background: url(../assets/detail/small_leftBtn.png) no-repeat;
    background-size: 8px 14px;
}
.owl-next{
    right: -30px;
    background: url(../assets/detail/small_rightBtn.png) no-repeat;
    background-size: 8px 14px;
}
.goodsDetail .productShow .imgShow .imgView .owl-nav .owl-prev, .goodsDetail .productShow .imgShow .imgView .owl-nav .discount_active .owl-carousel11 .owl-next, .discount_active .owl-carousel11 .goodsDetail .productShow .imgShow .imgView .owl-nav .owl-next, .goodsDetail .productShow .imgShow .imgView .owl-nav .owl-next{
    width: 8px;
    height: 14px;
    position: absolute;
    top: 36px;
    text-indent: -9999px;
}
.goodsDetail .productOption {
    width: 600px;
    color: #9e9e9e;
}
.right {
    float: right;
}
.goodsDetail .productOption .productDescrip {
    border-bottom: 1px solid #d9d9d9;
}
.goodsDetail .productOption .productDescrip p:first-child {
    font-weight: bold;
}

.goodsDetail .productOption .productDescrip p {
    line-height: 30px;
    font-size: 22px;
    color: #626161;
    word-break: break-all;
}
.goodsDetail .productOption .productDescrip p:first-child+p+p {
    font-size: 12px;
    color: #9e9e9e;
    height: 14px;
    line-height: 14px;
    margin: 5px 0 15px;
}
.goodsDetail .productOption .productPrice {
    color: #9e9e9e;
    line-height: 20px;
    padding: 7px 0;
}
.goodsDetail .productOption .productPrice .storePrice {
    margin-bottom: 5px;
    color: #626161;
}
.goodsDetail .productOption em {
    display: inline-block;
    width: 70px;
    text-align: left;
}

.mt12 {
    margin-top: 12px;
}
.left {
    float: left;
}
.goodsDetail .productOption .productPrice .salePrice {
    display: inline-block;
    color: #626161;
    font-size: 28px;
    line-height: 40px;
    vertical-align: -3px;
}
.goodsDetail .productOption .productPrice .discountNum {
    display: inline-block;
    width: 45px;
    height: 19px;
    line-height: 20px;
    margin: 8px 0 0 20px;
    background: url(../assets/detail/discount_bg.png) no-repeat left center;
    background-size: 100%;
    font-size: 12px;
    color: #fff;
    text-indent: 13px;
    font-style: normal;
}
.goodsDetail .productOption .productPrice .originPrice {
    text-decoration: line-through;
    margin: 12px 0 0 20px;
}
.clearfloat:after{
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}

.goodsDetail .productOption .productPrice .product-detail-option-box{
    margin-top: 25px;
}
.goodsDetail .productOption .select-wrapper {
    margin-top: 5px;
}
.goodsDetail .productOption .select-wrapper label {
    height: 24px;
    line-height: 24px;
    margin-right: 3px;
}
.goodsDetail .productOption .select-wrapper label,.productOption .select-wrapper .btn-attr-list {
    float: left;
}
.goodsDetail .productOption .select-wrapper label,.goodsDetail .selected-options-area .sale_qty {
    width: 70px;
}
.productOption .select-wrapper label,.productOption .select-wrapper .btn-attr-list,.selected-options-area .sale_qty {
    display: inline-block;
    width: 470px;
}
.goodsDetail .productOption button.on {
    background-color: #626161;
    color: #fff;
}

.goodsDetail .productOption button {
    display: inline-block;
    height: 24px;
    margin: 0 15px 10px 0;
    padding: 0 15px;
    display: inline-block;
    text-align: center;
    border: 1px solid #9e9e9e;
    color: #9e9e9e;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.goodsDetail .productOption .select-wrapper:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.goodsDetail .selected-options-area .count-form {
    vertical-align: -5px;
}

.goodsDetail .selected-options-area .count-form, .goodsDetail .selected-options-area .count-form a {
    display: inline-block;
}
.goodsDetail .selected-options-area .count-form a.minus {
    background: url(../assets/detail/minus.png) no-repeat;
    background-size: 20px;
}

.goodsDetail .selected-options-area .count-form a {
    width: 20px;
    display: inline-block;
    cursor: pointer;
}
.goodsDetail .selected-options-area .count-form a, .goodsDetail .selected-options-area .count-form input {
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #626161;
    float: left;
}
.goodsDetail .selected-options-area .count-form input {
    width: 40px;
    margin: 0 3px;
    border: 1px solid #9e9e9e;
    box-sizing: border-box;
}
.goodsDetail .selected-options-area .count-form a.plus {
    background: url(../assets/detail/plus.png) no-repeat;
    background-size: 20px;
}
.product-addtocart-button {
    float: left;
    width: 160px;
    height: 50px;
    line-height: 50px;
    background-color: #fd5158;
    color: #fff;
    text-align: center;
    margin: 20px 0;
    font-size: 16px;
    cursor: pointer;
}
.goodsDetail .productOption .collectShare {
    margin: 20px 0;
    float: left;
    margin-left: 18px;
}
.goodsDetail .productOption .collectShare a.unlike {
    background: url(../assets/detail/unlike.png) no-repeat 30px center;
    background-size: 20px 17px;
    box-sizing: border-box;
}

.goodsDetail .productOption .collectShare a {
    display: block;
    color: #9e9e9e;
    text-align: center;
    width: 150px;
    padding-left: 40px;
    height: 50px;
    line-height: 50px;
    border: 1px solid #d9d9d9;
    float: left;
}
.goodsDetail .productOption .collectShare a:first-child+a {
    font-size: 12px;
    text-decoration: underline;
    width: 80px;
    border: none;
    padding-left: 10px;
    margin-left: 25px;
    background: url(../assets/detail/connectMe.png) no-repeat left center;
    background-size: 12px;
    box-sizing: border-box;
}
/*成功加入购物车开始*/
.add_to_ShoppingArea {
    width: 360px;
    height: 260px;
    background-color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    margin: -130px 0 0 -180px;
    z-index: 1000;
    display: none;
}

.add_to_ShoppingArea img {
    display: block;
    width: 73px;
    height: 61px;
    margin: 40px auto 30px;
}
.alert_login img {
    width: 70px;
    height: 70px;
}

.add_to_ShoppingArea p {
    text-align: center;
    font-size: 18px;
    color: #626161;
}
.add_to_ShoppingArea_btn {
    margin-top: 30px;
    text-align: center;
}
.add_to_ShoppingArea_btn .continueShopping {
    border: 1px solid #626161;
    color: #626161;
    margin-right: 20px;
}

.add_to_ShoppingArea_btn a {
    display: inline-block;
    width: 110px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
}
.add_to_ShoppingArea_btn .go_to_billingPage {
    background-color: #626161;
    color: #fff;
}
/*成功购物车结束*/
.goodsDetail .productOption .productPrice .detail-info {
    border: 1px solid #d9d9d9;
    padding: 16px 22px;
}
.goodsDetail .productOption .deliveryWay, .goodsDetail .productOption .taxes {
    color: #626161;
}

.goodsDetail .productOption .deliveryWay, .goodsDetail .productOption .taxes, .goodsDetail .productOption .returnPolicy {
    margin-bottom: 18px;
}
.goodsDetail .productOption .deliveryWay em, .goodsDetail .productOption .taxes em, .goodsDetail .productOption .taxes a {
    color: #9e9e9e;
}
.goodsDetail .productOption .returnPolicy>a, .goodsDetail .productOption .deliveryWay>a {
    float: right;
    font-size: 12px;
    color: #2d2d2d;
    position: relative;
}
.goodsDetail .productOption .returnPolicy>a:after, .goodsDetail .productOption .deliveryWay>a:after {
    width: 5px;
    content: "";
    height: 8px;
    background: url(//img01.wconceptimg.cn/skin/frontend/wcc_pc/default/images/2017.newbrand/new-brand-triangle.png) no-repeat;
    display: block;
    position: absolute;
    right: -12px;
    top: 6px;
    background-size: 100% 100%;
}
.goodsDetail .productOption .returnPolicy em {
    vertical-align: top;
}
.goodsDetail .productOption .returnPolicy>span {
    display: inline-block;
    width: 407px;
    line-height: 25px;
}
.goodsDetail .productOption .returnPolicy>span span {
    display: inline-block;
    width: 130px;
    color: #626161;
}
.goodsDetail .productOption .returnPolicy>span span img {
    width: 14px;
    height: 15px;
    vertical-align: middle;
    margin-right: 6px;
}
.goodsDetail .productOption .productPrice .detail-info .shipping-region .icon-china, .goodsDetail .productOption .productPrice .detail-info .shipping-region .icon-hongkong {
    display: inline-block;
    width: 27px;
    height: 18px;
    background-image: url(../assets/detail/icon_china.png);
    -o-background-size: 100% 100%;
    background-size: 100% 100%;
    vertical-align: middle;
    margin: 0 5px;
}
.bdshare-button-style0-16 {
    zoom: 1;
}
.bdshare-button-style0-16 .bds_qzone {
    background-position: 0 -52px;
}
.bdshare-button-style0-16 a, .bdshare-button-style0-16 .bds_more {
    float: left;
    font-size: 12px;
    padding-left: 17px;
    line-height: 16px;
    height: 16px;
    background-image: url(../assets/detail/icons_0_16.png?v=ba7acbd3.png);
    background-repeat: no-repeat;
    cursor: pointer;
    margin: 6px 6px 6px 0;
}
.bdshare-button-style0-16 a, .bdshare-button-style0-16 .bds_more {
    float: left;
    font-size: 12px;
    padding-left: 17px;
    line-height: 16px;
    height: 16px;
    background-image: url(../assets/detail/icons_0_16.png?v=ba7acbd3.png);
    background-repeat: no-repeat;
    cursor: pointer;
    margin: 6px 6px 6px 0;
}
.bdshare-button-style0-16 .bds_tsina {
    background-position: 0 -104px;
}
.bdshare-button-style0-16 .bds_weixin {
    background-position: 0 -1612px;
}
.bdshare-button-style0-16:after {
    content: ".";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
}

.bdshare-button-style0-16:after {
    content: ".";
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
}
/*商品推荐开始*/
.productRecommend {
    width: 140px;
}
.productRecommend h3 {
    border-bottom: 1px solid #d9d9d9;
}

.productRecommend h3, .productMenu ul {
    height: 40px;
    line-height: 40px;
    color: #626161;
    font-size: 16px;
}
.MT12 {
    margin-top: 12px !important;
}
/*商品推荐小图*/
.productRecommend .col_item_1 a {
    margin-left: 0;
}
.col_item_1 .product_card {
    width: 100%;
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
.product_card .formatted_final_price {
    font-size: 14px;
    height: 22px;
    line-height: 18px;
    margin-top: 8px;
    text-align: left;
    color: #626161;
    font-weight: bold;
}
.product_card .formatted_final_price span {
    display: inline;
}
.product_card .formatted_final_price .product-original-price {
    font-size: 12px;
    color: #9e9e9e;
    font-weight: normal;
    margin-left: 9px;
    text-decoration: line-through;
}
/*小商品模块结束*/
.productMenu {
    width: 935px;
    text-align: center;
}
.main-category-view {
    padding-top: 80px;
}
.product-detail-menu-box {
    /* width: 100%; */
    height: 40px;
    top: 0;
    margin-bottom: 40px;
    background-color: #fff;
    border-bottom: 1px solid #d9d9d9;
}

.psa {
    position: absolute;
}
.w935{
    width:935px;
}
.productMenu ul {
    text-align: center;
}
.main-category-view .product-detail-menu-box li.on {
    position: relative;
}

.productMenu ul li {
    width: 140px;
    display: inline-block;
}
.productMenu ul li a {
    color: #626161;
    /* display: block; */
}
.main-category-view .product-detail-menu-box li.on:after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    z-index: 1;
    border-bottom: 3px solid #626161;
}
.main-category-view .product-detail-box .detail-size-box .size-box {
    padding-bottom: 30px;
    width: 750px;
    margin: 0 auto;
}
.main-category-view .product-detail-box .detail-size-box .size-box .size-tit {
    display: block;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    color: #626161;
    line-height: 25px;
}

.main-category-view .product-detail-box .detail-size-box .size-box p {
    display: inline-block;
    margin-right: 50px;
    line-height: 22px;
}
.main-category-view .product-detail-box .detail-size-box .size-info, .main-category-view .product-detail-box .detail-size-box .size-common {
    display: block;
    text-align: left;
    line-height: 18px;
    color: #646464;
    margin-top: 10px;
}
.main-category-view .product-detail-box .detail-size-box .size-common .tit {
    margin-right: 10px;
}
/**商品介绍图 */
.main-category-view .product-detail-box .detail-description-box {
    width: 750px;
    margin: 0 auto;
}
#productDescription, #productDescription>p {
    line-height: 0;
    font-size: 0;
    border: 0px solid #000;
}
.main-category-view .product-detail-box .detail-description-box img {
    width: 750px;
}
.brandInfo {
    border-top: 1px solid #d9d9d9;
    padding: 25px 0px;
    width: 750px;
    margin: 0 auto;
}
.main-category-view .product-detail-box .detail-tit {
    font-size: 18px;
    font-weight: bold;
    color: #626161;
    line-height: 25px;
    margin-bottom: 25px;
}
.brandInfo .brand-info {
    font-size: 13px;
    line-height: 28px;
    color: #8c8c8c;
    width: 750px;
    margin: 0 auto;
}
.main-category-view .product-detail-box .brand-info a img {
    display: block;
    max-width: 750px;
    margin: 10px auto;
    cursor: pointer;
}

.review {
    background: #f8f8f8;
    width: 750px;
    margin: 0 auto;
}
.review_from {
    padding: 30px 45px;
    display: block;
    width: 100%;
    box-sizing:border-box;
}
.review_from textarea {
    float: right;
    width: 100%;
    height: 64px;
    border: solid 1px #d9d9d9;
    padding: 12px 13px;
    font-size: 14px;
    color: #7a7a7a;
    resize: none;
    box-sizing:border-box;
}
.review_from .sendComment {
    width: 100%;
}
.review_from .add {
    display: block;
    text-align: left;
    font-size: 13px;
    padding-left: 30px;
    background: url(../assets/detail/comment_addPhoto.png) no-repeat left center;
    background-size: 23px 18px;
    cursor: pointer;
    height: 38px;
    line-height: 38px;
    margin: 18px 0 10px;
}
.review_from .add-img {
    width: 500px;
    height: auto;
    border: none;
}
.review_from label {
    float: left;
    width: 70px;
    font-size: 16px;
    color: #7a7a7a;
}
.file-uploads {
    overflow: hidden;
    position: relative;
    text-align: center;
    display: inline-block;
}
.file-uploads.file-uploads-html5 input[type=file] {
    overflow: hidden;
    position: fixed;
    width: 1px;
    height: 1px;
    z-index: -1;
    opacity: 0;
}
.review_from .submit_btn {
    float: right;
    width: 109px;
    height: 29px;
    margin-top: 18px;
    text-align: center;
}
.review_from .submit_btn input {
    background-color: #2d2d2d;
    width: 109px;
    height: 29px;
    font-size: 16px;
    color: #ffffff;
    -webkit-border-radius: 0;
    border-radius: 0;
}
.review .review_list {
    padding: 30px 45px;
    border-top: 2px solid #fff;
}
.review_list .item:first-child {
    border: 0;
}

.review_list .item {
    display: inline-block;
    width: 100%;
    border-top: 1px dashed #d9d9d9;
}
.review_list .item .item_content {
    float: left;
    width: 100%;
    position: relative;
    text-align: left;
    line-height: 22px;
    margin-bottom: 10px;
}
.review_list .item .item_content .item_header {
    float: left;
    width: 100%;
    line-height: 22px;
    padding-right: 60px;
    margin-bottom: 10px;
    box-sizing:border-box;
}
.review_list .item .item_content .item_header .phone {
    float: left;
    font-size: 16px;
    color: #9e9e9e;
}
.review_list .item .item_content .item_header .time {
    float: right;
    font-size: 16px;
    color: #9e9e9e;
}
.breakWord {
    word-break: break-all;
}

.pr20 {
    padding-right: 20px;
}
.mr20 {
    margin-right: 20px;
}
.main-category-view .product-detail-box img.fix-ratio-content {
    width: 60px;
    height: 60px;
    cursor: url(//img01.wconceptimg.cn/skin/frontend/wcc_pc/default/images/homemay/icon-homemay-search_ie.png),pointer;
}
.review_list .item .item_content .item_replay {
    position: absolute;
    top: 3px;
    right: 5px;
    width: 19px;
    height: 18px;
    background: url(../assets/detail/icon_reply.png) no-repeat;
    background-size: 19px 18px;
    cursor: pointer;
}
.review_list .item .item_content .replay_list {
    width: 93%;
    float: left;
    background-color: #f8f8f8;
    font-size: 13px;
    color: #7a7a7a;
    position: relative;
    margin-top: 10px;
}
.review_list .item .item_content .replay_list .secondReplay:first-child {
    border-top: none;
}

.review_list .item .item_content .replay_list .secondReplay {
    padding-top: 15px;
}
.review_list .item .item_content .replay_list .secondReplay .replay-name .uColor {
    color: #2d2d2d;
}
.review_list .item .item_content .replay_list .replay-footer {
    overflow: hidden;
    margin: 15px 0;
}
.review_list .item .item_content .replay_list .replay-footer .time {
    float: left;
    color: #9e9e9e;
    font-size: 12px;
}
.review_list .item .item_content .replay_list .replay-footer .btn-replay {
    float: right;
    font-size: 12px;
    color: #2d2d2d;
}
.review_list .item .item_content .replay_list .replay-footer .btn-replay .item_replay {
    background: none;
    position: static;
    width: auto;
    display: inline-block;
}
.review_list .item .item_content .replay_list .item_replay_comment {
    overflow: hidden;
    display: block;
    width: 100%;
    display:none;
}
.review_list .item .item_content .replay_list .item_replay_comment .reply_form {
    width: 100%;
    box-sizing:border-box;
}
.review_list .item .item_content .reply_form {
    width: 93%;
    background-color: #f3f3f3;
    padding: 15px 20px;
    text-align: right;
    float: left;
}
.review_list .item .item_content .reply_form textarea {
    padding: 10px;
    width: 100%;
    height: 44px;
    border: solid 1px #979797;
    box-sizing:border-box;
}
.review_list .item .item_content .reply_form .replay_submit {
    margin-top: 8px;
    width: 96px;
    height: 29px;
    background-color: #626161;
    font-size: 12px;
    color: #ffffff;
    cursor: pointer;
}
.owl-carousel .owl-stage:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
}


.owl-carousel2.owl-carousel.owl-theme.owl-loaded span {
    display: inline-block;
    width: 8px;
    height: 14px;
    z-index: 111;
    top: 36px;
    position: absolute;
    cursor: pointer;
}
a.item.product_card.ml20{
    margin-left:20px;
}
.psa.smimgshow{
    width:1200px;
}
.ofh.psa{
    overflow:hidden;
    width:100%;
    height:100%;
}
.smimgshow{
    transition: all 0.25s ease 0s;
}
</style>
