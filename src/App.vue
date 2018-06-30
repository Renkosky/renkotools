<template>
  <div id="app">
    <rnSwitch></rnSwitch>
    <rnStars :num='3'></rnStars>
    <button @click='toast'>点击1</button>
  </div>
</template>

<script>
import rnToast from './lib/rnToast/rnToast.js'
export default {
  name: 'app',
  methods: {
    toast () {
      rnToast('Toast test')
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
}
a {
  color: darkgrey;
}
a:hover {
  color: rgb(104, 199, 167);
}
</style>
