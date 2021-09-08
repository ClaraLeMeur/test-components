<template>
  <div
      class="p-3 hover:bg-primary-500 hover:text-white cursor-pointer"
      v-bind:class="[
      { 'bg-primary-500': $route.name === route },
      { 'bg-primary-600': $route.name !== route },
    ]"
  >
    <span>
      {{ lib }}
    </span>
  </div>
</template>

<style scoped>
span {
  margin-left: 2rem;
}
</style>

<script>
export default {
  props: {
    lib: String,
    route: String,
  },
}
</script>
