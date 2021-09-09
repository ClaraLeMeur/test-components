<template>
  <div>
    <div v-for="(navItem, itemIdx) in navItemBlock">
      <nav-item
        v-if="(itemIdx === 0 || navItem.opened)"
        :arrowBool="navItem.arrow"
        :lib="navItem.title"
        :route="navItem.route"
        :opened="navItem.opened"
        :link-svg="navItem.icon"
        :menu-idx="menuIdx"
        :item-idx="itemIdx"
        v-bind:class="[
          { 'bg-primary-500': $route.name === navItem.route },
          { 'bg-primary-600': $route.name !== navItem.route && itemIdx !== 0 },
          { 'bg-primary-700': $route.name !== navItem.route && itemIdx === 0 },
        ]"
      ></nav-item>
    </div>
  </div>
</template>

<script>
import NavItem from "~/components/navbar/jef/NavItem";

export default {
  components: {NavItem},
  props: {
    navItemBlock: {
      type: Array,
      default: [],
    },
    menuIdx: Number,
  },
}
</script>
