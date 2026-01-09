# CHM Search Toolbar - Vue.js Application

A search interface for the CHM (hiking) application, built with Vue.js 3 and Vite. This application implements the Figma design for a sophisticated search toolbar with filtering capabilities.

## Features

- 🔍 **Search Input**: Interactive search bar with query input
- 🏷️ **Filter Tabs**: Category-based filtering (All, Summer, Winter, Places)
- 📋 **Categorized Results**: Organized search results by category
  - Winter hiking trails
  - Snowshoe trekking routes
  - Accommodation listings
- 🎨 **Figma Design Implementation**: Pixel-perfect implementation from Figma design
- 🖼️ **Icon Assets**: Uses remote Figma assets for icons
- ⚡ **Fast Development**: Built with Vite for instant hot module replacement

## Design Source

This application implements the Figma design from:
`https://www.figma.com/design/mMm7mNxUy2zxrANAFHDRhs/TEST_CHM_Search_bar?node-id=1-3`

## Tech Stack

- **Vue.js 3**: Progressive JavaScript framework with Composition API
- **Vite**: Next-generation frontend tooling
- **CSS3**: Custom styling with no external UI frameworks
- **Google Fonts**: Arimo font family

## Project Structure

```
chm_poc/
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
├── src/
│   ├── main.js            # Application entry point
│   ├── App.vue            # Root component
│   ├── style.css          # Global styles
│   └── components/
│       └── SearchToolbar.vue  # Main search toolbar component
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Component Structure

### SearchToolbar.vue

The main component includes:

1. **Search Bar**
   - Search icon
   - Text input field
   - Clear button
   - Close button

2. **Filter Tabs**
   - All (120 results)
   - Summer (85 results)
   - Winter (51 results)
   - Places, place names and streets (32 results)

3. **Results Sections**
   - **Winter hiking**: Trail results with numbered badges
   - **Snowshoe trekking**: Route results with numbered badges
   - **Accommodation**: Hotel/hostel listings

## Customization

### Modifying Search Results

Edit the `SearchToolbar.vue` component to add or modify search results. The results are currently hardcoded but can be easily connected to an API.

### Styling

- Global styles: `src/style.css`
- Component-specific styles: Within each `.vue` file's `<style scoped>` section
- Font: Change the Arimo font in `index.html` if needed

### Icons

Icons are loaded from Figma's asset CDN. To use local icons:
1. Download the icons
2. Place them in `src/assets/`
3. Update the import paths in `SearchToolbar.vue`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Connect to real search API
- [ ] Add search functionality
- [ ] Implement filter logic
- [ ] Add loading states
- [ ] Add error handling
- [ ] Add animations/transitions
- [ ] Make responsive for mobile devices
- [ ] Add keyboard navigation
- [ ] Implement search history
- [ ] Add search suggestions/autocomplete

## License

This project is created as a proof of concept based on the CHM Figma design.

## Contributing

Feel free to submit issues and enhancement requests!
