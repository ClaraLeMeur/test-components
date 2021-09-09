<template>
  <div>
    <a v-if="link === '#'" :href="redirect" target="_blank" rel="noopener noreferrer">
      <div :class="$route.name === link ? 'text-primary-500' : 'text-black'"
           class="flex w-full items-center py-1 font-bold hover:text-primary-500 cursor-pointer">
        <div class="pl-4">{{ title }}</div>
      </div>
    </a>

    <router-link
        v-else
        :to="link"
        @click.native="scrollToTop()"
        :class="$route.name === link ? 'text-primary-500' : 'text-black'"
        class="flex w-full items-center py-1 font-bold hover:text-primary-500 cursor-pointer">
      <div class="pl-4">{{ title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    redirect: {
      type: String,
      default: '#',
    },
    link: {
      type: String,
      default: '#',
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
      this.$emit('close-navbar')
    }
  }
}
</script>
