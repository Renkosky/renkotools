import rnswitch from './lib/rnswitch.vue'
import rnstars from './lib/rnstars.vue'
const renkotools = {
  install (Vue, options) {
    Vue.component(rnstars.name, rnstars)
    Vue.component(rnswitch.name, rnswitch)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(renkotools)
}
export default renkotools
