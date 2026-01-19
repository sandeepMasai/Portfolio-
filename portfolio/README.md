# 🎨 Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Showcase your projects, skills, and experience in style!

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean and professional design with smooth animations
- **Component-Based**: Modular React components for easy maintenance and scalability
- **TypeScript Support**: Type-safe development with TypeScript
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Fast Development**: Powered by Vite for instant HMR (Hot Module Replacement)
- **Email Integration**: Contact form with EmailJS integration
- **SEO Ready**: Optimized structure for better search engine visibility

## 📋 Project Structure

```
portfolio/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # Entry point
│   ├── index.css            # Global styles
│   ├── App.css              # App styles
│   └── assets/              # Static assets
├── public/                  # Static files
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── eslint.config.js         # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sandeepMasai/Portfolio-.git
cd Portfolio-/portfolio
```

2. Install dependencies:
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

### Preview

Preview the production build:
```bash
npm run preview
```

### Linting

Check and lint your code:
```bash
npm run lint
```

## 📦 Dependencies

### Core Dependencies
- **React 19.1.1**: JavaScript library for building user interfaces
- **React DOM 19.1.1**: React package for working with the DOM
- **React Router DOM 7.9.4**: Declarative routing for React

### Utilities
- **Axios 1.12.2**: Promise-based HTTP client
- **EmailJS Browser 4.4.1**: Send emails directly from JavaScript
- **Lucide React 0.545.0**: Beautiful and consistent icon library

### Development Dependencies
- **Vite 7.1.7**: Next generation frontend tooling
- **TypeScript ~5.9.3**: JavaScript with syntax for types
- **Tailwind CSS 3.4.18**: Utility-first CSS framework
- **PostCSS 8.5.6**: Tool for transforming CSS
- **ESLint 9.36.0**: JavaScript linting utility

## 🛠️ Configuration Files

- **vite.config.ts**: Vite configuration for build and dev server
- **tailwind.config.js**: Tailwind CSS customization
- **tsconfig.json**: TypeScript compiler options
- **postcss.config.js**: PostCSS plugins configuration
- **eslint.config.js**: ESLint rules and configuration

## 🎯 Usage

### Adding New Sections

Create new components in `src/components/` and import them in `App.tsx`:

```tsx
import NewComponent from './components/NewComponent';

// Add to your App component
<NewComponent />
```

### Styling with Tailwind

Use Tailwind utility classes in your components:

```tsx
<div className="flex items-center justify-center bg-slate-900 text-white">
  Your content
</div>
```

### Contact Form Setup

The Contact component uses EmailJS. Configure your EmailJS credentials:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Add your service ID, template ID, and public key to the Contact component

## 📱 Responsive Breakpoints

The design uses Tailwind's responsive breakpoints:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔗 Links

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [EmailJS Documentation](https://www.emailjs.com/docs)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sandeep** - [@sandeepMasai](https://github.com/sandeepMasai)

---

**Happy Coding! 🚀**
