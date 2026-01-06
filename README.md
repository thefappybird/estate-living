<div align="center">

# 🏡 Estate Living Landing Page

### A Modern, Animated Real Estate Experience

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Enabled-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Overview

A stunning, **frontend-only** real estate landing page inspired by Airbnb's design philosophy. Built with modern web technologies, this project showcases smooth animations, scroll-triggered interactions, and a sophisticated user interface perfect for luxury property listings.

> **Note:** This is a static landing page with non-functional buttons — designed purely for visual impact and frontend demonstration.

---

## 🎯 Key Features

### 🎨 Design & Aesthetics
- **Warm Color Palette** — Terracotta accent with neutral tones for a luxury feel
- **Responsive Design** — Seamless experience across all devices
- **Modern Typography** — Playfair Display for elegance, Inter for readability
- **Airbnb-Inspired UI** — Clean, minimalist design with high-quality visuals

### 🚀 Animations & Interactions
- **Scroll-Triggered Animations** — Elements fade in and slide up as you scroll
- **Hover Effects** — Interactive property cards with smooth transitions
- **Parallax Effects** — Subtle depth in hero sections
- **Smooth Scrolling** — Butter-smooth navigation between sections
- **Staggered Animations** — Cascading reveals for feature cards and stats

### 📱 Sections
- ✅ **Sticky Navigation Header** — Always accessible with smooth backdrop blur
- ✅ **Hero Section** — Full-screen impact with search functionality UI
- ✅ **Features Grid** — Animated service highlights with icons
- ✅ **Property Showcase** — Grid of luxury listings with hover effects
- ✅ **Statistics Counter** — Impressive numbers with animated reveals
- ✅ **About Section** — Company story with team highlights
- ✅ **Call-to-Action** — Compelling conversion section
- ✅ **Comprehensive Footer** — Multi-column layout with social links

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 16** | React framework with App Router |
| **React 19** | UI component library |
| **TypeScript** | Type-safe development |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Animation library |
| **Lucide Icons** | Beautiful, consistent icons |
| **shadcn/ui** | High-quality component primitives |

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/luxestay-real-estate.git

# Navigate to project directory
cd luxestay-real-estate

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📁 Project Structure

```
luxestay-real-estate/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & theme tokens
├── components/
│   ├── header.tsx          # Sticky navigation header
│   ├── hero.tsx            # Hero section with search
│   ├── features.tsx        # Services/features grid
│   ├── property-grid.tsx   # Property listings showcase
│   ├── stats.tsx           # Animated statistics
│   ├── about.tsx           # About company section
│   ├── cta.tsx             # Call-to-action section
│   ├── footer.tsx          # Site footer
│   └── ui/                 # shadcn/ui components
├── hooks/
│   └── use-scroll-animation.ts  # Custom scroll detection hook
└── public/
    └── placeholder.svg     # Dynamic placeholder images
```

---

## 🎨 Customization

### Colors
Edit `app/globals.css` to customize the color scheme:

```css
@theme inline {
  --color-primary: 210 40% 40%;      /* Primary brand color */
  --color-accent: 15 60% 55%;        /* Terracotta accent */
  --color-background: 0 0% 100%;     /* White background */
  /* ... more tokens */
}
```

### Content
All content is located in component files. Update text, images, and property listings directly in:
- `components/hero.tsx` — Hero content
- `components/property-grid.tsx` — Property listings
- `components/about.tsx` — Company information

### Animations
Adjust animation timing and effects in individual components. Look for `framer-motion` variants like:

```tsx
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}
```

---

## 🌟 Features Showcase

### Smooth Scroll Animations
Every section uses intersection observers to trigger animations as elements enter the viewport, creating a dynamic and engaging user experience.

### Property Cards
Hover over property cards to see smooth scale transitions and shadow effects that make the interface feel premium and interactive.

### Responsive Grid System
The property grid automatically adjusts from 1 to 4 columns based on screen size, ensuring optimal viewing on any device.

---

## 📸 Screenshots

> **Hero Section**  
> Full-screen impact with search interface

> **Property Grid**  
> Responsive showcase of luxury listings

> **Animated Features**  
> Service highlights with smooth reveals

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💡 Inspiration

This project draws inspiration from:
- **Airbnb** — Clean, modern property listings
- **Luxury Real Estate Sites** — High-end visual presentation
- **Modern Web Design Trends** — Scroll animations and micro-interactions

---

## 📞 Contact

**Project Link:** [https://github.com/yourusername/luxestay-real-estate](https://github.com/yourusername/luxestay-real-estate)

**Live Demo:** [https://your-demo-url.vercel.app](https://your-demo-url.vercel.app)

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with ❤️ using Next.js and Tailwind CSS

</div>
