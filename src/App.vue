<template>
  <div id="app">
    <!-- <Header></Header> -->
    <router-view/>
    <!-- <Footer></Footer> -->
    <toTop></toTop>
  </div>
</template>

<style>
    body,p,dl,dd,h3{
      padding:0;
      margin:0;
    }
    #app{
    background-color: #fff;
    font-family: PingFangSC, sans-serif, Microsoft Yahei;
    font-size: 14px;
    color: #626161;
    }
    a,a:link{
      color: #2d2d2d;
      text-decoration:none;
      cursor: pointer;
    }
    ul,li{
      margin:0;
      padding:0;
      list-style:none;
    }
    img,textarea,input,button{
      border:none;
      outline:none;
    }
    em {
    font-style: normal;
  }
  
</style>
<script>
//引入网页底部内容
//import Footer from './components/footer.vue'
//引入网页底部内容
//import Header from './components/header.vue'
import toTop from './components/Rtop.vue'
//import topHeader from './components/topHeader.vue'

export default {
  data(){
    return {
      
    }
  },created(){
    
  },
  components:{
    toTop,//Header,Footer,topHeader
  },
  methods:{
    /*islogin(){
        this.axios.get('http://localhost:3000/products/islogin').then(res=>{
          console.log(res);
        })
    }*/
  },
  mounted() {
    //this.islogin();
  },
}
</script>

