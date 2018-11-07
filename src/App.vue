<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view/>
    <!-- <Footer></Footer> -->
  </div>
</template>

<style>
    body,p{
      padding:0;
      margin:0;
    }
    #app{
    background-color: #fff;
    font-family: PingFangSC, sans-serif, Microsoft Yahei;
    font-size: 14px;
    color: #626161;
    }
    a{
      text-decoration:none;
    }
    ul,li{
      margin:0;
      padding:0;
      list-style:none;
    }
    input{
      outline:none;
      border: none;
    }
    img{
      border:none;
      outline:none;
    }
</style>
<script>
//引入网页底部内容
//import Footer from '../components/footer.vue'
//引入网页底部内容
//import Header from '../components/header.vue'


export default {
  data(){
    return {}
  },
  components:{
    //Header,Footer
  }
}
</script>

