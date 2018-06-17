<template>
  <div id="app">
    <rnswitch></rnswitch>
    <rnstars :num='3'></rnstars>
  </div>
</template>

<script>
export default {
  name: 'app'
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
