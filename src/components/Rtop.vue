<template>
    <div class="go-top" v-show="ScrollTop">
        <div class="t-top">
            <router-link to="#">
                <div>购物车</div>
                <span>0</span>
            </router-link>
        </div>
        <div class="tj">
            <a href="#" @click.stop.prevent="goTop">
                <i>top</i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ScrollTop:false,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll () {
        let toTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //console.log(toTop)
        if(toTop>='1000'){
            this.ScrollTop=true;
        }else{
            this.ScrollTop=false;
        }
        },
        goTop(){
            let back = setInterval(() => {
            if(document.body.scrollTop||document.documentElement.scrollTop){
                document.body.scrollTop-=100;
                document.documentElement.scrollTop-=100;
            }else {
                clearInterval(back)
                }
            },7);
        }
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll)
    },
}
</script>
<style scoped>
.t-top {
    position: fixed;
    top: 200px;
    left: 50%;
    z-index: 1;
    margin-left: 575px;
    width: 45px;
    height: 125px;
    *display: none;
    background-color: #fff;
}
.t-top a{
    display: block;
    width: 45px;
    height: 85px;
    color: #282828;
    padding-top: 35px;
    background: url('../assets/header/icn-shopping-car.png') no-repeat center 10px;
    background-size: 18px 17px;
    text-align: center;
    border: 1px solid #282828;
}
.t-top a div {
    width: 14px;
    word-wrap: break-word;
    word-break: normal;
    margin: 0 auto 6px;
    text-align: center;
    line-height: 18px;
}
.t-top a span {
    color: #fd5158;
    display: inline-block;
    width: 33px;
    line-height: 18px;
    padding-top: 3px;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
    border-top: 1px solid #d9d9d9;
}


.tj a{
    width: 45px;
    height: 32px;
    background: #fff url('../assets/header/back-to-top.png') no-repeat;
    background-size: 45px 32px;
    position: fixed;
    left: 50%;
    margin-left: 575px;
    top: 330px;
    cursor: pointer;
}
.tj a i{
    opacity: 0;
}
</style>



