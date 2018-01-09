import Vue from 'vue'
import Router from 'vue-router'
import slider from '@/components/slider'
import menu from '@/components/menu'
import Switch from '@/components/switch'
import stars from '@/components/stars.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu,
      children: [
        {
          path: '/slider',
          name: 'slider',
          component: slider
        },
        {
          path: '/Switch',
          name: 'Switch',
          component: Switch
        },
        {
          path: '/stars',
          name: 'stars',
          component: stars
        }

      ]
    }
  ]
})
