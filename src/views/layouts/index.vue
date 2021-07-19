<template>
  <div>
    <button type="button" @click="handleLogout">logout</button>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
    methods: {
      handleLogout() {
        this.$store.dispatch('logout');
      }
    }
  }
</script>
