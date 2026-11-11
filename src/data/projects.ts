import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Rentique – Luxury Fashion Rental Marketplace',
    description: 'A luxury fashion rental marketplace built with React 18 and TypeScript. Features date-range availability and booking engines with mathematical interval overlap detection, automated cleaning buffers, multi-tier rental discounts, and refundable deposit calculations. Includes an admin dashboard with role-based route protection and 34 automated tests.',
    technologies: ['React 18', 'TypeScript', 'Tailwind CSS v3', 'TanStack Query', 'Vite', 'Recharts', 'Vitest'],
    githubUrl: 'https://github.com/basheebilalwani/rentique.git',
    demoUrl: 'https://rentique-rho.vercel.app/',
    imageUrl: '/projects/rentique.png',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Auré – Clean Beauty E-Commerce Platform',
    description: 'An interactive cosmetics storefront featuring 36 product variants, multi-attribute filtering, debounced search, and URL-synchronized catalogue navigation. Includes an interactive shade selection system syncing product swatches, undertones, and stock availability, plus persistent cart management with a free-shipping progress indicator and a three-step routine builder with automatic 15% bundle discounts.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router', 'Context API'],
    githubUrl: 'https://github.com/basheebilalwani/aure.git',
    demoUrl: 'https://aure-omega.vercel.app/',
    imageUrl: '/projects/aure.png',
    featured: true,
  },
];
