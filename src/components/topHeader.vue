<template>
    <div class="topHeader">
        <div class="top-area">
            <div class="left">
                <span>
                    <router-link :to='isreg' ref='reg'>注册</router-link>
                    <router-link :to='islogin' ref='login'>登录</router-link>
                </span>
                <router-link to="">下载APP
                    <img src="@/assets/header/down_app.png" class="psa">
                </router-link>
            </div>
            <div class="right">
                <router-link to="">购物车<span>0</span></router-link>
                <router-link to="">收藏</router-link>
                <div class="placeholder">
                    <ul>
                        <li class="icon-my"><router-link to="">个人中心</router-link></li>
                        <li><router-link to="">购物车</router-link></li>
                        <li><router-link to="">收藏夹</router-link></li>
                        <li><router-link to="">W积分</router-link></li>
                        <li><router-link to="">优惠券</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                isreg:'',
                islogin:'',
            }
        },
        created(){
            //console.log(sessionStorage.uid)
            if(sessionStorage.uid == undefined){
                console.log(this.$refs.reg.innerText);
                //=`欢迎${sessionStorage.uid}`
            }else{
                this.isreg="/register"
                this.islogin="/login"
            }
        }
    }
</script>
<style scoped>
.topHeader{
    border-bottom: 1px solid #d9d9d9;
}
.top-area:after {
    content: "";
    display: table;
    clear: both;
}
.top-area{
    width:1100px;
    margin:0 auto;
    line-height:33px;
}
.top-area a{
    font-size: 12px;
    color: #9e9e9e;
}
.top-area .left{
    float:left;
}
.top-area .left a{
    padding-right: 22px;
}
.top-area .left a:last-child{
    position:relative;
}
.top-area .left a:last-child img{
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
.top-area a,.top-area span{
    display:inline-block;
    line-height:34px;
}
.top-area .left a:last-child:hover img{
    display:block;
}
.top-area .right{
    float:right;
    display:flex;
    box-sizing: border-box;
}
.top-area .right>a{
    margin-left: 42px;
    padding-left: 22px;
}
.top-area .right>a:first-child{
    background:url('../assets/header/cartheader.png') no-repeat left center;
    background-size: 15px 15px;
}
.top-area .right>a:nth-child(2){
    background: url('../assets/header/likeheader.png') no-repeat left center;
    background-size: 15px 15px;
}
.top-area .right>a>span{
    font-weight: 500;
    color: #fd5158;
    }
.top-area .right .placeholder{
    width: 107px;
    margin-left: 22px;
    float: left;
    height: 33px;
    position: relative;
    margin-right: -10px;
}
.top-area .right .placeholder ul{
    position: absolute;
    right: 0;
    border: 1px solid transparent;
    padding-left: 11px;
    padding-right: 3px;
}
.top-area .right .placeholder ul:hover{
    z-index: 99;
    background-color: #fff;
    border: 1px solid #979797;
}
.top-area .right .placeholder ul li{
    display: none;
    float: left;
    clear: both;
    padding-left: 25px;
}
.top-area .right .placeholder ul .icon-my{
    background: url('../assets/header/myheader.png') no-repeat left center;
    background-size: 15px 15px;
    display: block;
    background-position:0 9px;
}
.top-area .right .placeholder ul:hover li{
    display:block;
}
.top-area .right .placeholder ul li a{
    background: url('../assets/header/pCenter_qian.png') no-repeat left center;
    background-size: 7px 4px;
    background-position: 54px 15px;
    padding-right: 18px;
}   
a:hover {
    color: #2d2d2d;
}
</style>