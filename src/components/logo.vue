<template>
    <div class="header">
        <div class="leftArea">
            <router-link to="#"><img src="@/assets/header/homelogo.png" alt="" /></router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    }
}
</script>
<style scoped>
.header{
    width: 1100px;
    height: 94px;
    margin: 0 auto;
    position: relative;
}
.header .leftArea{
    width: 138px;
    margin: 0 auto;
    padding-top: 30px;
    float: left;
}
.header .leftArea a{
    float: none;
    padding: 0;
    position: relative;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    color: #626161;
}
.header .leftArea a img{
    width:100%;
}
</style>
