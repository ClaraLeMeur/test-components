<template>
  <div>
    My Input:
    <input class="px-1" v-model="inputVal" :placeholder="placeholder" :disabled="disabled">
  </div>
</template>

<script>
export default {
  props: {
    default: {type: String},
    placeholder: {type: String},
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputVal : null
    }
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val)
    }
  },
  mounted() {
    if (this.default){
      this.inputVal = this.default
    }
  },
}
</script>
