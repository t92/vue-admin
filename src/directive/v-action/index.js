import vAction from './vAction'

const install = function(Vue) {
  Vue.directive('btn-action', vAction)
}

if (window.Vue) {
  Vue.use(install); // eslint-disable-line
}

vAction.install = install
export default vAction
