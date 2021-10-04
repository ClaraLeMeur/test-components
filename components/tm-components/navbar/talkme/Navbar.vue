<template>
  <nav class="fixed w-full p-4 bg-transparent z-50 shadow">
    <div class="flex items-center justify-between lg:justify-around">
      <!-- Header logo -->
      <div>
        <nuxt-link to="/">
          <img class="h-6 cursor-pointer" src="/static/logo.svg" alt="logo" />
        </nuxt-link>
      </div>

      <!-- Navbar -->
      <link-navbar class="hidden lg:block" title="Dématérialiser" link="dematerialiser"></link-navbar>
      <link-navbar class="hidden lg:block" title="Automatiser" link="automatiser"></link-navbar>
      <link-navbar class="hidden lg:block" title="Rationaliser" link="rationaliser"></link-navbar>
      <link-navbar class="hidden lg:block" title="Nos technologies" link="technologies"></link-navbar>
       <link-navbar  class="hidden lg:block" title="Blog" redirect="https://blog.talkme.tech/"></link-navbar>
      <div
          @click="$router.push({ name: 'contact' })"
          class="bg-primary-500 hover:bg-primary-600 px-3 py-2 rounded-3xl text-white font-semibold hidden lg:block cursor-pointer"
      >Nous contacter
      </div>

      <!-- Mobile toggle -->
      <div class="lg:hidden flex items-center">
        <button @click="drawer">
          <svg
              class="h-8 w-8 fill-current text-black"
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

      <!-- Dark Background Transition -->
      <transition
          enter-class="opacity-0"
          enter-active-class="ease-out transition-medium"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-active-class="ease-out transition-medium"
          leave-to-class="opacity-0">
        <div
            @keydown.esc="isOpen = false"
            v-show="isOpen"
            class="z-10 fixed inset-0 transition-opacity">
          <div
              @click="isOpen = false"
              class="absolute inset-0 bg-black opacity-50"
              tabindex="0"></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
          class="p-5 transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'">
        <div class="close">
          <button
              class="absolute top-0 right-0 mt-4 mr-4"
              @click="isOpen = false">
            <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
            @click="isOpen = false"
            class="flex w-full items-center p-4 border-b">
          <nuxt-link to="/">
            <img class="h-10 cursor-pointer" src="/static/logo.svg" alt="TalkMe"/>
          </nuxt-link>
        </span>

            <link-navbar title="Dashboard" link="dashboard" @close-navbar="isOpen=false"></link-navbar>
            <link-navbar title="Home" link="/" @close-navbar="isOpen=false"></link-navbar>
            <link-navbar title="Rationaliser" link="rationaliser" @close-navbar="isOpen=false"></link-navbar>
            <link-navbar title="Nos technologies" link="technologies" @close-navbar="isOpen=false"></link-navbar>
            <link-navbar title="Blog" redirect="https://blog.talkme.tech/"></link-navbar>
            <div
                @click="isOpen = false; $router.push({ name: 'contact' })"
                class="my-4 text-center font-semibold inline-block bg-primary-500 hover:bg-primary-600 ml-6 px-3 py-2 rounded-3xl text-white">
              Nous contacter
            </div>

        <div class="px-4">
          <p class="italic text-sm">Suivez-nous :</p>
          <div class="flex space-x-5 mt-4">
            <a href="https://www.linkedin.com/company/talkmetech/" target="_blank" @click="isOpen=false">
              <svg aria-hidden="true"
                   focusable="false"
                   data-prefix="fab"
                   data-icon="linkedIn"
                   class="h-10 w-10 fill-current text-gray-600"
                   role="img"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCtZBDVIKOhVTnH_9YvJ8l1w" target="_blank" @click="isOpen=false">
              <svg aria-hidden="true"
                   focusable="false"
                   data-prefix="fab"
                   data-icon="youtube"
                   class="h-10 w-10 text-gray-600"
                   role="img"
                   viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </div>
  </nav>
</template>

<script>
import LinkNavbar from './LinkNavbar.vue'

export default {
  components: {LinkNavbar},
  data() {
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
