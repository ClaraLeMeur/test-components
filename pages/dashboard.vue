<template>
  <section class="h-full">
    <div class="flex flex-col justify-center items-center w-full py-10">
      <h1 class="flex text-primary-500 font-bold text-2xl">Dashboard</h1>
    </div>
  </section>
</template>

<router>
{
path: '/tableau-de-bord',
name: 'dashboard',
alias: [{path: '/dashboard'}]
}
</router>

<script>
export default {
  layout: 'navbarTalkmeLayout',
}
</script>
