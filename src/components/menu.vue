<template>
 <div class="menu">
    
    <div class="title"></div>
    <div class="content">
      <div class="sections">
          <router-link class="sections-item" to="/slider">slider</router-link>
          <router-link class="sections-item" to="/switch">swith</router-link>
          <router-link class="sections-item">...</router-link>
      </div>
      <router-view></router-view>
    </div>
    
 </div>
</template>
<script>
export default {
  name: 'menu'
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
.sections{
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    width: 200px; 
    height: 100%;
    border-right: 1px solid #b4b4b498
}
.sections-item{
    flex: 0 1 auto;
    text-align: center;
    padding: 15px 15px 15px 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #b4b4b4;
    font-size: 20px;
}
</style>
