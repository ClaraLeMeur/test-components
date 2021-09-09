<template>
  <div>
    Dashboard
    Vue
  </div>
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
  layout: 'sidebarJefLayout',
}
</script>
