<template>
  <section class="h-full">
    <div class="flex flex-col justify-center items-center w-full h-full">
      <h1 class="flex text-2xl">Custom components</h1>
      <div class="flex links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
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
import Logo from '~/components/Logo.vue'
export default {
  layout: 'sidebarJefLayout',
}
</script>

<style>

.links {
  padding-top: 15px;
}
</style>
