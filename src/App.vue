<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import menu from './components/menu'
export default {
  name: 'app',
  components: {
    menu
  }
}
</script>

<style>
*{
  margin: 0px;
  padding:0px;
  text-decoration: none;
}
a{
  color: darkgrey;
}
a:hover {
  color: rgb(104, 199, 167);
}
</style>
