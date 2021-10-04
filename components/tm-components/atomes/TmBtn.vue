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

      switch (this.tmColor) {
        case 'green':
          this.btnStyle += ' bg-green-500 text-white';
          break;
        case 'yellow':
          this.btnStyle += ' bg-yellow-500 text-white';
          break;
        case 'red':
          this.btnStyle += ' bg-red-500 text-white';
          break;
        case 'gray':
          this.btnStyle += ' bg-gray-500 text-white';
          break;
        case 'black':
          this.btnStyle += ' bg-black text-white';
          break;
        default:
          this.btnStyle += ' ';
      }
      return this.btnStyle
    },
  },
}
</script>
