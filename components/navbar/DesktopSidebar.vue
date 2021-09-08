<template>
  <div class="bg-primary-700 sidebar flex flex-col flex-shrink-0 text-base p-0 text-white relative">

    <div class="flex flex-col flex-wrap">

      <div class="hidden md:block">
        <div @click="navopen('business', business);business = !business;open = 'business'">
          <nav-item lib="Commerce" arrowBool :clic="business">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </nav-item>
        </div>
        <div v-if="business">
          <nav-item-subtitle lib="Clients et prospects" route="customers"></nav-item-subtitle>
          <nav-item-subtitle lib="Devis" route="quotes"></nav-item-subtitle>
          <nav-item-subtitle lib="Mes devis" route="my-quotes"></nav-item-subtitle>
          <nav-item-subtitle lib="Commandes" route="orders"></nav-item-subtitle>
          <nav-item-subtitle lib="Mes commandes" route="my-orders"></nav-item-subtitle>
        </div>
      </div>

      <hr>

      <div v-for="menuItem in menu">
        <nav-item-block :nav-item-block="menuItem"></nav-item-block>
      </div>


      <!--      <div @click="navopen('admin', admin);admin = !admin;open = 'admin'">-->
      <!--        <nav-item-title  lib="Admin" arrowBool :clic="admin">-->
      <!--          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">-->
      <!--            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />-->
      <!--          </svg>-->
      <!--        </nav-item-title>-->
      <!--      </div>-->
      <!--      <div v-if="admin">-->
      <!--        <nav-item-subtitle lib="Utilisateurs" route="users"></nav-item-subtitle>-->
      <!--        <nav-item-subtitle lib="Véhicules" route="vehicles"></nav-item-subtitle>-->
      <!--      </div>-->
    </div>

    <!--    <hr>-->
    <div class="relative">
      <div @click="navopen('user', user);user = !user;open = 'user'">
        <nav-item lib="Bienvenue" arrowBool :clic="user"></nav-item>
      </div>
      <div v-if="user">
        <nav-item-subtitle lib="Déconnexion" route="logout"></nav-item-subtitle>
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

.logo {
  position: fixed;
  bottom: .8rem;
  left: .8rem;
}
</style>

<script>
import NavItemTitle from "~/components/navbar/NavItem";
import NavItemSubtitle from "~/components/navbar/NavItemSubtitle";
import NavItemBlock from "~/components/navbar/NavItemBlock";
import NavItem from "~/components/navbar/NavItem";

export default {
  components: {NavItem, NavItemBlock, NavItemSubtitle, NavItemTitle},
  data: function () {
    return {
      business: false,
      exploitation: false,
      rh: false,
      admin: false,
      user: false,
      open: '',
      //'true =Title, false=Subtitle', 'title', 'opened', 'icon.svg'
      menu: [
        [ {arrow: false, title: 'Tableau de bord', route: 'dashboard', opened: false, icon: '/dashboard.svg'} ],
        [
          {arrow: true, title: 'Commerce', route: '', opened: true, icon: '/icon.svg'},
          {arrow: false, title: 'Clients et prospects', route: 'customers', opened: true, icon: ''},
          {arrow: false, title: 'Devis', route: 'quotes', opened: true, icon: ''},
          {arrow: false, title: 'Mes devis', route: 'my-quotes', opened: true, icon: ''},
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
    navopen(name, nav) {
      if (this.open === name) {
        nav = false
      } else {
        this.navAllClose()
        nav = !nav
        this.open = name
      }
    },
    navAllClose() {
      this.business = false
      this.exploitation = false
      this.rh = false
      this.admin = false
      this.user = false
    },
    changeOpenedItem(index, boolean){
      this.menu.forEach((elem) => elem.opened = boolean);
    },
  },
}
</script>
