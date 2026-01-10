export const projects = [
  {
    slug: "blood-bridge",
    name: "Blood Bridge — MERN Blood Donation Platform",
    image: "/bloodbridge.png",
    description:
      "Full-stack MERN platform connecting donors and recipients with role-based dashboards (Admin/Donor/Volunteer), donor search, blog management, and Stripe funding.",
    live: "https://bloodbridge-donate-blood.web.app",
    githubClient: "https://github.com/your-username/bloodbridge-client",
    githubServer: "https://github.com/your-username/bloodbridge-server",
    credentials: { email: "admin@gmail.com", password: "A123456a", role: "Admin (demo)" },
    stack: [
      "React", "React Router", "Tailwind", "DaisyUI", "Axios", "React Query",
      "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Firebase Auth", "Stripe", "ImageBB", "React Hook Form", "Jodit"
    ],
    features: [
      "Donation Requests: create/edit/delete/track",
      "Role-based dashboards (Admin/Donor/Volunteer)",
      "User management: block & role change",
      "Donor search by blood group & location",
      "Blog management with rich text editor",
      "Stripe payments for fundraising",
      "Toasts and optimistic UX with React Query",
      "Fully responsive UI"
    ],
    challenges: [
      "JWT refresh flow and secure cookie handling with Firebase auth",
      "Stripe webhooks & idempotent payments",
      "Role-based routes and admin tools without over-fetching"
    ],
    improvements: [
      "Add rate limiting + audit logs for admin actions",
      "Service Worker caching for read-heavy routes",
      "Elastic search for donor/blog queries"
    ],
    hosting: "Client: Firebase • API: Vercel",
    tags: ["MERN", "Payments", "RBAC"]
  },
  {
    slug: "bulk-cartel",
    name: "Bulk Cartel — B2B Wholesale Marketplace",
    image: "/bulkcartel.png",
    description:
      "Global B2B marketplace for wholesale suppliers and resellers. Product listing, category browsing, protected routes, cart & checkout, JWT backend.",
    live: "https://bulkcartel-client.web.app",
    githubClient: "https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-hasnathg",
    githubServer: "https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-hasnathg",
    stack: [
      "React", "React Router", "Tailwind", "DaisyUI", "Firebase Auth",
      "Express", "MongoDB", "JWT", "Framer Motion", "SweetAlert2", "React Rating", "React Hot Toast"
    ],
    features: [
      "Email/Google Auth + JWT-secured APIs",
      "Add/update/list wholesale products",
      "Cart with live stock tracking",
      "Filter by category, toggle views",
      "Responsive, animated UI (Framer Motion)"
    ],
     challenges: [
      "Synchronizing cart stock with server-side inventory",
      "Protecting serverless routes with JWT + Firebase",
      "Animating list/grid view toggles smoothly"
    ],
    improvements: [
      "Vendor analytics dashboard",
      "Bulk CSV import for products",
      "Multi-currency pricing"
    ],
    hosting: "Client: Firebase • API: Vercel",
    tags: ["Marketplace", "JWT", "Animations"]
  },
  {
    slug: "green-circle",
    name: "Green Circle — Gardening Community Hub",
    image: "/greencircle.png",
    description:
      "Community platform to share gardening tips, discover local gardeners & events, with likes, filters, and theme toggle.",
    live: "https://greencircle-client.web.app",
    githubClient: "https://github.com/your-username/greencircle-client",
    githubServer: "https://greencircle-server.vercel.app/",
    stack: ["React", "Vite", "Tailwind", "React Router", "Firebase Auth", "Express", "MongoDB"],
    features: [
      "Create / view / like / update / delete tips",
      "Filter tips by difficulty & trending",
      "Top active gardeners",
      "Dark / Light mode",
      "Mobile-first responsive"
    ],
     challenges: [
      "Like + trending logic without heavy aggregation",
      "Filtering tips by difficulty without UX jank",
      "Theme toggle with persisted preference"
    ],
    improvements: [
      "User-to-user follows & notifications",
      "Event calendar & RSVP",
      "Rich text editor for tips"
    ],
    hosting: "Client: Firebase • API: Vercel",
    tags: ["Community", "CRUD", "Theming"]
  }
];