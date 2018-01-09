<template>
 <div class="menu">
    
    <div class="title"></div>
    <div class="content">
      <div class="sections">
          <router-link  to="/slider" class="sections-item"><li>slider</li></router-link>
          <router-link  to="/switch" class="sections-item" >swith</router-link>
          <router-link  to="/stars" class="sections-item">stars</router-link>
      </div>
      <div class="demo">
        <router-view></router-view>
      </div>
    </div>
    
 </div>
</template>
<script>
export default {
  name: 'rn-menu'
}
</script>
<style scoped>
.menu{
    margin:0 auto;
    margin-top: 10%;
    width: 1200px;
    height: 600px; 
    box-shadow: 1px 1px 15px #b4b4b4;
}
.title{
    width: 100%;
    height: 7%;
    background-color: rgb(104, 199, 167);
}
.content{
    display: flex;
    height: 93%;
}
.demo{
    margin: 60px;
}
.sections{
    display: flex;
    flex-direction: column;
    width: 210px; 
    height: 100%;
    border-right: 1px solid #b4b4b498
}
.sections-item{
    flex: 0 1 auto;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    border-right:4px solid rgba(83, 214, 127, 0)
}
.router-link-active{
    background-color: rgba(145, 229, 201, 0.5);
    color:rgb(0, 151, 88);
    border-right:4px solid rgb(83, 214, 127)
}
li{
    list-style: none;
}
</style>
