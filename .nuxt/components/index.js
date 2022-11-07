export { default as CommentForm } from '../..\\components\\CommentForm.vue'
export { default as FooterView } from '../..\\components\\FooterView.vue'
export { default as HeaderNav } from '../..\\components\\HeaderNav.vue'
export { default as LoadingSpiner } from '../..\\components\\LoadingSpiner.vue'
export { default as MainSlide } from '../..\\components\\MainSlide.vue'
export { default as WorkItem } from '../..\\components\\WorkItem.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
