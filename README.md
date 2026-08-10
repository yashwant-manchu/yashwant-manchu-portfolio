# Yashwant Manchu - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Featuring advanced animations, glassmorphism effects, and a sophisticated dark/light mode system.

## 🚀 Features

- **Modern Design**: Glassmorphism effects, gradient backgrounds, and smooth animations
- **Responsive**: Mobile-first approach ensuring great UX across all devices
- **Dark/Light Mode**: Advanced theme system with smooth transitions and persistence
- **Interactive Elements**: Custom cursor, hover effects, and scroll-triggered animations
- **Performance Optimized**: Fast loading times and SEO-friendly structure
- **Accessibility**: WCAG compliant with proper contrast and semantic markup

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yashwantmanchu/portfolio.git
   cd portfolio
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

## 🏗️ Project Structure

├── app/
│ ├── globals.css
│ ├── layout.tsx
│ └── page.tsx
├── components/
│ ├── layout/
│ │ ├── Navigation.tsx
│ │ └── Footer.tsx
│ ├── providers/
│ │ └── ThemeProvider.tsx
│ ├── sections/
│ │ ├── HeroSection.tsx
│ │ ├── AboutSection.tsx
│ │ ├── ExperienceSection.tsx
│ │ ├── SkillsSection.tsx
│ │ ├── ProjectsSection.tsx
│ │ └── ContactSection.tsx
│ └── ui/
│ └── CustomCursor.tsx
├── public/
└── package.json

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

- Individual section components in `components/sections/`
- Metadata in `app/layout.tsx`

## 🚀 Deployment

### Deploy on Vercel

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy with Vercel**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's a Next.js project
   - Deploy with default settings

3. **Environment Setup**
   - No environment variables required for basic functionality
   - Add any API keys or external service configurations as needed

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
- **Location**: Nellore, A.P, India
- **LinkedIn**: [linkedin.com/in/yashwant-manchu](https://linkedin.com/in/yashwant-manchu)
- **GitHub**: [github.com/yashwant-manchu](https://github.com/yashwant-manchu)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yashwantmanchu/portfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

### Made with ❤️ by Yashwant Manchu
