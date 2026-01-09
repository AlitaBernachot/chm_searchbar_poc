<template>
  <div class="app">
    <nav class="navigation" v-if="showNav">
      <router-link to="/">Search Toolbar V1</router-link>
      <router-link to="/searchbarv2">Search Bar V2</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const showNav = computed(() => route.path === '/' || route.path === '/searchbarv2')
</script>

<style scoped>
.app {
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.navigation {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
  justify-content: center;
}

.navigation a {
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s;
  border: 1px solid transparent;
}

.navigation a:hover {
  background: white;
  border-color: #ddd;
}

.navigation a.router-link-active {
  background: #030213;
  color: white;
  border-color: #030213;
}

@media (max-width: 768px) {
  .navigation {
    flex-direction: column;
    gap: 10px;
    padding: 15px;
  }
}
</style>
