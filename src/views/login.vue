<template>
    <div class="login">
        <topHeader></topHeader>
        <Logo></Logo>
        <div class="content">
            <div class="ad">
                <router-link to="#"><img src="@/assets/login/account_init.png" alt="" /></router-link>
            </div>
            <div class="content-form">
                <div class="form-title">会员登录</div>
                <form>
                    <div class="drop_list_wrap">
                        <div class="country" @click="isshow">中国大陆</div>
                        <ul v-show="qh" @click="hidden">
                            <li @click="zgdl">中国大陆</li>
                            <li@click="zgxg">中国香港</li>
                        </ul>
                    </div>
                    <div class="user_phone_wrap">
                        <span>{{sjh}}</span>
                        <input type="text" placeholder="请填写手机号码" v-model="phone"/>
                    </div>
                    <input class="upwd" type="password" placeholder="登录密码" v-model="upwd"/>
                    <input class="user-login" type="button" value="登录" @click="login"/>
                    <div class="other">
                        <input type="checkbox" />
                        <span class="remember-me">7天内免登录</span>
                        <span class="forget-password">
                            <router-link to ="#">忘记密码?</router-link>
                        </span>
                        <span class="sx"></span>
                        <span class="q-register">
                            <router-link to ="/register">快速注册</router-link>
                        </span>
                    </div>
                </form>
            </div>
        </div>

        <Footer></Footer>
    </div>
</template>
<script>
//引入头部的header文件
import topHeader from '../components/topHeader.vue'
//引入网页底部文件
import Footer from '../components/footer.vue'
//引入header-logo文件
import Logo from '../components/logo.vue'
    export default{
        data(){
            return {phone:'',upwd:'',qh:false,sjh:'+86'}
        },
        components:{
            Footer,topHeader,Logo
        },
        methods:{
            login(){
                console.log(11)
                var phone=this.phone,upwd=this.upwd;
                this.axios.post('http://localhost:3000/user/login',Qs.stringify({phone,upwd})).then(res=>{
                    console.log(res.data);
                    if(res.data.code==1);
                })
            },
            isshow(){
                this.qh=true;
            },
            hidden(){
                this.qh=false;
            },
            zgdl(){
                this.sjh='+86';
            },
            zgxg(){
                this.sjh='+852';
            }
        },
        mounted(){
            this.isshow();
            this.hidden();
        }
    }
</script>
<style>
.content{
    border-top: 1px solid #2d2d2d;
    padding: 60px 0;
    width: 1100px;
    margin: 0 auto;
    box-sizing:border-box;
}
.content .ad{
    float: left;
    width: 50%;
    border-right: solid 1px #d9d9d9;
}
.content .ad img{
    float: left;
    max-width: 100%;
}
.content .content-form{
    float: left;
    width: 290px;
    margin-left: 120px;
}
.content .content-form .form-title{
    font-weight:600;
    text-align: center;
    font-size: 18px;
    color: #2d2d2d;
    padding-bottom: 32px;
}
.content .content-form .user_phone_wrap{
    border: 1px solid #626161;
    margin-bottom: 20px;
}
.content .content-form .user_phone_wrap span{
    display: inline-block;
    width: 45px;
    text-align: right;
}
.content .content-form .user_phone_wrap input{
    width: 238px;
    border: none;
    margin: 0;
    padding-left: 2px;
    font-size: 14px;
    color: #2d2d2d;
    height: 45px;
    line-height: 45px;
}
.content .content-form .upwd{
    padding-left: 13px;
    font-size: 14px;
    color: #2d2d2d;
    width: 290px;
    height: 45px;
    line-height: 45px;
    border:1px solid #626161;
    margin-bottom: 26px;
    box-sizing:border-box;
}
.content .content-form .user-login{
    border: solid 1px #2d2d2d;
    text-align: center;
    background-color: #2d2d2d;
    font-size: 16px;
    color: #ffffff;
    width: 290px;
    height: 45px;
    line-height: 45px;
    margin-bottom: 26px;
    cursor:pointer;
}
.content .content-form .other input{
    float: left;
    vertical-align: middle;
    margin-right: 15px;
    margin-top: 3px;
}
.content .content-form .other .remember-me{
    float: left;
    font-size: 14px;
    color: #9e9e9e;
    margin-right: 38px;
}
.content .content-form .other span{
    float: left;
    font-size: 14px;
    color: #9e9e9e;
}
.content .content-form .other span a{
    float: left;
    font-size: 14px;
    color: #9e9e9e;
}
.content .content-form .other .sx{
    border-right: 1px solid #9e9e9e;
    display: inline-block;
    height: 12px;
    margin: 4px 8px 0;
}
.content .content-form .other:after{
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
}




.content:after{
    display: block;
    content: "clear";
    height: 0;
    clear: both;
    overflow: hidden;
    visibility: hidden;
}
.content .content-form form .drop_list_wrap{
    position: relative;
}
.content .content-form form .drop_list_wrap .country{
    width: 290px;
    height: 45px;
    line-height: 45px;
    border: solid 1px #626161;
    margin-bottom: 26px;
    cursor: text;
    padding-left: 15px;
    background: url(../assets/login/icon-pc-sort-price-down-on.png) no-repeat 260px center;
    box-sizing: border-box;
}
.content .content-form form .drop_list_wrap ul{
    border: 1px solid #d9d9d9;
    background-color: #fff;
    position: absolute;
    top: 45px;
    left: 0;
    z-index: 99;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
}
.content .content-form form .drop_list_wrap ul li{
    height: 32px;
    line-height: 32px;
    color: #9e9e9e;
    padding-left: 10px;
    cursor: pointer;
}
.content .content-form form .drop_list_wrap ul li:hover{
    background-color: #ff4f53;
    color: #fff;
}
</style>

