<template>
  <div class="searchbar-v2">
    <!-- Search Header -->
    <div class="search-header">
      <div class="search-icon-wrapper">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <input 
        v-model="searchQuery" 
        type="text" 
        class="search-input-main"
        placeholder="Search..."
        @input="handleSearch"
      />
      <button class="clear-button-main" @click="clearSearch" v-if="searchQuery">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button class="close-button-main" @click="closeSearch">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Filter Tabs -->
    <div class="filter-section">
      <button 
        v-for="filter in filters" 
        :key="filter.name"
        :class="['filter-tab', { active: activeFilter === filter.name }]"
        @click="setActiveFilter(filter.name)"
      >
        {{ filter.name }} ({{ filter.count }})
      </button>
    </div>

    <!-- Results Container -->
    <div class="results-container-v2">
      <div class="results-scroll">
        <!-- Hiking in Switzerland Section -->
        <div class="result-category">
          <h3 class="category-title">Hiking in Switzerland (1)</h3>
          <div class="result-list-item">
            <div class="route-badge green">138</div>
            <div class="result-details">
              <span class="result-name">Sentier nature Grand <strong>Laus</strong>anne</span>
              <span class="result-location"><strong>Laus</strong>anne, Ouchy - Prilly-Chailly - <strong>Laus</strong>anne, Ouchy</span>
            </div>
          </div>
        </div>

        <!-- Cycling in Switzerland Section -->
        <div class="result-category">
          <h3 class="category-title">Cycling in Switzerland (5)</h3>
          <div class="result-list-item">
            <div class="route-badge blue">65</div>
            <div class="result-details">
              <span class="result-name">Herzroute</span>
              <span class="result-location"><strong>Laus</strong>anne - Romanshorn</span>
            </div>
          </div>
          <div class="result-list-item">
            <div class="route-badge blue">5</div>
            <div class="result-details">
              <span class="result-name">Mittelland Route</span>
              <span class="result-location">Romanshorn - <strong>Laus</strong>anne</span>
            </div>
          </div>
          <div class="result-list-item">
            <div class="route-badge blue">115</div>
            <div class="result-details">
              <span class="result-name">Baselbieter Reben-Route</span>
              <span class="result-location"><strong>Laus</strong>en - Buus-Rheinfelden - <strong>Laus</strong>en</span>
            </div>
          </div>
          <button class="show-all-button">
            <svg class="plus-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Show all
          </button>
        </div>

        <!-- Mountainbiking in Switzerland Section -->
        <div class="result-category">
          <h3 class="category-title">Mountainbiking in Switzerland (1)</h3>
          <div class="result-list-item">
            <div class="route-badge orange">210</div>
            <div class="result-details">
              <span class="result-name"><strong>Laus</strong> Bike</span>
              <span class="result-location">Disentis - Lag da <strong>Laus</strong> - Disentis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('laus')
const activeFilter = ref('Summer (21)')

const filters = [
  { name: 'All', count: 71 },
  { name: 'Summer', count: 21 },
  { name: 'Winter', count: 9 },
  { name: 'Places, place names and streets', count: 50 }
]

const handleSearch = () => {
  console.log('Search query:', searchQuery.value)
}

const clearSearch = () => {
  searchQuery.value = ''
}

const closeSearch = () => {
  router.push('/')
}

const setActiveFilter = (filterName) => {
  activeFilter.value = filterName
}
</script>

<style scoped>
.searchbar-v2 {
  width: 100%;
  min-height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
}

/* Search Header */
.search-header {
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e5e5;
  gap: 16px;
}

.search-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
}

.search-icon {
  width: 24px;
  height: 24px;
  color: #333;
}

.search-input-main {
  flex: 1;
  border: none;
  outline: none;
  font-family: 'Arimo', sans-serif;
  font-size: 16px;
  color: #333;
  background: transparent;
  padding: 8px 0;
}

.search-input-main::placeholder {
  color: #999;
}

.clear-button-main,
.close-button-main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.2s;
}

.clear-button-main:hover,
.close-button-main:hover {
  background: #f5f5f5;
}

.clear-button-main svg,
.close-button-main svg {
  width: 20px;
  height: 20px;
  color: #666;
}

.close-button-main svg {
  color: #e74c3c;
}

/* Filter Section */
.filter-section {
  display: flex;
  gap: 12px;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e5e5;
  overflow-x: auto;
  flex-wrap: wrap;
}

.filter-tab {
  padding: 8px 20px;
  border: 1px solid #e5e5e5;
  border-radius: 24px;
  background: white;
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.filter-tab:hover {
  background: #f5f5f5;
}

.filter-tab.active {
  background: #000;
  color: white;
  border-color: #000;
}

/* Results Container */
.results-container-v2 {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.results-scroll {
  flex: 1;
  overflow-y: auto;
  padding: 0 24px 24px;
}

.result-category {
  margin-top: 24px;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 16px;
}

.category-title {
  font-family: 'Arimo', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
}

.result-list-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  cursor: pointer;
  transition: background 0.2s;
}

.result-list-item:hover {
  background: #f9f9f9;
}

.route-badge {
  width: 48px;
  height: 48px;
  background: #e91e8c;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
}

.route-badge.green {
  background: #4caf50;
}

.route-badge.blue {
  background: #2196f3;
}

.route-badge.orange {
  background: #ff9800;
}

.result-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.result-name {
  font-family: 'Arimo', sans-serif;
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

.result-location {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #666;
}

/* Show all button */
.show-all-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 0;
  margin-top: 8px;
  border: none;
  background: transparent;
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #e74c3c;
  cursor: pointer;
  font-weight: 500;
}

.show-all-button:hover {
  color: #c0392b;
}

.plus-icon {
  width: 16px;
  height: 16px;
  color: currentColor;
}

/* Simple result items (accommodation) */
.result-list-item.simple {
  gap: 0;
}

.result-details-simple {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.result-location-simple {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #666;
  flex-shrink: 0;
}

/* Bold highlight for search term */
strong {
  font-weight: 700;
  color: #000;
}

/* Scrollbar styling */
.results-scroll::-webkit-scrollbar {
  width: 8px;
}

.results-scroll::-webkit-scrollbar-track {
  background: #f5f5f5;
}

.results-scroll::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.results-scroll::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* Responsive */
@media (max-width: 768px) {
  .search-header {
    padding: 12px 16px;
  }

  .filter-section {
    padding: 12px 16px;
  }

  .results-scroll {
    padding: 0 16px 16px;
  }
}
</style>
