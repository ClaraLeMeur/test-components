<template>
  <button :class="btnClass" @click="$emit('click')">
    <slot v-if="customStyle==='icon'"></slot>
    <span>{{title}}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    customStyle: String,
  },
  computed: {
    btnClass: function () {
      this.btnStyle = ''
      switch (this.customStyle) {
        case 'simple':
          this.btnStyle = 'bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded';
          break;
        case 'pill':
          this.btnStyle = 'bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-full';
          break;
        case 'outline':
          this.btnStyle = 'bg-transparent text-primary-500 hover:bg-primary-700 hover:text-white font-semibold py-2 px-4 border border-primary-500 hover:border-transparent rounded';
          break;
        case 'disable':
          this.btnStyle = 'bg-primary-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed';
          break;
        case 'icon':
          this.btnStyle = 'bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded inline-flex items-center space-x-2';
          break;
        default:
          this.btnStyle = 'text-white font-bold py-2 px-4 rounded';
      }
      return this.btnStyle
    },
  },
}
</script>
