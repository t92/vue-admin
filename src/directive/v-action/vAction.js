
export default {
  inserted(el, binding, vnode) {
    const timeout = binding.arg || 2000
    function debounce() {
      el.classList.add('is-loading')
      const elI = document.createElement('i')
      elI.classList.add('el-icon-loading')
      el.insertBefore(elI, el.childNodes[0])

      setTimeout(() => {
        el.classList.remove('is-loading')
        el.removeChild(elI)
      }, timeout)
    }

    el._debounce_ = debounce

    el.addEventListener('click', debounce)
  },
  unbind(el) {
    el.removeEventListener('click', el._debounce_)
    delete el._debounce_
  }
}
