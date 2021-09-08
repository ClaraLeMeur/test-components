<template>
  <div>
    <div v-for="(navItem, itemIdx) in navItemBlock">
      <nav-item :arrowBool="navItem.arrow" :lib="navItem.title" :route="navItem.route" :opened="navItem.opened" :link-svg="navItem.icon" @click="action(navItem[2])"></nav-item>
    </div>
  </div>
</template>

<script>
import NavItem from "~/components/navbar/NavItem";
import NavItemSubtitle from "~/components/navbar/NavItemSubtitle";
export default {
  components: {NavItemSubtitle, NavItem},
  props: {
    navItemBlock: {
      type: Array,
      default: [],
    },
  },
  methods: {
    action(route){
      if (route !== ''){
        this.router.push({name: route})
      }
    },

  },
}
</script>
