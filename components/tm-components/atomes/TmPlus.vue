<template>
  <div class="pl-5 pr-2">
    <button :title="title" class="rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center font-bold md:font-2xl shadow
              text-white bg-green-500">+</button>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>
