/**
 * Created by Smirnov.Denis on 08.11.2017.
 *
 */

export default {
  name: 'PaButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    },
    stretch: {
      type: Boolean,
      default: false
    },
    lineWrap: {
      type: Boolean,
      default: false
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {},
  methods: {
    handleClick (evt) {
      if (!this.disabled && !this.loading) this.$emit('click', evt)
    }
  },
  created () {
  }
}
