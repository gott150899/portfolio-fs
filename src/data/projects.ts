export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tags: string[]; // Short list for card
  tech: string[]; // Full list for details
  features: string[];
  image: string;
  repoLink: string;
  liveLink: string;
  color: string;
  colSpan: string;
  role: string;
  startDate?: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: "ivivu-member",
    title: "iVIVU Member",
    category: "Productivity",
    description: "Migrated the application from Angular 8 to Angular 21, refactoring legacy code to meet modern standards.",
    fullDescription: "Migrated the application from Angular 8 to Angular 21, refactoring legacy code to meet modern standards.",
    tags: ["Angular", "NgPrime", "Tailwindv4"],
    tech: ["Angular", "C#", "MS SQL", "NgPrime", "Tailwindv4", "Rxjs", "Ngrx Component Store", "FormBuilder"],
    features: [
      "Manage user information and profiles",
      "Create, update, and manage bookings",
      "View detailed booking information",
      "Manage vouchers and promotions",
      "Secure authentication and role-based authorization using JWT"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    repoLink: "",
    liveLink: "",
    color: "from-blue-500/20 to-blue-600/5",
    colSpan: "col-span-1 md:col-span-2",
    role: "Fullstack Developer. Implementing the UI/UX and integrating with Stitch and Antigravity",
    startDate: "07/2025",
    endDate: "Present"
  },
  {
    id: "ivivu-hotel",
    title: "iVIVU Hotel",
    category: "Productivity",
    description: "Successfully migrated a decade-old MVC-based hotel room booking system to Angular 19, leveraging modern features like reactive forms, lazy loading, and state management. Enhanced performance, UX, and maintainability. The upgrade delivers a faster, scalable, and more interactive platform for hotel reservations.",
    fullDescription: "Successfully migrated a decade-old MVC-based hotel room booking system to Angular 19, leveraging modern features like reactive forms, lazy loading, and state management. Enhanced performance, UX, and maintainability. The upgrade delivers a faster, scalable, and more interactive platform for hotel reservations.",
    tags: ["Angular", "TaigaUI", "Tailwindcss"],
    tech: ["Angular", "C#", "MS SQL", "TaigaUI", "Tailwindcss", "Rxjs", "Ngrx", "SSR", "Prerender", "FormBuilder", "Litepicker"],
    features: [
      "Enhanced and upgraded the user interface for better user experience",
      "Optimized the application build and render process",
      "Reduced bundle size to improve load time",
      "Refactored application logic to improve maintainability and performance"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2370&auto=format&fit=crop",
    repoLink: "",
    liveLink: "https://www.ivivu.com/",
    color: "from-emerald-500/20 to-emerald-600/5",
    colSpan: "col-span-1",
    role: "Fullstack Developer",
    startDate: "08/2024",
    endDate: "06/2025"
  },
  {
    id: "ivivu-bespoke",
    title: "iVIVU Bespoke",
    category: "Productivity",
    description: "The application allows KOLs and KOCs to create their personal pages in many different styles with many different layouts, advertise and schedule travel to interact with fans.",
    fullDescription: "The application allows KOLs and KOCs to create their personal pages in many different styles with many different layouts, advertise and schedule travel to interact with fans.",
    tags: ["Angular", "Antd", "Tailwindcss"],
    tech: ["Angular", "C#", "MS SQL", "Antd", "Tailwindcss", "Rxjs", "Ngrx", "SSR"],
    features: [
      "Analyze requirements and design scalable application architecture",
      "Design and implement a maintainable frontend architecture",
      "Implement SSR to improve performance and enhance Google SEO",
      "Build reusable components and manage global state using NgRx"
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2664&auto=format&fit=crop",
    repoLink: "",
    liveLink: "https://www.ivivu.com/bespoke",
    color: "from-violet-500/20 to-violet-600/5",
    colSpan: "col-span-1",
    role: "Fullstack Developer",
    startDate: "02/2024",
    endDate: "07/2024"
  },
  {
    id: "ivivu-xperience",
    title: "iVIVU Xperience",
    category: "Productivity",
    description: "A seamless ticketing solution connecting partners with customers to book and pay for entertainment activities instantly. Optimized for speed and convenience, it enhances customer experience while boosting sales for partners. Ideal for theme parks, events, and leisure venues seeking a modern, efficient booking system.",
    fullDescription: "A seamless ticketing solution connecting partners with customers to book and pay for entertainment activities instantly. Optimized for speed and convenience, it enhances customer experience while boosting sales for partners. Ideal for theme parks, events, and leisure venues seeking a modern, efficient booking system.",
    tags: ["Angular", "SCSS", "Ngx Boostrap"],
    tech: ["Angular", "C#", "MS SQL", "SCSS", "Ngx Boostrap", "SSR", "Rxjs"],
    features: [
      "Support secure online payments with instant e-ticket generation and delivery",
      "Implement Server-Side Rendering (SSR) to improve load speed and Google SEO",
      "Build reusable components and manage reactive data flows using Angular and RxJS"
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop",
    repoLink: "",
    liveLink: "https://www.ivivu.com/ve-vui-choi/",
    color: "from-orange-500/20 to-orange-600/5",
    colSpan: "col-span-1 md:col-span-2",
    role: "Fullstack Developer",
    startDate: "03/2023",
    endDate: "12/2023"
  },
];

export const sideProjects: Project[] = [
  {
    id: "emi-ecommerce",
    title: "EMI Ecommerce",
    category: "Productivity",
    description: "A specialized e-commerce platform for purchasing and managing English exam packages, featuring secure online payments and a seamless user experience.",
    fullDescription: "EMI Ecommerce is a specialized e-learning eCommerce platform focused on selling English test packages and online examinations. The application allows users to browse, purchase, and manage exam products through a seamless shopping experience. Users can access purchased exams, track completed tests, and review exam history. The platform supports secure payments via QR code and bank transfers integrated with Bao Kim and MoMo. Built with Angular, the system emphasizes performance, scalability, and a clean, user-friendly interface.",
    tags: ["Angular", "NgPrime", "Tailwindv4"],
    tech: ["Angular", "NgPrime", "Tailwindv4", "Rxjs", "Ngrx Component Store", "FromBuilder", "OAuth 2.0"],
    features: [
      "Browse English exam packages, add to cart, and complete purchases through a streamlined checkout flow",
      "View purchased exams, exam history, and completed test results in one place",
      "Support QR code and bank transfer payments via Bao Kim and MoMo payment gateways",
      "Manage application state using NgRx Component Store and RxJS for predictable and scalable data handling",
      "Build responsive interfaces with Tailwind CSS v4, NgPrime, and Angular FormBuilder"
    ],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2370&auto=format&fit=crop",
    repoLink: "",
    liveLink: "https://bandetest.mongvo.com/",
    color: "from-sky-500/20 to-sky-600/5",
    colSpan: "col-span-1",
    role: "Frontend Developer",
    startDate: "12/2025",
    endDate: "02/2026"
  },
  {
    id: "edux",
    title: "Education Management System",
    category: "Productivity",
    description: "A comprehensive education management system designed for universities to manage students, lecturers, courses, classes, and academic programs efficiently.",
    fullDescription: "EDUX is a comprehensive Education Management System built for university environments. The platform enables administrators and academic staff to manage students, lecturers, classes, courses, and curriculum frameworks in a centralized system. It supports structured academic data management, flexible program configurations, and efficient workflows for daily academic operations. Built with React and modern state management solutions, the application focuses on scalability, data consistency, and a clean, intuitive user experience for both administrators and faculty members.",
    tags: ["React", "Antd", "Tailwindv4"],
    tech: ["React", "Antd", "Tailwindv4", "Tanstack Query", "Zustand", "React Hook Form", "Zod"],
    features: [
      "Manage student profiles, lecturer information, and academic-related data",
      "Create and manage courses, classes, and subject assignments across semesters",
      "Define and manage curriculum frameworks, credit structures, and academic programs",
      "Handle server state with TanStack Query and global state with Zustand for scalable data flow",
      "Build robust forms using React Hook Form and Zod to ensure accurate and validated data input",
      "Design clean, responsive interfaces with Ant Design and Tailwind CSS v4",
    ],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=2574&auto=format&fit=crop",
    repoLink: "#",
    liveLink: "https://edux-beta.mongvo.com/",
    color: "from-orange-500/20 to-orange-600/5",
    colSpan: "col-span-1",
    role: "Frontend Developer",
    startDate: "05/2025",
    endDate: "11/2025"
  },
  {
    id: "vietgoal",
    title: "VietGoal",
    category: "Productivity",
    description: "A football academy management system for managing students, bookings, and football field operations efficiently.",
    fullDescription: "VietGoal is a comprehensive football academy management system designed to streamline the management of trainees, bookings, and football field operations. The platform allows administrators to create and manage student profiles, handle booking orders for training sessions and field usage, and track operational statistics. It also supports role-based access control to ensure secure and efficient system usage. Built with Angular and modern state management tools, VietGoal delivers a responsive, scalable, and user-friendly experience for sports academies and football centers.",
    tags: ["Angular", "Antd", "Taiwindcss"],
    tech: ["Angular", "C#", "Mongo DB", "Antd", "Taiwindcss", "Rxjs", "Ngrx", "FormBuilder"],
    features: [
      "Create and manage football trainee profiles, enrollment information, and training details",
      "Manage booking orders for training sessions and football field usage",
      "Track football field information, usage statistics, and operational data",
      "Implement user roles and permissions to manage system access securely",
      "Manage application state using NgRx and RxJS for scalable and predictable data handling",
      "Build dynamic forms with Angular FormBuilder and design responsive UIs using Ant Design and Tailwind CSS",
    ],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2370&auto=format&fit=crop",
    repoLink: "",
    liveLink: "https://vietgoal.com/",
    color: "from-purple-500/20 to-purple-600/5",
    colSpan: "col-span-1",
    role: "Fullstack Developer",
    startDate: "07/2023",
    endDate: "01/2024"
  },
];

