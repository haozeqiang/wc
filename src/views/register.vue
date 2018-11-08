<template>
    <div class="register">
        <topHeader></topHeader>
        <Logo></Logo>
        <div class="content">
            <div class="ad">
                <router-link to="#"><img src="@/assets/login/account_init.png" alt="" /></router-link>
            </div>
            <div class="content-form">
                <div class="form-title">注册会员</div>
                <form>
                    <div class="drop_list_wrap">
                        <div class="country" @click="isshow">中国大陆</div>
                        <ul v-show="qh" @click="hidden">
                            <li @click="changeCH">中国大陆</li>
                            <li @click="changeHK">中国香港</li>
                        </ul>
                    </div>
                    <div class="user_phone_wrap">
                        <span>{{phoneCity}}</span>
                        <input type="text" placeholder="请填写手机号码" v-model="phone"/>
                    </div>
                    <div class="short_message">
                        <input class="input_all input_text" type="text" placeholder="请填写图形验证码" />
                        <router-link to="#"><img src="https://www.wconcept.cn/customer/validate/initimg/?time=1541172889754" alt="" /></router-link>
                    </div>
                    <div class="short_message">
                        <input class="input_all input_text" type="text" placeholder="短信验证码" />
                        <!-- <input class="input_all btn_ver" type="text" placeholder="获取短信验证码" /> -->
                        <router-link class="input_all btn_ver ladda-button" to="#"><span class="count-down"></span>获取短信验证码</router-link>
                    </div>

                    <input class="upwd" type="password" placeholder="设置密码" v-model="upwd"/>
                    <input class="align-upwd" type="password" placeholder="确认密码" v-model="upwdAgain"/>
                    <input class="user-login" type="button" value="立即注册" @click="register"/>
                    <div class="other">
                        <input type="checkbox" v-model="isChecked" @click="checked"/>
                        <span class="remember-me">接受Wconcept隐私条款</span>
                        <span class="forget-password">
                            <router-link to ="/login">去登陆</router-link>
                        </span>
                    </div>
                </form>
            </div>
        </div>

        <div class="errMsg" v-show="alert">
            <div class="alert-err">
                <div class="position">
                    <i class="close" @click="closeErr">
                        <img src="@/assets/login/closeItems.png" alt=""/>
                    </i>
                    <i class="icon_error">
                        <img src="@/assets/login/icon_error.png"/>
                    </i>
                    <p class="error_message">{{errMessage}}</p>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
//引入头部的header文件
import topHeader from '../components/topHeader.vue'
//引入header-logo文件
import Logo from '../components/logo.vue'
//引入网页底部文件
import Footer from '../components/footer.vue'

    export default {
        data(){
            return {
                qh:false,
                isChecked:false,
                alert:false,
                errMessage:'',
                phoneCity:'+86',
                phone:'',
                upwd:'',
                upwdAgain:'',
            }
        },
        components:{
            topHeader,Logo,Footer
        },
        methods:{
            isshow(){
                this.qh=true;
            },
            hidden(){
                this.qh=false;
            },
            register(){
                
            },
            closeErr(){
                this.alert=false;
            },
            checked(){
                isChecked:true;
            },
            changeCH(){
                this.phoneCity='+86'
            },
            changeHK(){
                this.phoneCity='+852'
            },
            register(){
                alert('aaaaa');
                let phone=this.phone,upwd=this.upwd;
                if(this.isChecked===false){
                    this.errMessage='请接受服务条款';
                    this.alert=true;
                }else if(this.phone===''){
                    this.errMessage='手机号未填写';
                    this.alert=true;
                }else if(!/^1[3456789]\d{9}$/ig.test(this.phone)&&!/^(5|6|8|9)\\d{7}$/ig.test(this.phone)){
                    this.errMessage='您输入的手机号码有误';
                    this.alert=true;
                }else if(/^1[3456789]\d{9}$/ig.test(this.phone)||/^(5|6|8|9)\\d{7}$/ig.test(this.phone)){
                        this.errMessage='';
                        this.alert=false;
                        if(this.upwd===''){
                        this.errMessage='密码未填写';
                        this.alert=true;
                    }else if(this.upwd!==this.upwdAgain){
                        this.errMessage='密码与确认密码不一致，请重新输入';
                        this.alert=true;
                    }else{
                    this.axios.post('http://localhost:3000/user/checkPhone',Qs.stringify({phone})).then(res=>{
                            console.log(res.data);
                            if(res.data.code!==1){
                                this.errMessage='该手机号已注册';
                                this.alert=true;
                            }else{
                                this.axios.post('http://localhost:3000/user/register',Qs.stringify({phone,upwd})).then(res=>{
                                console.log(res.data);
                                if(res.data.code===1){
                                    alert(666666666)
                                }else{
                                    this.errMessage=res.data.msg;
                                    this.alert=true;
                            }
                        })
                            }
                        })
                    }
                }
            },
        },
        mounted(){
            this.isshow();
            this.hidden();
        }
    }
</script>

<style scoped>
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
.content .content-form .short_message{
    display: inline-block;
    width: 100%;
}
.content .content-form .short_message a img{
    margin: 5px 0 0 10px;
}
.content .content-form .short_message .input_text{
    float: left;
    width: 175px;
}
.content .content-form .input_text{
    padding-left: 13px;
    font-size: 14px;
    color: #2d2d2d;
}
.content .content-form .input_all{
    width: 290px;
    height: 45px;
    line-height: 45px;
    border: solid 1px #626161;
    margin-bottom: 26px;
    box-sizing: border-box;
}
.content .content-form .btn_ver{
    float: right;
    width: 106px;
    font-size: 12px;
    color: #ffffff;
    border: 0;
    text-align: center;
    background-color: #2d2d2d;
    line-height: 45px;
}




.content .content-form .upwd,.align-upwd{
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
.content .content-form .other span:last-child{
    float: right;
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
.alert-err{
    position: absolute;
    top: 40%;
    left: 50%;
}
.position {
    position: relative;
    margin-left: -50%;
    margin-right: 50%;
    background-color: #fff;
    padding: 10px 40px;
    border: 1px solid #ddd;
}
.close {
    position: absolute;
    right: 10px;
    display: block;
    width: 16px;
    height: 16px;
}
.close img {
    width: 16px;
    height: 16px;
}
.icon_error {
    display: block;
    width: 50px;
    height: 50px;
    margin: 30px auto 25px;
}
.icon_error img {
    width: 50px;
    height: 50px;
}
.error_message {
    font-size: 16px;
    color: #626161;
    text-align: center;
    margin-bottom: 33px;
}
.errMsg{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    /*filter: progid:DXImageTransform.Microsoft.gradient(enabled=true,startColorstr=#33000000,endColorstr=#33000000);*/
    z-index: 1050;
}
</style>

