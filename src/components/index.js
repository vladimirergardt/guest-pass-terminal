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
  'gpt-pass-is-ready' : './gpt-pass-is-ready/GptPassIsReady.vue',
  'gpt-pass-no-ready' : './gpt-pass-no-ready/GptPassNoReady.vue',
  'gpt-nav' : './gpt-nav/GptNav.vue',
  'gpt-keyboard' : './gpt-keyboard/GptKeyboard.vue',
  'gpt-view-window' : './gpt-view-window/GptViewWindow.vue',
  'highlight' : './src/wrappers/Highlight/highlight.js'
};

function install (Vue) {
  Object.keys(components).forEach((key) => {
    const path = components[key]
    Vue.component(key, () => import(`${path}`))
  })
}

export default install
