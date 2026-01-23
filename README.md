# Visual Storytelling Studio

A modern, responsive portfolio website showcasing the work of Sicong Chen, a product designer specializing in B2B operational platforms and AI-powered experiences.

## 🚀 Features

- **Modern Tech Stack**: Built with React, TypeScript, Vite, and Tailwind CSS
- **Beautiful UI**: Custom-designed with shadcn/ui components and Framer Motion animations
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Lazy loading, optimized images, and efficient code splitting
- **Accessible**: WCAG-compliant with proper ARIA labels and keyboard navigation
- **SEO Ready**: Meta tags and structured data for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **State Management**: React Query (configured, ready for API integration)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
src/
├── assets/          # Images, videos, and other static assets
├── components/      # React components
│   ├── ui/         # shadcn/ui component library
│   └── ...         # Feature components
├── data/           # Shared data (projects, etc.)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
└── main.tsx        # Application entry point
```

## 🎨 Design System

The project uses a custom beige color palette with:
- **Primary Colors**: Custom beige (#EAE8D5) with dark mode support
- **Typography**: Zodiak (serif) for headings, Inter (sans-serif) for body text
- **Animations**: Smooth, easing-based transitions using Framer Motion

## 📄 Pages

- **Home** (`/`): Hero section, featured projects, philosophy, clients, and testimonials
- **Work** (`/work`): Grid view of all projects
- **About** (`/about`): Personal story and professional background
- **Project Detail** (`/project/:id`): Detailed case study for each project

## 🔧 Configuration

### Environment Variables

No environment variables are currently required. If you need to add API endpoints or other configuration, create a `.env` file:

```env
VITE_API_URL=your_api_url_here
```

### Customization

- **Colors**: Edit `src/index.css` for color scheme changes
- **Typography**: Update font imports in `index.html` and `tailwind.config.ts`
- **Project Data**: Edit `src/data/projects.ts` to update project information

## 🚢 Deployment

The project can be deployed to any static hosting service:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

### Recommended Platforms

- **Vercel**: Automatic deployments from Git
- **Netlify**: Easy static site hosting
- **GitHub Pages**: Free hosting for public repos

## 📝 Development Notes

- All project data is centralized in `src/data/projects.ts` for easy maintenance
- Components follow a consistent structure and naming convention
- Error boundaries are implemented for graceful error handling
- Images use lazy loading for optimal performance

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please open an issue.

## 📄 License

Private project - All rights reserved.

## 👤 Author

**Sicong Chen**
- Portfolio: [sicongchen.com](https://sicongchen.com)
- LinkedIn: [linkedin.com/in/sicongchen](https://linkedin.com/in/sicongchen)
- Email: hello@sicongchen.com

---

Built with ❤️ using modern web technologies
