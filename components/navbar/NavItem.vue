<template>
  <div v-if="arrowBool && opened" class="flex flex-row items-center p-3 hover:bg-primary-500 hover:text-white cursor-pointer w-full"
       v-bind:class="[
      { 'bg-primary-500': $route.name === route },
      { 'bg-primary-700': $route.name !== route },
    ]">
    <div class="flex flex-none pr-2" >
      <img v-if="linkSvg !== ''" class="w-6" :src="linkSvg"/>
    </div>
    <div class="flex flex-grow">
      {{ lib }}
    </div>
    <div class="flex flex-none justify-items-end items-end content-end">
      <svg
        v-if="arrowBool"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-down transform"
        v-bind:class="[{ 'rotate-180': opened }, { 'rotate-0': !opened }]"
        viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lib: String,
    arrowBool: {
      type: Boolean,
      default: false,
    },
    opened: {
      type: Boolean,
      default: false,
    },
    linkSvg : String,
    route: String,
    open: false,
  },
}
</script>
