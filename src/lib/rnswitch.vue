<template>
  <span id="rnSwitch" @click="change" :style="{'backgroundColor':barcolor}">
    <span :class="{cicle:true, 'on':defaultChecked}" :style="{'backgroundColor':btnColor}"></span>
  </span>
</template>

<script>
export default {
  name: 'rnSwitch',
  data () {
    return {
      flag: true,
      barcolor: this.bgColor
    }
  },
  props: {
    btnColor: {
      type: String,
      default: 'white'
    },
    bgColor: {
      type: String,
      default: 'grey'
    },
    defaultChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change () {
      this.flag = !this.flag
      if (this.flag) {
        document.querySelector('#rnSwitch>.cicle').className = 'cicle off'
        this.barcolor = 'grey'
      } else {
        document.querySelector('#rnSwitch>.cicle').className = 'cicle on'
        this.barcolor = 'rgb(24, 24, 24)'
      }
    }
  }
}
</script>

<style scoped>
#rnSwitch {
  display: inline-block;
  width: 44px;
  height: 22px;
  position: relative;
  bottom: -5px;
  border-radius: 15px;
}
.cicle {
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  transition: transform 0.3s;
  transform: translate(3px, 3px);
}
.on {
  transform: translate(25px, 3px);
}
.off {
  transform: translate(3px, 3px);
}
</style>
