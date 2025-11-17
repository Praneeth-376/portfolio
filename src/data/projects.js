export const projects = [
  {
    id: 'bus-tracker',
    title: 'Bus Transport Tracker',
    short: 'Real-time tracking & booking system for campus buses',
    description: 'A comprehensive real-time bus tracking and booking platform built for campus transportation. Features include live GPS tracking, route optimization, booking system with seat selection, push notifications for bus arrivals, and admin dashboard for fleet management. Implemented WebSocket connections for real-time updates and integrated Google Maps API for accurate location tracking.',
    stack: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'Google Maps API', 'Redux'],
    features: [
      'Real-time GPS tracking with live map updates',
      'Seat booking system with availability checking',
      'Push notifications for bus arrivals',
      'Route optimization algorithm',
      'Admin dashboard for fleet management',
      'Historical trip data and analytics'
    ],
    repo: 'https://github.com/yourusername/bus-tracker',
    live: 'https://bus-tracker-demo.vercel.app',
    thumbnail: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=1200&h=800&fit=crop'
    ],
    category: 'Full Stack',
    year: 2024
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    short: 'Modern e-commerce solution with AI recommendations',
    description: 'Full-featured e-commerce platform with AI-powered product recommendations, advanced filtering, shopping cart, wishlist, order tracking, and secure payment integration. Built with microservices architecture for scalability. Includes seller dashboard, inventory management, and analytics.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'TensorFlow.js', 'Redis'],
    features: [
      'AI-powered product recommendations',
      'Advanced search and filtering',
      'Shopping cart and wishlist',
      'Secure payment with Stripe',
      'Order tracking system',
      'Seller dashboard and analytics'
    ],
    repo: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.vercel.app',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop'
    ],
    category: 'Full Stack',
    year: 2024
  },
  {
    id: 'task-manager',
    title: 'Collaborative Task Manager',
    short: 'Team productivity tool with real-time collaboration',
    description: 'A modern task management application designed for team collaboration. Features include drag-and-drop kanban boards, real-time updates, task assignments, deadline tracking, file attachments, commenting system, and productivity analytics. Built with performance optimization for handling large datasets.',
    stack: ['React', 'Firebase', 'Material-UI', 'React Beautiful DnD', 'Chart.js'],
    features: [
      'Drag-and-drop kanban boards',
      'Real-time collaboration',
      'Task assignments and deadlines',
      'File attachments and comments',
      'Productivity analytics dashboard',
      'Email notifications'
    ],
    repo: 'https://github.com/yourusername/task-manager',
    live: 'https://task-manager-demo.vercel.app',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop'
    ],
    category: 'Web App',
    year: 2024
  },
  {
    id: 'weather-app',
    title: 'Weather Forecast App',
    short: 'Beautiful weather app with 7-day forecasts',
    description: 'Elegant weather application providing detailed weather information, 7-day forecasts, hourly predictions, and severe weather alerts. Features location-based weather, multiple location saves, weather maps, and beautiful data visualizations. Built with PWA capabilities for offline access.',
    stack: ['React', 'OpenWeather API', 'Recharts', 'Tailwind CSS', 'PWA'],
    features: [
      '7-day weather forecasts',
      'Hourly predictions',
      'Severe weather alerts',
      'Interactive weather maps',
      'Multiple location saves',
      'PWA with offline support'
    ],
    repo: 'https://github.com/yourusername/weather-app',
    live: 'https://weather-app-demo.vercel.app',
    thumbnail: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop'
    ],
    category: 'Web App',
    year: 2023
  },
  {
    id: 'portfolio-builder',
    title: 'Portfolio Builder',
    short: 'No-code portfolio website creator',
    description: 'A SaaS platform that allows users to create beautiful portfolio websites without coding. Features include drag-and-drop builder, customizable templates, theme editor, custom domain support, SEO optimization, and analytics dashboard. Built with multi-tenancy architecture.',
    stack: ['Vue.js', 'Nuxt', 'Supabase', 'Tailwind CSS', 'Vercel'],
    features: [
      'Drag-and-drop website builder',
      '20+ customizable templates',
      'Theme editor with live preview',
      'Custom domain support',
      'Built-in SEO optimization',
      'Analytics dashboard'
    ],
    repo: 'https://github.com/yourusername/portfolio-builder',
    live: 'https://portfolio-builder-demo.vercel.app',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop'
    ],
    category: 'SaaS',
    year: 2023
  },
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    short: 'Secure messaging platform with end-to-end encryption',
    description: 'Modern chat application with real-time messaging, group chats, file sharing, voice/video calls, and end-to-end encryption. Features include message reactions, typing indicators, read receipts, message search, and user presence system.',
    stack: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB', 'AWS S3'],
    features: [
      'Real-time messaging',
      'Group chats and channels',
      'Voice and video calls',
      'End-to-end encryption',
      'File sharing (images, videos, documents)',
      'Message search and history'
    ],
    repo: 'https://github.com/yourusername/chat-app',
    live: 'https://chat-app-demo.vercel.app',
    thumbnail: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=1200&h=800&fit=crop'
    ],
    category: 'Web App',
    year: 2023
  }
];

export const categories = ['All', 'Full Stack', 'Web App', 'SaaS', 'Mobile'];