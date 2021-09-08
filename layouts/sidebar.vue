<template>
  <div class="font-inter h-screen">
    <div class="flex h-screen">
      <desktop-sidebar class="hidden lg:block"/>
      <navbar class="lg:hidden"></navbar>
      <div class="content bg-gray-200">
        <nuxt/>
      </div>
    </div>
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

label {
  user-select: none;
}
</style>

<script>
import DesktopSidebar from '~/components/navbar/DesktopSidebar'
import Navbar from '~/components/navbar/Navbar.vue'

export default {
  components: {DesktopSidebar, Navbar},
  name: 'sidebar',
}
</script>
