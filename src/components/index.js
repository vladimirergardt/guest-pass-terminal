/**
 * Created by Smirnov.Denis on 03.11.2017.
 *
 * Registration of global components
 */

const components = {
  'pa-button': './pa-button/PaButton.vue'
};

function install (Vue) {
  Object.keys(components).forEach((key) => {
    const path = components[key]
    Vue.component(key, () => import(`${path}`))
  })
}

export default install
