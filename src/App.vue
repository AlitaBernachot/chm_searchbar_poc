<template>
  <div class="app">
    <SearchToolbar />
  </div>
</template>

<script setup>
import SearchToolbar from './components/SearchToolbar.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 201px 323.5px 0;
}

@media (max-width: 1200px) {
  .app {
    padding: 50px 20px 0;
  }
}
</style>
