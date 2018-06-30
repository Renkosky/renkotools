import rnSwitch from './lib/rnSwitch.vue'
import rnStars from './lib/rnStars.vue'
import rntoast from './lib/rnToast/rnToast.js'
const renkotools = {
  install (Vue, options) {
    Vue.component(rnStars.name, rnStars)
    Vue.component(rnSwitch.name, rnSwitch)
    Vue.component(rntoast.name, rntoast)
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(renkotools)
}
export default renkotools
