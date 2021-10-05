<template>
  <button :class="btnClass" @click="$emit('click')" :disabled="disabled">
    <slot v-if="customStyle==='icon'"></slot>
    <span>{{title}}</span>
  </button>
</template>

<script>
export default {
  props: {
    title: String,
    green: {
      type: Boolean,
      value: false,
    },
    yellow: {
      type: Boolean,
      value: false,
    },
    red: {
      type: Boolean,
      value: false,
    },
    customStyle: String,
    tmColor: String,
    disabled: {
      type: Boolean,
      value: false,
    }
  },
  computed: {
    btnClass: function () {
      this.btnStyle = ''
      switch (this.customStyle) {
        case 'btn':
          this.btnStyle = 'btn tm-bg-primary';
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

      switch (this.tmColor) {
        case 'green':
          this.btnStyle += ' tm-bg-green-500';
          break;
        case 'yellow':
          this.btnStyle += ' tm-bg-yellow-500';
          break;
        case 'red':
          this.btnStyle += ' tm-bg-red-500';
          break;
        case 'gray':
          this.btnStyle += ' tm-bg-gray-500';
          break;
        case 'black':
          this.btnStyle += ' tm-bg-black';
          break;
        default:
          this.btnStyle += ' ';
      }
      return this.btnStyle
    },
  },
}
</script>
