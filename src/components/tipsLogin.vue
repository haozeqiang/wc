<template>
    <div class="tipsLogin">
        <div class="alert_login add_to_ShoppingArea">
            <img src="@/assets/detail/icon_error.png"/>
            <p>请先登录</p>
            <div class="add_to_ShoppingArea_btn">
                <a class="continueShopping">取消</a>
                <router-link to="login" class="go_to_billingPage">去登录</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
<style scoped>
.add_to_ShoppingArea{
    width: 360px;
    height: 260px;
    background-color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    margin: -130px 0 0 -180px;
    z-index: 1000;
}
.alert_login img{
    width: 70px;
    height: 70px;
}
.add_to_ShoppingArea img{
    display: block;
    width: 73px;
    height: 61px;
    margin: 40px auto 30px;
}
.add_to_ShoppingArea p{
    text-align: center;
    font-size: 18px;
    color: #626161;
}
.add_to_ShoppingArea_btn{
    margin-top: 30px;
    text-align: center;
}
.add_to_ShoppingArea_btn .continueShopping{
    border: 1px solid #626161;
    color: #626161;
    margin-right: 20px;
}
.add_to_ShoppingArea_btn a{
    display: inline-block;
    width: 110px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    cursor: pointer;
}
.add_to_ShoppingArea_btn .go_to_billingPage{
    background-color: #626161;
    color: #fff;
}
</style>