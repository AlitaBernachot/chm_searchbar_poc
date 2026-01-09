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
        <!-- Best Matches Header -->
        <div class="best-matches-header">
          <div class="best-matches-title">
            <svg class="sparkle-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#9333ea" stroke="#9333ea" stroke-width="1.5"/>
            </svg>
            <span>Best matches (100)</span>
          </div>
          <div class="feedback-buttons">
            <button class="feedback-btn" title="Thumbs up">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 22V11M2 13V20C2 21.1046 2.89543 22 4 22H16.4262C17.907 22 19.1662 20.9197 19.3914 19.4562L20.4683 12.4562C20.7479 10.6389 19.3418 9 17.5032 9H14C13.4477 9 13 8.55228 13 8V4.46584C13 3.10399 11.896 2 10.5342 2C10.2093 2 9.91498 2.1913 9.78306 2.48812L7.26394 8.40614C7.09895 8.76727 6.74046 9 6.35013 9H4C2.89543 9 2 9.89543 2 11V13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="feedback-btn" title="Thumbs down">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2V13M22 11V4C22 2.89543 21.1046 2 20 2H7.57377C6.09297 2 4.83379 3.08027 4.60863 4.54377L3.53169 11.5438C3.2521 13.3611 4.65823 15 6.49678 15H10C10.5523 15 11 15.4477 11 16V19.5342C11 20.896 12.104 22 13.4658 22C13.7907 22 14.085 21.8087 14.2169 21.5119L16.7361 15.5939C16.9011 15.2327 17.2595 15 17.6499 15H20C21.1046 15 22 14.1046 22 13V11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
          <div class="difficulty-badge">
            <svg class="tree-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L9 8H7L10 14H8L12 22L16 14H14L17 8H15L12 2Z" fill="#22c55e"/>
            </svg>
            <span>Hiking in Switzerland</span>
          </div>
          <div class="difficulty-indicator">
            <span>Difficulty: <strong>easy</strong></span>
          </div>
        </div>

        <!-- Hiking Results -->
        <div class="result-section no-border">
          <button class="result-item with-icon">
            <div class="result-icon green">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="white"/>
                <path d="M8 14L10 10L12 12L14 10L16 14M12 18V22M8 22H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="result-title-flex">
              <p>Trans Swiss Trail</p>
            </div>
            <div class="result-location">
              <p>Porrentruy - Mendrisio</p>
            </div>
          </button>
          <button class="result-item with-icon">
            <div class="result-icon green">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="white"/>
                <path d="M8 14L10 10L12 12L14 10L16 14M12 18V22M8 22H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="result-title-flex">
              <p>Alpine Panorama Trail</p>
            </div>
            <div class="result-location">
              <p>Rorschach - Genève</p>
            </div>
          </button>
          <button class="result-item with-icon">
            <div class="result-icon green">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="white"/>
                <path d="M8 14L10 10L12 12L14 10L16 14M12 18V22M8 22H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="result-title-flex">
              <p>ViaJacobi</p>
            </div>
            <div class="result-location">
              <p>Rorschach- &#47; Konstanz (D) - Charrot (Grenze)</p>
            </div>
          </button>
          <button class="show-all-link">+ Show all</button>
        </div>

        <!-- Snowshoe Trekking Section -->
        <div class="result-section" data-name="Container" data-node-id="1:42">
          <div class="section-header" data-name="Heading 3" data-node-id="1:43">
            <p>Snowshoe trekking (1)</p>
          </div>
          <div class="section-items" data-name="Container" data-node-id="1:45">
            <button class="result-item" data-name="Button" data-node-id="1:46">
              <div class="result-number pink" data-name="Container" data-node-id="1:47">
                <span>558</span>
              </div>
              <div class="result-title" data-name="Container" data-node-id="1:50">
                <p>Maran-Easy-Trapper-Schneeschuhtrail</p>
              </div>
              <div class="result-location" data-name="Container" data-node-id="1:52">
                <p>Arosa, Maran - Arosa, Maran</p>
              </div>
            </button>
          </div>
        </div>

        <!-- Places Section -->
        <div class="result-section" data-name="Container" data-node-id="1:62">
          <div class="section-header" data-name="Heading 3" data-node-id="1:63">
            <p>Places, place names and streets (50)</p>
          </div>
          <div class="section-items" data-name="Container" data-node-id="1:65">
            <div class="place-item-simple">
              <p><em>Populated Place Hochhus (WW) - Wolfenschiessen</em></p>
            </div>
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

const searchQuery = ref('easy hikes')
const showResults = ref(true)
const activeFilter = ref('All')

const filters = [
  { name: 'All', count: 153 },
  { name: 'Summer', count: 100 },
  { name: 'Winter', count: 1 },
  { name: 'Places, place names and streets', count: 50 }
]
</script>

<style scoped>
.search-toolbar-container {
  width: 100%;
  max-width: 893px;
  margin: 0 auto;
  padding: 40px 20px 0;
}

@media (max-width: 1200px) {
  .search-toolbar-container {
    padding: 20px 20px 0;
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
  max-height: 600px;
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
  flex: 1;
  overflow-y: auto;
}

/* Best Matches Header */
.best-matches-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
}

.best-matches-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.sparkle-icon {
  width: 18px;
  height: 18px;
}

.feedback-buttons {
  display: flex;
  gap: 4px;
  margin-left: auto;
}

.feedback-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.feedback-btn:hover {
  background: #f5f5f5;
}

.feedback-btn svg {
  width: 18px;
  height: 18px;
  color: #666;
}

.difficulty-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 16px;
  font-family: 'Arimo', sans-serif;
  font-size: 12px;
  color: #16a34a;
  font-weight: 500;
}

.tree-icon {
  width: 14px;
  height: 14px;
}

.difficulty-indicator {
  font-family: 'Arimo', sans-serif;
  font-size: 13px;
  color: #666;
}

.difficulty-indicator strong {
  color: #333;
  font-weight: 600;
}

.result-section {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.result-section.no-border {
  border-bottom: none;
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

.result-item.with-icon {
  gap: 12px;
}

.result-icon {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.result-icon.green {
  background: #22c55e;
}

.result-icon svg {
  width: 24px;
  height: 24px;
}

.result-title-flex {
  flex: 1;
  min-width: 0;
}

.result-title-flex p {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #0a0a0a;
  font-weight: 400;
  line-height: 20px;
}

.show-all-link {
  padding: 12px 16px;
  border: none;
  background: transparent;
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #e74c3c;
  cursor: pointer;
  text-align: left;
  font-weight: 500;
}

.show-all-link:hover {
  background: rgba(0, 0, 0, 0.02);
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
/* Places item */
.place-item-simple {
  padding: 12px 16px;
}

.place-item-simple p {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #666;
  font-style: normal;
}

.place-item-simple em {
  font-style: italic;
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
