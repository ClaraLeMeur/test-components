<template>
  <div>
    <navbar class="bg-white"></navbar>
    <transition name="fade" mode="out-in">
      <nuxt class="pt-16" />
    </transition>
    <footer-bloc class="bg-gray-600 text-white"></footer-bloc>
  </div>
</template>

<style>
body,
html {
  height: 100vh;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@media screen and (max-width: 1024px) {
  .content {
    width: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .content {
    width: calc(100vw - 15rem);
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<script>
import Navbar from "~/components/navbar/talkme/Navbar";
import FooterBloc from "~/components/navbar/talkme/FooterBloc";
export default {
  components: {FooterBloc, Navbar},
  name: 'navbarTalkmeLayout',
}
</script>
