<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in list" :key="item.nid">
        <router-link to="#"><img :src="item.pic" alt="" /></router-link>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
    export default{
        data(){
            return {list:[]}
        },
        mounted() {
            this.axios.get('http://localhost:3000/products/banner').then(res=>{
                console.log(res.data)
                this.list=res.data;
            })
        },
    }
</script>
<style>
  .el-carousel__container{
    height: 500px;
  }

  .el-carousel{
    width:100%;
  }
  .el-carousel__item a {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>