import rnswitch from './lib/rnswitch.vue'
import rnstars from './lib/rnstars.vue'
import rntoast from './lib/rnToast/rnToast.js'
const renkotools = {
  install (Vue, options) {
    Vue.component(rnstars.name, rnstars)
    Vue.component(rnswitch.name, rnswitch)
    Vue.component(rntoast.name, rntoast)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(renkotools)
}
export default renkotools
