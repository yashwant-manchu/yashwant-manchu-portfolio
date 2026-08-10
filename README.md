# Yashwant Manchu - Portfolio Website

[![CI](https://github.com/yashwant-manchu/yashwant-manchu-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/yashwant-manchu/yashwant-manchu-portfolio/actions/workflows/ci.yml)

A modern, responsive portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion. Featuring advanced animations, glassmorphism effects, and a sophisticated dark/light mode system.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- **Responsive**: Mobile-first approach ensuring great UX across all devices
- **Dark/Light Mode**: Advanced theme system with smooth transitions and persistence
- **Interactive Elements**: Custom cursor, hover effects, and scroll-triggered animations
- **Performance Optimized**: Fast loading times and SEO-friendly structure
- **Accessibility**: WCAG compliant with proper contrast and semantic markup

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Syne, Outfit & JetBrains Mono (Google Fonts)
- **Testing**: Jest & React Testing Library
- **CI**: GitHub Actions (lint, format check, tests, build on every push)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yashwant-manchu/yashwant-manchu-portfolio.git
   cd yashwant-manchu-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Available Scripts

| Command                 | Description                                |
| ----------------------- | ------------------------------------------ |
| `npm run dev`           | Start the development server               |
| `npm run build`         | Build for production                       |
| `npm run start`         | Serve the production build                 |
| `npm run lint`          | Run ESLint                                 |
| `npm run format`        | Format the codebase with Prettier          |
| `npm run format:check`  | Check formatting without writing changes   |
| `npm test`              | Run the Jest + React Testing Library suite |
| `npm run test:coverage` | Run tests with a coverage report           |

## 🏗️ Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── layout/
    │   ├── Navigation.tsx
    │   └── Footer.tsx
    ├── providers/
    │   └── ThemeProvider.tsx
    ├── sections/
    │   ├── HeroSection.tsx
    │   ├── AboutSection.tsx
    │   ├── ExperienceSection.tsx
    │   ├── SkillsSection.tsx
    │   ├── ProjectsSection.tsx
    │   └── ContactSection.tsx
    └── ui/
        └── CustomCursor.tsx
public/
└── Yashwant-Manchu-Resume.pdf
```

## 🎨 Customization

### Colors

The project uses a sophisticated color system with CSS variables and Tailwind CSS. You can customize the colors in:

- `tailwind.config.ts` - Theme colors
- `globals.css` - CSS custom properties

### Animations

All animations are built with Framer Motion. You can customize:

- Animation variants in individual components
- Global animation settings in `globals.css`

### Content

Update your personal information in:

- Individual section components in `src/components/sections/`
- Metadata in `src/app/layout.tsx`

## 🚀 Deployment

This repo is connected to Vercel via GitHub — every push to `master` triggers both the CI workflow above and a Vercel build/deploy. The live site is at [yashwant-manchu-portfolio.vercel.app](https://yashwant-manchu-portfolio.vercel.app).

To deploy your own fork:

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin master
   ```

2. **Deploy with Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's a Next.js project
   - Deploy with default settings

3. **Environment Setup**
   - The site itself needs no environment variables to build and run
   - The contact form needs `EMAIL_USER` and `EMAIL_PASS` (a Gmail address + [app password](https://myaccount.google.com/apppasswords)) set in Vercel's project settings, or it'll return a 500

### Deploy on Other Platforms

**Build for production:**

```bash
npm run build
npm run start
```

The app will be available at `http://localhost:3000`

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and includes:

- Mobile navigation with hamburger menu
- Responsive grid layouts
- Touch-friendly interactive elements
- Optimized images and performance

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles where needed
- Keyboard navigation support
- High contrast ratios for readability
- Screen reader compatible

## 🔧 Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads
- **SEO Optimization**: Meta tags, structured data, and semantic HTML
- **Performance Monitoring**: Web Vitals tracking ready

## 📞 Contact Information

- **Email**: <yashwanthmanchu059@gmail.com>
- **Phone**: +91 8367557617
- **Location**: Pune, Maharashtra, India
- **LinkedIn**: [linkedin.com/in/yashwant-manchu](https://linkedin.com/in/yashwant-manchu)
- **GitHub**: [github.com/yashwant-manchu](https://github.com/yashwant-manchu)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yashwant-manchu/yashwant-manchu-portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

### Made with ❤️ by Yashwant Manchu
