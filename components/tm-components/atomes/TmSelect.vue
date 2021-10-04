<template>
  <div>
    My Select:
    <select v-if="value" v-model="selectVal" :disabled="disabled" class="px-1 rounded">
      <option v-if="allowNull" class="italic" v-html="placeholder" value="" key="placeholder" ></option>
      <option v-for="(item, idxItem) in arrayList" v-html="item" :value="item[value]" :key="idxItem"></option>
    </select>

    <select v-else v-model="selectVal" :disabled="disabled" class="px-1 rounded">
      <option v-if="allowNull" class="italic" v-html="placeholder" value="" key="placeholder" ></option>
      <option v-for="(item, idxItem) in arrayList" v-html="item[1]" :value="item[0]" :key="idxItem"></option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    default: {
      type: String,
      default: null,
    },
    display: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    list: null,
    placeholder: {type: String},
    disabled: {
      type: Boolean,
      default: false,
    },
    allowNull: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selectVal : null,
      number : 3,
    }
  },
  watch: {
    selectVal(val) {
      this.$emit('select', val)
    }
  },
  computed: {
    arrayList() {
      if(this.list.isArray) {
        return this.list
      }
      else {
        return Object.entries(this.list)
      }
    },
  },
  mounted() {
    if(this.display && this.value){
      if (this.default){
        this.selectVal = this.default
      }
    }
  },

}
</script>

