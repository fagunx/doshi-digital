# CodeCraft Studio - Fagun Doshi Portfolio

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Full-Stack .NET Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **PWA Ready**: Progressive Web App with offline support
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and structured data
- **Accessible**: WCAG compliant with proper ARIA labels
- **TypeScript**: Full type safety throughout the application
- **Modern Stack**: Built with React 18, Vite, and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Linting**: ESLint, Prettier
- **PWA**: Service Worker, Web App Manifest

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd doshi-digital-profile-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:prod` - Build for production with optimizations
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run analyze` - Analyze bundle size

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Custom components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── data/               # Static data (portfolio.json)
└── pages/              # Page components
```

## 🎨 Customization

### Updating Portfolio Data
Edit `src/data/portfolio.json` to update your personal information, skills, experience, and projects.

### Styling
- Colors and themes are defined in `src/index.css`
- Component styles use Tailwind CSS classes
- Custom animations are in the CSS file

### Adding New Sections
1. Create a new component in `src/components/`
2. Add it to the `Portfolio` component
3. Update navigation if needed

## 🌐 Deployment

### Deployment Platforms
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for deployment

## 📱 PWA Features

- **Offline Support**: Service worker caches essential resources
- **Installable**: Can be installed as a native app
- **Fast Loading**: Optimized assets and caching strategies

## 🔧 Development

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
- Husky for pre-commit hooks (recommended)

### Performance
- Lazy loading for components
- Optimized images and assets
- Bundle analysis with `npm run analyze`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Contact

- **Email**: fagun.doshi@email.com
- **LinkedIn**: [Fagun Doshi](https://linkedin.com/in/fagundoshi)
- **GitHub**: [fagundoshi](https://github.com/fagundoshi)
- **Portfolio**: [fagundoshi.dev](https://fagundoshi.dev)
