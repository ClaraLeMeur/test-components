<template>
  <section class="h-full">
    <div class="flex flex-col justify-center items-center w-full py-10">
      <h1 class="flex font-bold text-2xl">Index</h1>
      <div class="flex items-center justify-evenly w-full py-6">
        <a href="https://nuxtjs.org/" target="_blank" class="flex btn btn-primary btn-pill">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="flex btn btn-primary btn-disable">GitHub</a>
      </div>
      <h2 class="text-primary-500 text-2xl font-bold">Buttons</h2>
      <div class="flex items-center justify-evenly w-full py-6">
        <custom-btn title="primary" custom-style="btn"></custom-btn>
        <custom-btn title="pill" custom-style="pill"></custom-btn>
        <custom-btn title="outline" custom-style="outline"></custom-btn>
        <custom-btn title="disable" custom-style="disable"></custom-btn>
        <custom-btn title="icon" custom-style="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </custom-btn>
      </div>
    </div>
  </section>
</template>

<router>
{
path: '/',
name: 'index',
alias: [{path: '/index'}]
}
</router>

<script>
import CustomBtn from "~/components/CustomBtn";
export default {
  components: {CustomBtn},
  layout: 'navbarTalkmeLayout',
}
</script>
