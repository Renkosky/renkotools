<template>
  <div id="app">
    <rnswitch></rnswitch>
    <rnstars :num='3'></rnstars>
    <button @click='a'>点击1</button>
  </div>
</template>

<script>
import rnToast from './lib/rnToast/rnToast.js'
export default {
  name: 'app',
  methods: {
    a () {
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
