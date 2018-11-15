<template>
    <div class="cart">
        <topHeader></topHeader>
        <div class="header m0a w1100">
            <div class="area m0a">
                <router-link to="#">
                    <img src="@/assets/header/homelogo.png" alt="">
                </router-link>
            </div>
            <div class="rightarea clearfloat">
                <div class="orderStatus left">
                    <span class="psa">1</span>
                    我的购物车
                </div>
                <div class="orderStatus left">
                    <span class="psa">2</span>
                    填写／核对订单信息
                </div>
                <div class="orderStatus left">
                    <span class="psa">3</span>
                    成功提交订单
                </div>
            </div>
        </div>
        <div class="shopCart m0a w1100 pb20">
            <table class="cartCount w1100 mb20" border="0" cellpadding="0" cellspacing="0" >
                <thead><tr>
                    <td colspan="7">
                        <i class="cartItem beSelected checkbox"></i>
                        <label>韩国仓发货</label>
                        <span class="warehouse-info"></span>
                    </td>
                </tr></thead>
                <tbody>
                    <tr class="k">
                        <td colspan="7"></td>
                    </tr>
                    <tr class="productBox beSelected">
                        <td>
                            <div class="td1 psr">
                                <div class="selectGoods psa">
                                    <i class="checkbox beSelected"></i>
                                </div>
                                <router-link to="#">
                                    <img src="https://img01.wconceptimg.cn/media/catalog/product/w/i/wimg_451020329_5349018.jpg!/fw/250/fh/250"/>
                                </router-link>
                            </div>
                        </td>
                        <td>
                            <div class="td2">
                                <router-link to="#">NewYogO</router-link><br>
                                <router-link to="#" class="product-name">2018新款秋冬双面呢羊绒大衣_灰绿/暖杏</router-link>
                            </div>
                        </td>
                        <td>
                            <div class="td3">
                                <p class="option_item">颜色 : 雾灰绿（第二批20号左右）</p>
                                <p class="option_item">尺码 : M</p>
                                <p class="modify">编辑</p>
                            </div>
                        </td>
                        <td>
                            <div class="td4">
                                <div class="unitPrice"><em>￥1,488.00</em></div>
                            </div>
                        </td>
                        <td>
                            <div class="td5">
                                <div class="shopNum m0a clearfloat">
                                    <a class="shoppingMinus"></a> 
                                    <input readonly="readonly" type="text" size="5" class="number qty" value=1>
                                    <a class="shoppingAdd"></a>
                                </div>
                                <div class="xiangou"></div>
                            </div>
                        </td>
                        <td>
                            <div class="td6">
                                <p class="totalPrice">
                                    <em class="product_rowtotal">￥1,488.00</em>
                                </p>
                            </div>
                        </td>
                        <td>
                            <div class="td7">
                                <span>移入收藏夹</span> <span>删除</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="cart-notice">
                <img src="@/assets/cart/icon_notice.png" width="14" height="14">
                多选产品时我们可能会给您分开发货
            </div>
            <ul class="shoppingClear clearfloat">
                <li class="left">
                    <i class="checkbox select_all_item beSelected"></i> 
                    <span>全选</span>
                </li>
                <li class="left"><span>移入收藏</span></li> 
                <li class="left"><span>删除</span></li> 
                <li class="right"><button type="button" class="">去付款</button></li> 
                <li class="right totals">
                    <span>商品总金额：
                        <span id="total_price_ncl_tax" class="allPrice">￥1,061.00</span>
                    </span> 
                    <span>税：<span id="tax_total" class="allTax">￥74.14</span></span> 
                    <span>总计：<span id="total_price_icl_tax" class="allTotal">￥1,135.14</span></span>
                </li>
            </ul>
        </div>
        <div class="shoppingGuess w1100 m0a">
                <div class="guessLike">
                    <h3>猜你喜欢</h3>
                    <div class="col_item_5">
                        <a href="/catalog/product/view/id/652222" class="product_card newline">
                            <span class="image">
                                <span class="image_ab"><img src="https://img01.wconceptimg.cn/media/catalog/product/3/0/300551675_je96484.jpg!/fw/400" class="unveil fix-ratio-content" style="opacity: 1;"></span>
                            </span> 
                            <span class="brand">CLUT STUDIO</span> 
                            <span class="name">经典光泽感女士连帽丝绒围巾_黑色</span> 
                            <span class="formatted_final_price">
                                <span>￥466.00</span> 
                                <span class="product-original-price">￥516.00</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <Footer></Footer>
    </div>
</template>
<script>
//引入头部的header文件
import topHeader from '../components/topHeader.vue'
//引入网页底部内容
import Footer from '../components/footer.vue'


export default {
    data(){
        return {
        }
    },
    components:{
        topHeader,Footer
    },
}
</script>
<style scoped>
.header{
    height: 94px;
    position: relative;
}
.m0a{
    margin:0 auto;
}
.w1100{
    width: 1100px;
}
.area{
    width: 138px;
    padding-top: 24px;
}
.area img{
    width: 100%;
}
.clearfloat:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.rightarea{
    position: absolute;
    top: 0;
    right: 0;
    text-align: right;
}
.left{
    float: left;
}
.psa{
    position: absolute;
}
.orderStatus {
    width: 124px;
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #979797;
    margin-top: 30px;
    color: #9e9e9e;
    font-size: 12px;
    text-align: center;
    position: relative;
}
.orderStatus span {
    width: 20px;
    height: 20px;
    line-height: 20px;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    top: -10px;
    left: 50%;
    margin-left: -10px;
    border: 1px solid #9e9e9e;
    background-color: #fff;
    text-align: center;
}
.orderStatus:first-child {
    border-top: 1px solid #626161;
    color: #626161;
}
.orderStatus:first-child:before {
    content: '';
    position: absolute;
    left: 0;
    top: -1px;
    width: 52px;
    height: 1px;
    border-top: 1px solid #fff;
}
.orderStatus:first-child span {
    background-color: #626161;
    color: #fff;
}
.rightArea .orderStatus+.orderStatus+.orderStatus:after {
    content: '';
    position: absolute;
    right: 0;
    top: -1px;
    width: 52px;
    height: 1px;
    border-top: 1px solid #fff;
}
.pb20{
    padding-bottom: 20px;
}
.cartCount{
    font-size: 14px;
}
.cartCount, .cartCount a {
    color: #626161;
}
.shopCart .cartCount thead td {
    background-color: #f8f8f8;
    height: 38px;
    line-height: 38px;
    font-size: 16px;
    font-weight: bold;
    padding-left: 25px;
}
.shopCart .checkbox {
    position: relative;
    display: block;
    width: 12px;
    height: 12px;
    border: solid 1px #979797;
}
.shopCart .beSelected {
    background: url(../assets/cart/selected.png) no-repeat;
    background-size: 100% 100%;
    border: 0;
}
.cartCount thead i {
    margin-right: 38px;
    float: left;
    margin-top: 13px;
}
.cartCount tbody tr td {
    padding-top: 10px;
    vertical-align: top;
    border-bottom: 20px solid #fff;
}
.cartCount .k td {
    padding-top: 0;
    line-height: 68px;
    padding-left: 75px;
    position: relative;
}
.productBox.beSelected {
    background: rgba(253,81,88,0.05);
}
.cartCount tbody tr td {
    padding-top: 10px;
    vertical-align: top;
    border-bottom: 20px solid #fff;
}
.productBox td:first-child {
    width: 155px;
}
.productBox td:nth-child(2) {
    width: 212px;
}
.productBox td:nth-child(3) {
    width: 180px;
}
.productBox td:nth-child(4) {
    width: 178px;
}
.productBox td:nth-child(5) {
    width: 155px;
}
.productBox td:nth-child(6) {
    width: 150px;
}
.shopCart .td1, .shopCart .td2,.shopCart .td3,.shopCart .td4,.shopCart .td5,.shopCart .td6,.shopCart .td7{
    display: inline-block;
}
.shopCart .td1{
    width:100%;
}
.shopCart .td1 .selectGoods {
    left: 25px;
    top: 50%;
    margin-top: -6px;
}
.shopCart .td1 a {
    float: right;
}
.cartCount .td1 img {
    display: block;
    width: 81px;
    height: 108px;
    vertical-align: -54px;
}
.psr{
    position:relative;
}
.shopCart .td2 {
    padding: 0 25px;
}
.shopCart .td2 .product-name {
    line-height: 20px;
    height: 40px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.shopCart .td3 {
    position: relative;
}
.shopCart .td3 p {
    font-size: 12px;
    line-height: 22px;
}
.shopCart .td3 .modify {
    color: #9e9e9e;
    cursor: pointer;
}
.shopCart .td4 .unitPrice {
    font-size: 12px;
    line-height: 1.5;
    color: #000;
}
.shopNum .shoppingMinus, .shopNum .shoppingAdd {
    width: 22px;
    cursor: pointer;
}
.shopNum .shoppingMinus, .shopNum input, .shopNum .shoppingAdd {
    display: inline-block;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
    height: 22px;
    line-height: 22px;
    color: #626161;
    float: left;
}
.shopNum .shoppingMinus {
    background: url(../assets/cart/ofadd.png) no-repeat;
    background-size: 22px;
}
.shopNum input {
    width: 42px;
    border: 1px solid #9e9e9e;
    margin: 0 3px;
}
.shopNum .shoppingAdd {
    background: url(../assets/cart/add.png) no-repeat;
    background-size: 22px;
}
.xiangou {
    font-size: 12px;
    line-height: 16px;
    color: #626161;
    margin-top: 10px;
}
.cartCount .totalPrice {
    line-height: 24px;
}

.cartCount .totalPrice {
    font-size: 20px;
}
.cartCount .totalPrice .product_rowtotal {
    font-size: 16px;
    color: #000000;
    font-weight: bold;
}
.shopCart .td7 {
    text-align: left;
    font-size: 12px;
    line-height: 14px;
    color: #9e9e9e;
}
.shopCart .td7 span {
    display: block;
    padding-bottom: 10px;
    cursor: pointer;
}
.shopCart .warehouse-info {
    color: #fd5158;
    font-size: 12px;
    margin-left: 25px;
    font-weight: normal;
}
.cart-notice {
    border-top: 1px solid #888888;
    line-height: 60px;
    color: #2d2d2d;
    font-size: 14px;
}
.cart-notice img {
    margin: 0 16px 0 12px;
}
.shoppingClear {
    height: 70px;
    background-color: #f8f8f8;
    font-size: 16px;
}
.shoppingClear li {
    height: 32px;
    line-height: 32px;
    margin-top: 18px;
    color: #626161;
}
.shoppingClear li:first-child {
    margin-right: 30px;
    margin-left: 25px;
    color: #626161;
    font-weight: 600;
    font-size: 14px;
}
.shoppingClear li:first-child .checkbox {
    margin-right: 38px;
    margin-top: 11px;
    float: left;
}
.shoppingClear li:first-child+li {
    margin-right: 38px;
    font-size: 12px;
}
.shoppingClear li:first-child+li+li {
    margin-right: 30px;
    font-size: 12px;
}
.shoppingClear li.right {
    margin-top: 0;
}
.shoppingClear li.right button {
    display: block;
    width: 130px;
    height: 70px;
    line-height: 70px;
    background-color: #fd5158;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    border-radius: 0;
}
.shoppingClear li.totals {
    line-height: 70px;
    font-size: 12px;
}
.shoppingClear li.totals>span {
    margin-right: 30px;
}
.shoppingClear .allTotal {
    font-size: 20px;
    font-weight: bold;
}
.right{
    float:right;
}
.guessLike {
    margin-bottom: 20px;
}
.guessLike h3 {
    height: 80px;
    line-height: 80px;
    font-size: 22px;
    color: #626161;
    font-weight: normal;
    text-align: center;
}
/*猜你喜欢*/
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
.shoppingGuess .col_item_5 .product_card:first-child {
    margin-left: 0;
}

.shoppingGuess .col_item_5 .product_card {
    width: 204px;
    margin-left: 20px;
}
.col_item_5 .product_card.newline {
    margin-left: 0;
    clear: left;
}
.col_item_5 .product_card {
    width: 160px;
    margin-left: 22px;
    margin-bottom: 12px;
}
.product_card:first-child {
    margin-left: 0;
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
</style>


