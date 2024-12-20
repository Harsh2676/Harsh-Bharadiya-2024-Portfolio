# Harsh's React Portfolio - (Made Using React.js)

A modern, responsive portfolio website built with React.js to showcase my web development projects and skills. This portfolio features smooth animations, interactive components, and a clean, professional design.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that adapts seamlessly to all screen sizes and devices
- **Smooth Animations**: 
  - Implemented AOS (Animate On Scroll) for engaging scroll-based animations
  - Locomotive Scroll for smooth scrolling experience
  - Dynamic type animations for interactive text displays
- **Project Showcase**:
  - Modal views for detailed project information
  - Filterable project gallery
  - Interactive project cards with hover effects
- **Contact Integration**:
  - Fully functional contact form using EmailJS
  - Real-time form validation
  - Automated email notifications
- **Navigation**:
  - Smooth scroll navigation
  - Mobile-friendly navigation menu
  - Active section highlighting
- **Performance**:
  - Optimized image loading
  - Efficient component rendering
  - Fast page transitions

## 🛠️ Built With

### Core Technologies
- **React.js** - Frontend library for building user interfaces
- **Bootstrap 5** - CSS framework for responsive layouts
- **SCSS** - CSS preprocessor for advanced styling

### Key Dependencies
- **EmailJS** - Email service integration for contact form
- **AOS** - Animate On Scroll library for scroll-based animations
- **React Router** - For handling navigation and routing
- **React Slick** - Carousel component for project showcases
- **React Type Animation** - Text animation effects
- **Locomotive Scroll** - Smooth scrolling functionality

## 📋 Project Structure



### Key Directories

#### `/src/components`
Contains reusable React components. Each component is responsible for a specific section or functionality of the portfolio:
- `Hero.jsx` - Landing section with animated typing effect
- `Projects.jsx` - Project showcase with modal views
- `Contact.jsx` - EmailJS integrated contact form

#### `/src/scss`
Organized SCSS structure for maintainable styling:
- `_base.scss` - Base styles and resets
- `_style.scss` - Component-specific styles
- `_mixin.scss` - Responsive design mixins
- `_root.scss` - CSS custom properties

#### `/src/data`
Contains `HomePagdData.json` which centralizes all content including:
- Hero section content
- Project details
- Experience information
- Contact information
- Social media links

### Styling Structure

The project uses a combination of:
- Bootstrap 5 for responsive grid and components
- Custom SCSS with:
  - Responsive mixins (mobile-first approach)
  - CSS custom properties for theming
  - Component-specific style modules

### Component Architecture

Components are organized by feature and follow these principles:
- Modular and reusable design
- Props-based configuration
- Separation of concerns (styling, logic, content)
- Responsive design integration
- Animation integration using AOS and custom transitions

### Build and Development

The project uses Create React App with additional configurations for:
- SCSS processing
- Image optimization
- Development hot reloading
- Production builds with optimization

To start development:

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh2676/Harsh-React-Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   This will run the app in development mode at [http://localhost:3000](http://localhost:3000)

4. For production build:
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `build` folder
