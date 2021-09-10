<template>
  <section class="h-full">
    <div class="flex flex-col justify-center items-center w-full py-10">
      <h1 class="flex font-bold text-2xl">Index</h1>
      <div class="flex items-center justify-evenly w-full py-6">
        <a href="https://nuxtjs.org/" target="_blank" class="flex btn btn-primary btn-pill">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="flex btn btn-primary btn-disable">GitHub</a>
      </div>
      <hr class="text-blue-900">
      <h2 class="text-primary-500 text-2xl font-bold">Buttons</h2>
      <div class="flex-col flex w-full">
        <div class="flex flex-row items-center justify-evenly w-full py-6">
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-green btn-pill">Pill</button>
          <button type="button" class="btn btn-yellow btn-icon space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add with svg</span>
          </button>
          <button type="button" class="btn btn-red"><span class="pl-5" style="background: url('/plus.svg') no-repeat left center;">Add</span></button>
        </div>
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
export default {
  layout: 'navbarTalkmeLayout',
}
</script>
