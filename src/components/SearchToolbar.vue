<template>
  <div class="search-toolbar-container">
    <!-- Search Input Bar -->
    <div class="search-bar" data-name="Container" data-node-id="1:4">
      <div class="search-icon-container" data-name="Container" data-node-id="1:5">
        <div class="icon" data-name="Icon" data-node-id="1:6">
          <img :src="searchIcon" alt="Search" />
        </div>
      </div>
      <div class="search-input-wrapper" data-name="Input" data-node-id="1:9">
        <input 
          v-model="searchQuery" 
          type="text" 
          class="search-input"
          placeholder="Search..."
        />
      </div>
      <button class="clear-button" data-name="Button" data-node-id="1:11">
        <div class="icon-small" data-name="Icon" data-node-id="1:12">
          <img :src="clearIcon" alt="Clear" />
        </div>
      </button>
      <div class="divider" data-name="Container" data-node-id="1:15"></div>
      <button class="close-button" data-name="Button" data-node-id="1:16">
        <div class="icon" data-name="Icon" data-node-id="1:17">
          <img :src="closeIcon" alt="Close" />
        </div>
      </button>
    </div>

    <!-- Search Results Container -->
    <div v-if="showResults" class="results-container" data-name="Container" data-node-id="1:20">
      <!-- Filter Tabs -->
      <div class="filter-tabs" data-name="Container" data-node-id="1:21">
        <button 
          v-for="filter in filters" 
          :key="filter.name"
          :class="['filter-button', { active: activeFilter === filter.name }]"
          @click="activeFilter = filter.name"
          :data-name="'Button'"
        >
          {{ filter.name }} ({{ filter.count }})
        </button>
      </div>

      <!-- Results List -->
      <div class="results-list" data-name="Container" data-node-id="1:30">
        <!-- Winter Hiking Section -->
        <div class="result-section" data-name="Container" data-node-id="1:31">
          <div class="section-header" data-name="Heading 3" data-node-id="1:32">
            <p>Winter hiking (1)</p>
          </div>
          <button class="result-item" data-name="Button" data-node-id="1:34">
            <div class="result-number" data-name="Container" data-node-id="1:35">
              <span>30</span>
            </div>
            <div class="result-title" data-name="Container" data-node-id="1:38">
              <p>Sentiero Pian Cales</p>
            </div>
            <div class="result-location" data-name="Container" data-node-id="1:40">
              <p>San Bernardino - San Bernardino</p>
            </div>
          </button>
        </div>

        <!-- Snowshoe Trekking Section -->
        <div class="result-section" data-name="Container" data-node-id="1:42">
          <div class="section-header" data-name="Heading 3" data-node-id="1:43">
            <p>Snowshoe trekking (2)</p>
          </div>
          <div class="section-items" data-name="Container" data-node-id="1:45">
            <button class="result-item" data-name="Button" data-node-id="1:46">
              <div class="result-number" data-name="Container" data-node-id="1:47">
                <span>556</span>
              </div>
              <div class="result-title" data-name="Container" data-node-id="1:50">
                <p>Percorso Passo San Bernardino</p>
              </div>
              <div class="result-location" data-name="Container" data-node-id="1:52">
                <p>San Bernardino - San Bernardino</p>
              </div>
            </button>
            <button class="result-item" data-name="Button" data-node-id="1:54">
              <div class="result-number" data-name="Container" data-node-id="1:55">
                <span>557</span>
              </div>
              <div class="result-title-long" data-name="Container" data-node-id="1:58">
                <p>Percorso Furestin</p>
              </div>
              <div class="result-location-long" data-name="Container" data-node-id="1:60">
                <p>San Bernardino, Parcheggio Du Lac - San Bernardino, Parcheggio Du Lac</p>
              </div>
            </button>
          </div>
        </div>

        <!-- Accommodation Section -->
        <div class="result-section" data-name="Container" data-node-id="1:62">
          <div class="section-header" data-name="Heading 3" data-node-id="1:63">
            <p>Accommodation (13)</p>
          </div>
          <div class="section-items" data-name="Container" data-node-id="1:65">
            <button class="result-item-simple" data-name="Button" data-node-id="1:66">
              <div class="result-title" data-name="Container" data-node-id="1:67">
                <p>Jugendherberge Bern</p>
              </div>
              <div class="result-location-simple" data-name="Container" data-node-id="1:69">
                <p>Bern</p>
              </div>
            </button>
            <button class="result-item-simple" data-name="Button" data-node-id="1:71">
              <div class="result-title" data-name="Container" data-node-id="1:72">
                <p>La Pergola Bern</p>
              </div>
              <div class="result-location-simple" data-name="Container" data-node-id="1:74">
                <p>Bern</p>
              </div>
            </button>
            <button class="result-item-simple" data-name="Button" data-node-id="1:76">
              <div class="result-title" data-name="Container" data-node-id="1:77">
                <p>Moxy Bern Expo</p>
              </div>
              <div class="result-location-simple" data-name="Container" data-node-id="1:79">
                <p>Bern</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchIcon = 'https://www.figma.com/api/mcp/asset/519cc906-1466-4ee6-8863-12a4ae7f409d'
const clearIcon = 'https://www.figma.com/api/mcp/asset/9e7e2601-dbf8-4089-9acb-9ee5033ffae3'
const closeIcon = 'https://www.figma.com/api/mcp/asset/17c34265-9a4f-4fdf-bec8-bb47c32e922d'

const searchQuery = ref('bern')
const showResults = ref(true)
const activeFilter = ref('All')

const filters = [
  { name: 'All', count: 120 },
  { name: 'Summer', count: 85 },
  { name: 'Winter', count: 51 },
  { name: 'Places, place names and streets', count: 32 }
]
</script>

<style scoped>
.search-toolbar-container {
  width: 100%;
  max-width: 893px;
  margin: 0 auto;
  padding: 201px 20px 0;
}

@media (max-width: 1200px) {
  .search-toolbar-container {
    padding: 50px 20px 0;
  }
}

/* Search Bar */
.search-bar {
  position: relative;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 38px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.search-icon-container {
  display: flex;
  align-items: center;
  padding-left: 12px;
  width: 32px;
  height: 20px;
}

.icon {
  width: 20px;
  height: 20px;
}

.icon img {
  width: 100%;
  height: 100%;
  display: block;
}

.icon-small {
  width: 16px;
  height: 16px;
}

.icon-small img {
  width: 100%;
  height: 100%;
  display: block;
}

.search-input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0);
  overflow: hidden;
  height: 36px;
  margin-left: 8px;
}

.search-input {
  width: 100%;
  border: none;
  outline: none;
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #717182;
  background: transparent;
}

.clear-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-left: auto;
}

.clear-button:hover {
  background: rgba(0, 0, 0, 0.05);
}

.divider {
  width: 1px;
  height: 24px;
  background: rgba(0, 0, 0, 0.1);
  margin: 0 8px;
}

.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-right: 2px;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.05);
}

/* Results Container */
.results-container {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 507px;
  overflow: hidden;
  padding: 1px;
  margin-top: 1px;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  gap: 8px;
  height: 59px;
  align-items: flex-start;
  padding: 12px 12px 1px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  overflow-x: auto;
}

.filter-button {
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 34px;
  padding: 0 16px;
  border-radius: 9999px;
  font-family: 'Arimo', sans-serif;
  font-size: 12px;
  color: #0a0a0a;
  cursor: pointer;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s;
}

.filter-button:hover {
  background: #f5f5f5;
}

.filter-button.active {
  background: #030213;
  color: white;
  border-color: #030213;
}

/* Results List */
.results-list {
  display: flex;
  flex-direction: column;
  height: 446px;
  overflow-y: auto;
}

.result-section {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.section-header {
  background: white;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 16px;
}

.section-header p {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #0a0a0a;
  font-weight: 400;
  line-height: 20px;
}

.section-items {
  display: flex;
  flex-direction: column;
}

/* Result Items */
.result-item {
  display: flex;
  gap: 12px;
  height: 64px;
  align-items: center;
  padding: 0 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.result-item:hover {
  background: rgba(0, 0, 0, 0.02);
}

.result-number {
  background: #f6339a;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.result-number span {
  font-family: 'Arimo', sans-serif;
  font-size: 12px;
  color: white;
  font-weight: 400;
  line-height: 16px;
}

.result-title {
  flex: 1;
  height: 20px;
  min-width: 0;
}

.result-title p {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #0a0a0a;
  font-weight: 400;
  line-height: 20px;
}

.result-title-long {
  height: 20px;
  width: 344.297px;
  flex-shrink: 0;
}

.result-title-long p {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #0a0a0a;
  font-weight: 400;
  line-height: 20px;
}

.result-location {
  height: 20px;
  width: 209.516px;
  flex-shrink: 0;
}

.result-location p {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #717182;
  font-weight: 400;
  line-height: 20px;
}

.result-location-long {
  flex: 1;
  height: 20px;
  min-width: 0;
}

.result-location-long p {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #717182;
  font-weight: 400;
  line-height: 20px;
}

/* Simple Result Items (without number badge) */
.result-item-simple {
  display: flex;
  gap: 12px;
  height: 44px;
  align-items: center;
  padding: 0 16px;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
}

.result-item-simple:hover {
  background: rgba(0, 0, 0, 0.02);
}

.result-location-simple {
  height: 20px;
  width: 29.922px;
  flex-shrink: 0;
}

.result-location-simple p {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #717182;
  font-weight: 400;
  line-height: 20px;
}

/* Scrollbar Styling */
.results-list::-webkit-scrollbar {
  width: 8px;
}

.results-list::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.results-list::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.results-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
