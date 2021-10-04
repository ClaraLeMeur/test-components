<template>
  <section class="h-full">
    <div class="flex flex-col justify-center items-center w-full py-10">
      <h1 class="flex font-bold text-2xl">Index</h1>
      <div class="flex items-center justify-evenly w-full py-6">
        <a href="https://nuxtjs.org/" target="_blank" class="flex btn btn-primary btn-pill">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="flex tm-btn tm-btn-primary tm-btn-disable">GitHub</a>
      </div>
      <hr class="text-blue-900">
      <h2 class="text-primary-500 text-2xl font-bold">Buttons</h2>
      <div class="flex-col flex w-full">
        <div class="flex flex-row items-center justify-evenly w-full py-6">
          <button type="button" class="tm-btn tm-btn-primary">Primary</button>
          <button type="button" class="tm-btn tm-btn-outline">Pill</button>
          <button type="button" class="tm-btn tm-btn-yellow tm-btn-icon space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add with svg</span>
          </button>
          <button type="button" class="tm-btn tm-btn-red"><span class="pl-5" style="background: url('/plus.svg') no-repeat left center;">Add</span></button>
        </div>
      </div>

      <h2 class="text-primary-500 text-2xl font-bold">Buttons Tm</h2>
      <!--
      <div class="flex-col flex w-full">
        <div class="flex flex-row items-center justify-evenly w-full py-6">
          <tm-btn type="button" custom-style="primary" tm-color="red" title="Primary" disabled>Primary</tm-btn>
          <tm-btn type="button" custom-style="outline" tm-color="green" title="Pill">Pill</tm-btn>
          <tm-btn type="button" custom-style="icon" tm-color="yellow" title="Pill">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Add with svg</span>
          </tm-btn>
        </div>
      </div>-->

      <h2 class="text-red-500 text-2xl font-bold">Input</h2>
      <div class="flex-col flex w-full">
        <div class="flex flex-row items-center justify-evenly w-full py-6">
          <tm-input default="test" placeholder="ici" @input="foo=$event"></tm-input>
        </div>
      </div>

      <h2 class="text-green-500 text-2xl font-bold">Select</h2>
      <div class="flex-col flex w-full">
        <div class="flex flex-col items-center justify-evenly w-full py-6">
          <tm-select class="flex py-2" placeholder="placeholder" :default="situation" :list="situations" @select="situation=$event"></tm-select>
          <tm-select class="flex py-2" placeholder="placeholder" :default="status" :list="worksiteStatuses" @select="status=$event" display="status" value="title"></tm-select>
        </div>
      </div>
    </div>
  </section>
</template>

<router>
{
path: '/',
name: 'index',
alias: [{path: '/index'}]
}
</router>

<script>
import TmBtn from "~/components/tm-components/atomes/TmBtn";
import TmInput from "~/components/tm-components/atomes/TmInput";
import TmSelect from "~/components/tm-components/atomes/TmSelect";
export default {
  components: {TmSelect, TmInput, TmBtn},
  data(){
    return {
      foo:null,
      situation: 'single',
      situations: {
        married: 'Marié(e)',
        pacse: 'Pacsé(e)',
        partner: 'Concubin(e)',
        divorcee: 'Divorcé(e)',
        separate: 'Séparé(e)',
        single: 'Célibataire',
        widower: 'Veuf(ve)',
      },
      status: null,
      worksiteStatuses: [
        {title: 'EN COURS'},
        {title: 'PLANNING PREV'},
        {title: 'PLANNING'},
        {title: 'RÉCEPTIONNÉS', status: 'RÉCEPTIONNÉ'},
        {title: 'FACTURÉS', status: 'FACTURÉ'},
      ],
    }
  },
  layout: 'sidebarJefLayout',
}
</script>
