<template>
  <div class="bg-primary-700 sidebar flex flex-col text-base p-0 text-white">
    <div class="flex flex-col flex-wrap">
      <div v-for="(menuItem, menuIdx) in menu">
        <nav-item-block :nav-item-block="menuItem" :menuIdx="menuIdx" @item-click="itemClick" ></nav-item-block>
      </div>
    </div>

  </div>
</template>

<style scoped>
.sidebar {
  min-width: 15rem;
  width: 15rem;
  user-select: none;
}
</style>

<script>
import NavItemTitle from "~/components/navbar/NavItem";
import NavItemBlock from "~/components/navbar/NavItemBlock";
import NavItem from "~/components/navbar/NavItem";

export default {
  components: {NavItem, NavItemBlock, NavItemTitle},
  data: function () {
    return {
      menu: [
        [ {arrow: false, title: 'Index', route: 'index', opened: false, icon: '/dashboard.svg'} ],
        [ {arrow: false, title: 'Tableau de bord', route: 'dashboard', opened: false, icon: '/dashboard.svg'} ],
        [
          {arrow: true, title: 'Commerce', route: '', opened: false, icon: '/icon.svg'},
          {arrow: false, title: 'Clients et prospects', route: 'dashboard', opened: false, icon: ''},
          {arrow: false, title: 'Devis', route: 'quotes', opened: false, icon: ''},
          {arrow: false, title: 'Mes devis', route: 'my-quotes', opened: false, icon: ''},
        ],
        [
          {arrow: true, title: 'Admin', route: '', opened: false, icon: '/icon.svg'},
          {arrow: false, title: 'Utilisateurs', route: 'users', opened: false, icon: ''},
          {arrow: false, title: 'Vehicules', route: 'users', opened: false, icon: ''}
        ],
      ],
    }
  },
  methods: {
    itemClick: function (route, menuIdx, itemIdx, opened) {
      if (itemIdx === 0 && this.menu[menuIdx][itemIdx]['arrow']) {
        this.navAllClose()
        for (let i = 0; i < this.menu[menuIdx].length; i++) {
          this.menu[menuIdx][i]['opened'] = true
        }
      }

      if (route !== '') {
        this.$router.push({name: route})
      }
    },
    navAllClose() {
      for(let i = 0; i<this.menu.length; i++){
        for(let j = 0; j<this.menu[i].length; j++){
          this.menu[i][j]['opened'] = false
        }
      }
    },
  },
}
</script>
