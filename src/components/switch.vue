<template>
  <span id="Sswitch" @click="change" :style="{'backgroundColor':barcolor}">
    <span class="cicle" :style="{'backgroundColor':inColor}"></span>
  </span>
</template>

<script>
export default {
  name: 'rn-Switch',
  data () {
    return {
      flag: true,
      barcolor: this.outColor
    }
  },
  props: {
    inColor: {
      type: String,
      default: 'white'
    },
    outColor: {
      type: String,
      default: 'grey'
    }
  },
  methods: {
    change () {
      this.flag = !this.flag
      if (this.flag) {
        document.querySelector('#Sswitch>.cicle').className = 'cicle off'
        this.barcolor = 'grey'
      } else {
        document.querySelector('#Sswitch>.cicle').className = 'cicle on'
        this.barcolor = 'rgb(24, 24, 24)'
      }
    }
  }
}
</script>

<style scoped>
#Sswitch{
  display: inline-block;
  width: 44px;
  height: 22px;
  position: relative;
  bottom: -5px;
  border-radius: 15px;
}
.cicle{
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  transition: transform .3s;
  transform: translate(3px, 3px);
}
.on {
  transform: translate(25px, 3px);
}
.off {
  transform: translate(3px, 3px);
}
</style>
