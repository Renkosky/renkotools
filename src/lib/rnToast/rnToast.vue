<template>
  <transition name='fade'>
    <div v-show='visible' :class='position' class='toast'>
      <span>{{message}}</span>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: '',
      position: ''
    }
  }
}
</script>


<style>
.toast {
  position: fixed;
  left: 50%;
  transform: scale(1);
  word-wrap: break-word;
  padding: 10px 15px;
  text-align: center;
  z-index: 999;
  font-size: 14px;
  max-width: 80%;
  color: #666;
  border-radius: 5px;
  box-shadow: 1px 1px 10px #999;
  overflow: hidden;
}
.toast.middle {
  top: 50%;
}
.toast.top {
  top: 10%;
}
.toast.bottom {
  top: 90%;
}
.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
}
.fade-enter,
.fade-leave-active {
  transform: scale(0);
}
</style>

