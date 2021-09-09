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
        case 'btn':
          this.btnStyle = 'btn btn-primary';
          break;
        case 'pill':
          this.btnStyle = 'btn btn-primary btn-pill';
          break;
        case 'outline':
          this.btnStyle = 'btn btn-primary btn-outline';
          break;
        case 'disable':
          this.btnStyle = 'btn btn-primary btn-disable';
          break;
        case 'icon':
          this.btnStyle = 'btn btn-primary btn-icon space-x-2';
          break;
        default:
          this.btnStyle = 'btn';
      }
      return this.btnStyle
    },
  },
}
</script>
