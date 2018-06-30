<template>
 <div class="star">
    <i v-for="(item,index) in num" :key="index" class="fa fa-star stars-size" 
                                   :class="{selected:index == nowIndex}" 
                                   @click="select(index),getnums()"
                                   aria-hidden="true"></i>
 </div>
</template>
<script>
export default {
  name: 'rnStars',
  data () {
    return {
      nowIndex: -1,
      stars: 0
    }
  },
  props: {
    num: {
      type: Number,
      default: 5
    }
  },
  methods: {
    select (index) {
      this.nowIndex = index
    },
    getnums () {
      if (this.nowIndex >= 0) {
        this.stars = this.num - this.nowIndex
        return this.stars
      }
    }
  }
}
</script>
<style scoped>
.star{
  direction: rtl;
}
.stars-size{
  font-size: 20px;
  padding-right: 2px;
  color: rgba(206, 206, 206, 0.363)
}
.star i:hover,
.star .selected{
  color:rgb(255, 217, 49)
}
.star i:hover ~i,
.star .selected ~i{
  color:rgb(255, 217, 49)
}


</style>
