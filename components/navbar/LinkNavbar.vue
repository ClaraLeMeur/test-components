<template>
  <div>
    <a v-if="link === '#'"
       :href="redirect"
       target="_blank"
       rel="noopener noreferrer">
      <div :class="$route.name === link ? 'text-orangetm-500' : 'text-black'"
           class="flex w-full items-center py-1 font-bold hover:text-orangetm-500 cursor-pointer"
           @mouseover="showByIndex = 'i'"
           @mouseout="showByIndex = null">
        <div :class="showByIndex === 'i' ? 'text-orangetm-500' : 'text-white'"
             class="animate-arrow">
          <svg class="h-5 w-5"
               xmlns="http://www.w3.org/2000/svg"
               width="31.5"
               height="15.484"
               viewBox="0 0 31.5 15.484"
               fill="currentColor">
            <path
                id="Icon_awesome-long-arrow-alt-right"
                fill-rule="evenodd"
                data-name="Icon awesome-long-arrow-alt-right"
                d="M22.074,15.188H.844A.844.844,0,0,0,0,16.031v3.938a.844.844,0,0,0,.844.844h21.23v3.239a1.688,1.688,0,0,0,2.881,1.193l6.051-6.051a1.687,1.687,0,0,0,0-2.386l-6.051-6.051a1.688,1.688,0,0,0-2.881,1.193Z"
                transform="translate(0 -10.258)"/>
          </svg>
        </div>
        <div class="pl-2">{{ title }}</div>
      </div>
    </a>
    <router-link
        v-else
        :to="link"
        @click.native="scrollToTop()"
        :class="$route.name === link ? 'text-orangetm-500' : 'text-black'"
        class="flex w-full items-center py-1 font-bold hover:text-orangetm-500 cursor-pointer"
        @mouseover="showByIndex = 'i'"
        @mouseout="showByIndex = null">
      <div
          :class="showByIndex === 'i' ? 'text-orangetm-500' : 'text-white'"
          class="animate-arrow">
        <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            width="31.5"
            height="15.484"
            viewBox="0 0 31.5 15.484"
            fill="currentColor">
          <path
              id="Icon_awesome-long-arrow-alt-right"
              fill-rule="evenodd"
              data-name="Icon awesome-long-arrow-alt-right"
              d="M22.074,15.188H.844A.844.844,0,0,0,0,16.031v3.938a.844.844,0,0,0,.844.844h21.23v3.239a1.688,1.688,0,0,0,2.881,1.193l6.051-6.051a1.687,1.687,0,0,0,0-2.386l-6.051-6.051a1.688,1.688,0,0,0-2.881,1.193Z"
              transform="translate(0 -10.258)"/>
        </svg>
      </div>
      <div class="pl-2">{{ title }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showByIndex: null,
    }
  },
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
