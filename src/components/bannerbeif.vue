<template>
    <div class="banner">
        <div class="banner-img">
            <router-link to="#" v-for="item in list" :key="item.nid"><img :src="item.pic" alt=""/></router-link>
        </div>
        <div class="control">
            <span class="prev"></span>
            <span class="next"></span>
        </div>
        <div class="count">
            <span v-for="item in list"></span>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {list:[]}
        },
        mounted() {
            this.axios.get('http://localhost:3000/products//banner').then(res=>{
                this.list=res.data;
            })
        },
        methods:{
            
        }
    }
</script>

<style scoped>
.banner-img{
    width:100%;
    height:500px;
    position:relative;
}
.banner-img a{
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
}
.banner-img a img{
    width:100%;
    height:100%;
    *opacity:0;
}
.control span{
    position:absolute;
    width: 33px;
    height: 66px;
    cursor: pointer;
}
.control .prev{
    top: 248px;
    left: 15px;
    background:url('../assets/prev.png') no-repeat;
}
.control .next{
    top: 248px;
    right: 15px;
    background:url('../assets/next.png') no-repeat;
}
.count{
    position: relative;
    height: 30px;
    line-height: 30px;
    margin-top: -30px;
    text-align: center;
}
.count span{
    display: inline-block;
    margin: 0 8px;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    border: 1px solid #fff;
}
</style>