<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition class="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition class="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(prevIndex)">&lt;</li>   
      <li v-for="(item, index) in slides"  @click="goto(index)" :key="index">
        <div class="slide-dots-icon" :class="{on: index === nowIndex}">
        </div>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    inv: {
      type: Number,
      default: 6000
    }
  },
  data () {
    return {
      slides: [
        {
          src: require('../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ],
      nowIndex: 0,
      isShow: true
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      //  this.$emit('onchange',index)
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  mounted () {
    this.runInv()
  }
}
</script>
<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}

.slide-trans-enter {
  transform: translateX(900px);
}

.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-900px);
}

.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  min-width: 600px;
  height: 200px;
  overflow: hidden;
}

.slide-img {
  width: 100%;
}

.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}

.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 50%;
  left: 50%;
  min-width: 500px;
}

.slide-pages li {
  display: inline-block;
  float: left;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}
.slide-dots-icon{
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: rgba(0, 2, 2,0.2)
}

.slide-pages .on {
  background-color: red
}
</style>
