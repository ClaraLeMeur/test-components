<template>
  <div class="font-poppins">
    <navbar class="bg-white"></navbar>
    <transition name="fade" mode="out-in">
<!--      <nuxt class="pt-16" />-->
      <nuxt/>
    </transition>
<!--    <footer-bloc class="bg-graytm text-white"></footer-bloc>-->
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
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

</style>

<script>
import FooterBloc from '~/components/tm-components/navbar/talkme/FooterBloc.vue'
import Navbar from '~/components/tm-components/navbar/talkme/Navbar.vue'
export default {
  components: { Navbar, FooterBloc },
}
</script>
