# IFCE Dashboard - Next.js

A beautiful, responsive dashboard for tracking student enrollments by campus in Ceará, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Pixel-perfect design** matching the original Figma specifications
- **Fully responsive** - works on mobile, tablet, and desktop
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom IFCE branding colors
- **Optimized images** with Next.js Image component
- **Custom fonts** (Inter & Arial) from Google Fonts

## 📊 Dashboard Components

- **Header** with Instituto Federal branding and navigation
- **Hero section** with main title and description
- **Statistics cards** showing key metrics with glassmorphic design
- **Filter controls** for year, course, and campus selection
- **Chart placeholder** ready for data visualization
- **Interactive map section** for geographical data
- **Complete footer** with contact information and e-MEC integration

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Navigate to the project directory:
   ```bash
   cd nextjs-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design System

### Colors
- **Primary Green**: `#116005`
- **Secondary Green**: `#178214` 
- **Tertiary Green**: `#217819`
- **Dark Green**: `#062601`

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Secondary Font**: Arial

## 📁 Project Structure

```
nextjs-dashboard/
├── app/
│   ├── globals.css          # Global styles and fonts
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage dashboard
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🚀 Deployment

The app can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Digital Ocean**

Build for production:
```bash
npm run build
```

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up  
- **Desktop**: 1024px and up
- **Large screens**: 1200px and up

## 🔧 Customization

### Adding New Colors
Update `tailwind.config.ts` to add new colors to the design system.

### Modifying Layout
The main layout is in `app/layout.tsx` and the homepage content is in `app/page.tsx`.

### Adding New Pages
Create new files in the `app/` directory following Next.js App Router conventions.

## 📄 License

This project is built for Instituto Federal de Educação, Ciência e Tecnologia do Estado do Ceará.

---

Built with ❤️ using Next.js 14 and Tailwind CSS
