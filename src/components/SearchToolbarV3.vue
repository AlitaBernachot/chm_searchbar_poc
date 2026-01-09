<template>
  <div class="search-toolbar-v3">
    <!-- Search Toolbar Section -->
    <div class="toolbar-section">
      <div class="search-bar-wrapper">
        <!-- Search Bar -->
        <div class="search-bar">
          <div class="search-icon-container">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <input 
            v-model="searchQuery" 
            type="text" 
            class="search-input"
            placeholder="easy hikes"
          />
          <button class="clear-button" v-if="searchQuery">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="close-button">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs">
          <button 
            v-for="filter in filters" 
            :key="filter.name"
            :class="['filter-button', { active: activeFilter === filter.name }]"
            @click="activeFilter = filter.name"
          >
            {{ filter.name }} ({{ filter.count }})
          </button>
        </div>

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

        <!-- Results Section -->
        <div class="results-section">
          <!-- Hiking Results -->
          <div class="result-item">
            <div class="result-icon green">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="white"/>
                <path d="M8 14L10 10L12 12L14 10L16 14M12 18V22M8 22H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="result-content">
              <div class="result-name">Trans Swiss Trail</div>
              <div class="result-location">Porrentruy - Mendrisio</div>
            </div>
          </div>

          <div class="result-item">
            <div class="result-icon green">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="white"/>
                <path d="M8 14L10 10L12 12L14 10L16 14M12 18V22M8 22H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="result-content">
              <div class="result-name">Alpine Panorama Trail</div>
              <div class="result-location">Rorschach - Genève</div>
            </div>
          </div>

          <div class="result-item">
            <div class="result-icon green">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="white"/>
                <path d="M8 14L10 10L12 12L14 10L16 14M12 18V22M8 22H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="result-content">
              <div class="result-name">ViaJacobi</div>
              <div class="result-location">Rorschach- &#47; Konstanz (D) - Charrot (Grenze)</div>
            </div>
          </div>

          <button class="show-all-link">+ Show all</button>

          <!-- Snowshoe Trekking -->
          <div class="section-title">Snowshoe trekking (1)</div>
          <div class="result-item">
            <div class="result-badge pink">558</div>
            <div class="result-content">
              <div class="result-name">Maran-Easy-Trapper-Schneeschuhtrail</div>
              <div class="result-location">Arosa, Maran - Arosa, Maran</div>
            </div>
          </div>

          <!-- Places -->
          <div class="section-title">Places, place names and streets (50)</div>
          <div class="place-item">
            <em>Populated Place Hochhus (WW) - Wolfenschiessen</em>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <div class="content-container">
        <h1 class="main-heading">Discover the most beautiful trails in Switzerland</h1>
        
        <p class="intro-text">
          Switzerland offers an incredible variety of outdoor experiences throughout the year. From snow-covered peaks in 
          winter to sun-drenched alpine meadows in summer, there's always an adventure waiting for you.
        </p>

        <p class="description-text">
          Our comprehensive trail database includes thousands of tested routes, complete with detailed maps, 
          difficulty ratings, and real-time conditions. Whether you're planning a leisurely family hike or a challenging 
          mountain expedition, you'll find the perfect trail for your next adventure.
        </p>

        <p class="description-text">
          Explore winter hiking paths through pristine forests, snowshoe trekking routes with breathtaking panoramic views, 
          cross-country skiing trails for all skill levels, exciting sledding runs for the whole family, and countless summer hiking 
          opportunities across the Swiss Alps.
        </p>

        <!-- Footer Section -->
        <div class="footer-section">
          <div class="footer-column">
            <h3 class="footer-title">Language</h3>
            <div class="language-options">
              <button class="language-btn">DE</button>
              <button class="language-btn">FR</button>
              <button class="language-btn">IT</button>
              <button class="language-btn active">EN</button>
            </div>
          </div>

          <div class="footer-column">
            <h3 class="footer-title">Share page</h3>
            <button class="share-btn">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V12M16 6L12 2M12 2L8 6M12 2V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Share
            </button>
            
            <h3 class="footer-title follow-title">Follow us on</h3>
            <div class="social-icons">
              <button class="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.878V14.891H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.878C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z"/>
                </svg>
              </button>
              <button class="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 3H7.5C5.01472 3 3 5.01472 3 7.5V16.5C3 18.9853 5.01472 21 7.5 21H16.5C18.9853 21 21 18.9853 21 16.5V7.5C21 5.01472 18.9853 3 16.5 3Z" stroke="currentColor" stroke-width="2"/>
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="2"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </button>
              <button class="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"/>
                  <path d="M8 11V16M8 8V8.01M12 16V11M16 16V13.5M16 13.5V11C16 10.4477 15.5523 10 15 10H14.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498Z"/>
                  <path d="M10 15L15 12L10 9V15Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>

          <div class="footer-column">
            <h3 class="footer-title">Publishing credits</h3>
            <ul class="footer-links">
              <li><a href="#">Copyright and data protection</a></li>
              <li><a href="#">Warranty and liability disclaimer</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">SwitzerlandMobility for partners</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Legend</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3 class="footer-title">Public supporters of SwitzerlandMobility</h3>
            <div class="supporters">
              <div class="supporter-item">
                <span class="flag-icon">🇨🇭</span>
                <div>
                  <div class="supporter-name">Swiss Confederation</div>
                  <div class="supporter-org">ASTRA</div>
                </div>
              </div>
              <div class="supporter-item">
                <span class="flag-icon">🇨🇭</span>
                <div>
                  <div class="supporter-name">Cantonal Tourism</div>
                  <div class="supporter-org">All Swiss cantons represented</div>
                </div>
              </div>
              <div class="supporter-logo">
                <strong>Switzerland</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('easy hikes')
const activeFilter = ref('All')

const filters = [
  { name: 'All', count: 153 },
  { name: 'Summer', count: 100 },
  { name: 'Winter', count: 1 },
  { name: 'Places, place names and streets', count: 50 }
]
</script>

<style scoped>
.search-toolbar-v3 {
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: linear-gradient(to bottom, #e3f2fd 0%, #e3f2fd 400px, white 400px);
}

/* Toolbar Section */
.toolbar-section {
  width: 300px;
  flex-shrink: 0;
  background: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
}

.search-bar-wrapper {
  padding: 20px;
}

/* Search Bar */
.search-bar {
  display: flex;
  align-items: center;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 16px;
}

.search-icon-container {
  display: flex;
  align-items: center;
  margin-right: 8px;
}

.search-icon {
  width: 20px;
  height: 20px;
  color: #666;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  color: #333;
}

.clear-button,
.close-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 4px;
}

.clear-button:hover,
.close-button:hover {
  background: #f5f5f5;
}

.clear-button svg,
.close-button svg {
  width: 16px;
  height: 16px;
  color: #e74c3c;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.filter-button {
  padding: 6px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  font-family: 'Arimo', sans-serif;
  font-size: 12px;
  color: #333;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
}

.filter-button:hover {
  background: #f5f5f5;
}

.filter-button.active {
  background: #000;
  color: white;
  border-color: #000;
}

/* Best Matches Header */
.best-matches-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 12px;
  background: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 16px;
}

.best-matches-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Arimo', sans-serif;
  font-size: 13px;
  font-weight: 500;
}

.sparkle-icon {
  width: 16px;
  height: 16px;
}

.feedback-buttons {
  display: flex;
  gap: 4px;
  margin-left: auto;
}

.feedback-btn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

.feedback-btn svg {
  width: 14px;
  height: 14px;
  color: #666;
}

.difficulty-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: #e8f5e9;
  border: 1px solid #4caf50;
  border-radius: 16px;
  font-size: 11px;
  color: #2e7d32;
  font-weight: 500;
}

.tree-icon {
  width: 12px;
  height: 12px;
}

.difficulty-indicator {
  font-size: 12px;
  color: #666;
}

.difficulty-indicator strong {
  color: #333;
}

/* Results Section */
.results-section {
  padding-top: 8px;
}

.result-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s;
}

.result-item:hover {
  background: #f5f5f5;
}

.result-icon {
  width: 40px;
  height: 40px;
  border-radius: 6px;
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

.result-badge {
  width: 40px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: 600;
  font-size: 14px;
  color: white;
}

.result-badge.pink {
  background: #e91e63;
}

.result-content {
  flex: 1;
  min-width: 0;
}

.result-name {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 2px;
}

.result-location {
  font-family: 'Arimo', sans-serif;
  font-size: 12px;
  color: #666;
}

.show-all-link {
  padding: 12px;
  margin: 8px 0;
  border: none;
  background: transparent;
  color: #e74c3c;
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  width: 100%;
}

.section-title {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 16px 0 8px;
  padding: 0 12px;
}

.place-item {
  padding: 12px;
  font-family: 'Arimo', sans-serif;
  font-size: 13px;
  color: #666;
}

.place-item em {
  font-style: italic;
}

/* Content Section */
.content-section {
  flex: 1;
  padding: 60px 80px;
  overflow-y: auto;
}

.content-container {
  max-width: 900px;
}

.main-heading {
  font-family: 'Arimo', sans-serif;
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 30px;
  line-height: 1.3;
}

.intro-text {
  font-family: 'Arimo', sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
}

.description-text {
  font-family: 'Arimo', sans-serif;
  font-size: 15px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 18px;
}

/* Footer Section */
.footer-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid #e0e0e0;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-title {
  font-family: 'Arimo', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
}

.follow-title {
  margin-top: 16px;
}

.language-options {
  display: flex;
  gap: 8px;
}

.language-btn {
  padding: 6px 12px;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 4px;
  font-family: 'Arimo', sans-serif;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.language-btn:hover {
  background: #f5f5f5;
}

.language-btn.active {
  background: #000;
  color: white;
  border-color: #000;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 4px;
  font-family: 'Arimo', sans-serif;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}

.share-btn:hover {
  background: #f5f5f5;
}

.share-btn svg {
  width: 16px;
  height: 16px;
}

.social-icons {
  display: flex;
  gap: 8px;
}

.social-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.social-btn:hover {
  background: #f5f5f5;
}

.social-btn svg {
  width: 20px;
  height: 20px;
  color: #555;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-links a {
  font-family: 'Arimo', sans-serif;
  font-size: 13px;
  color: #e74c3c;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #c0392b;
}

.supporters {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.supporter-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.flag-icon {
  font-size: 24px;
}

.supporter-name {
  font-family: 'Arimo', sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #333;
}

.supporter-org {
  font-family: 'Arimo', sans-serif;
  font-size: 11px;
  color: #666;
}

.supporter-logo {
  padding: 12px;
  background: #f5f5f5;
  border-radius: 4px;
  text-align: center;
  font-family: 'Arimo', sans-serif;
  font-size: 16px;
  color: #e74c3c;
}

/* Scrollbar Styling */
.toolbar-section::-webkit-scrollbar,
.content-section::-webkit-scrollbar {
  width: 8px;
}

.toolbar-section::-webkit-scrollbar-track,
.content-section::-webkit-scrollbar-track {
  background: #f5f5f5;
}

.toolbar-section::-webkit-scrollbar-thumb,
.content-section::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 4px;
}

.toolbar-section::-webkit-scrollbar-thumb:hover,
.content-section::-webkit-scrollbar-thumb:hover {
  background: #999;
}

/* Responsive */
@media (max-width: 1024px) {
  .search-toolbar-v3 {
    flex-direction: column;
  }

  .toolbar-section {
    width: 100%;
  }

  .content-section {
    padding: 40px 20px;
  }

  .footer-section {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
