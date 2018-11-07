<template>
    <div class="footer">
        <div class="inFooter">
            <router-link to="#"><img src="@/assets/footer/memberLevel.png" alt=""><span>会员等级</span></router-link>
            <router-link to="#"><img src="@/assets/footer/userManual.png" alt=""><span>用户手册</span></router-link>
            <router-link to="#"><img src="@/assets/footer/down_app.png" alt=""><span>下载APP</span></router-link>
            <router-link to="#"><img src="@/assets/footer/privacyItem.png" alt=""><span>隐私条款</span></router-link>
            <router-link to="#"><img src="@/assets/footer/normalProblem.png" alt=""><span>常见问题</span></router-link>
        </div>
        <p class="copy"><span>品牌合作联系方式：</span><router-link to="#">bd@wconcept.cn</router-link><br/><span>上海森画电子商务有限公司 版权所有</span><router-link to="#">沪ICP备 15045419号－1</router-link><br/><router-link to="#">网络经营证照</router-link>&nbsp;&nbsp;<router-link to="#"><img src="@/assets/footer/gongan.png" alt=""/><span>沪公网安备 31010402002635号</span></router-link></p>
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
.footer{
    width:100%;
    background-color: #fff;
    border-top: 1px solid #d9d9d9;
    color: #000;
    font-size:14px;
    clear: both;
}
a{
    font-size:14px;
}
.footer .inFooter{
    border-bottom: 1px solid #fff;
    padding-bottom: 40px;
    width:1100px;
    margin:0 auto;
}
.footer .inFooter a{
    display: block;
    width: 20%;
    margin-top: 54px;
    text-align: center;
    color: #2d2d2d;
    float:left;
}
.footer .inFooter a img{
    display: block;
    width: 51px;
    height: 51px;
    margin: 0 auto 43px;
}
.footer .inFooter a:first-child+a+a{
    margin-top: 35px;
}
.footer .inFooter a:first-child+a+a img{
    width: 88px;
    height: 88px;
    margin-bottom: 26px;
}
.footer .inFooter a span{
    color:#000;
    font-size: 14px;
    line-height: 20px;
}
.footer .inFooter:after{
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
}
.footer .copy{
    text-align: center;
    padding: 40px;
    word-break: break-all !important;
}
.footer .copy a{
    color: #000;
}
.footer .copy span,.footer .copy a{
    line-height:32px;
}
.footer .copy img{
    vertical-align: middle;
}
</style>