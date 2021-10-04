<template>
  <nav class="fixed w-full pt-4 bg-transparent z-50 justify-end">
    <div class="flex items-center text-black justify-end">
      <!-- Mobile toggle -->
      <div v-if="!isOpen" class="hover:text-primary-600 px-4 flex items-center h-8">
        <button @click="drawer" class="focus:outline-none ">
          <svg
            class="h-8 w-8 fill-current"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div v-else class="w-full z-40">
        <button
          class="absolute top-0 right-0 mt-4 mr-4 appearance-none focus:outline-none "
          @click="isOpen = false"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-50"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <desktop-navbar class="transform top-0 left-0 bg-primary-700 fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
               :class="isOpen ? 'translate-x-0' : '-translate-x-full'"></desktop-navbar>
    </div>
  </nav>
</template>

<script>
import DesktopNavbar from "~/components/tm-components/navbar/jef/DesktopNavbar";
export default {
  components: {DesktopNavbar},
  data: function () {
    return {
      isOpen: false,
    }
  },
  methods: {
    drawer() {
      this.isOpen = !this.isOpen
    },
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty('overflow', 'hidden')
          else document.body.style.removeProperty('overflow')
        }
      },
    },
  },
  mounted() {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false
    })
  },
}
</script>
