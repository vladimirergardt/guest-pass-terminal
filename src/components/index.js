/**
 * Created by Smirnov.Denis on 03.11.2017.
 *
 * Registration of global components
 */

const components = {
  'pa-button': './pa-button/PaButton.vue',
  'pa-modal': './pa-modal/PaModal.vue',
  'pa-icon': './pa-icon/PaIcon.vue',
  'gpt-input-sms-code': './gpt-input-sms-code/GptInputSmsCode.vue',
  'gpt-keyboard-sms-code': './gpt-keyboard-sms-code/GptKeyboardSmsCode.vue',
};

function install (Vue) {
  Object.keys(components).forEach((key) => {
    const path = components[key]
    Vue.component(key, () => import(`${path}`))
  })
}

export default install
