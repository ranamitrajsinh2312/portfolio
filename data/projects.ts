export interface Project {
  id: string;
  title: string;
  description: string;
  badge: string;
  badgeClass: string;
  stack: string[];
  github: string;
  featured?: boolean;
  borderGradient: string;
}

export const projectsData: Project[] = [
  {
    id: "jewellery",
    title: "Jewellery Shop E-Commerce",
    description:
      "A full-stack e-commerce platform for a jewellery business, featuring separate admin and customer portals. Includes product management, cart functionality, order tracking, and secure user authentication.",
    badge: "⭐ Featured — MERN Stack",
    badgeClass: "badge-mern",
    stack: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth"],
    github: "https://github.com/ranamitrajsinh2312",
    featured: true,
    borderGradient: "linear-gradient(90deg, #34d399, #6c63ff)",
  },
  {
    id: "matrimonial",
    title: "Matrimonial App",
    description:
      "A cross-platform mobile matchmaking application with user authentication, profile management, and advanced search filters for finding compatible matches.",
    badge: "Flutter",
    badgeClass: "badge-flutter",
    stack: ["Flutter", "Firebase", "REST API"],
    github: "https://github.com/ranamitrajsinh2312",
    borderGradient: "linear-gradient(90deg, #38bdf8, #54c5f8)",
  },
  {
    id: "expense",
    title: "Expense Manager",
    description:
      "A web app to track personal income and expenses with interactive analytics charts, helping users visualize their spending habits and financial trends over time.",
    badge: "Next.js",
    badgeClass: "badge-next",
    stack: ["Next.js", "React", "Chart.js", "MongoDB"],
    github: "https://github.com/ranamitrajsinh2312",
    borderGradient: "linear-gradient(90deg, #a78bfa, #6c63ff)",
  },
  {
    id: "cardio",
    title: "Cardio Disease Predictor",
    description:
      "A classification ML model that predicts cardiovascular disease risk from patient health data. Applied preprocessing, feature selection, and cross-validation for reliable accuracy.",
    badge: "Machine Learning",
    badgeClass: "badge-ml",
    stack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/ranamitrajsinh2312",
    borderGradient: "linear-gradient(90deg, #fbbf24, #f7931e)",
  },
  {
    id: "house",
    title: "House Price Predictor",
    description:
      "A regression model that estimates real estate prices using housing datasets. Evaluated multiple algorithms and optimized for accuracy using cross-validation techniques.",
    badge: "Machine Learning",
    badgeClass: "badge-ml",
    stack: ["Python", "scikit-learn", "NumPy", "Regression"],
    github: "https://github.com/ranamitrajsinh2312",
    borderGradient: "linear-gradient(90deg, #fbbf24, #f7931e)",
  },
  {
    id: "typing",
    title: "Typing Tutor",
    description:
      "An interactive typing practice tool that tracks WPM (words per minute) and accuracy in real time. Includes difficulty levels and session progress tracking for skill improvement.",
    badge: "Web App",
    badgeClass: "badge-web",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ranamitrajsinh2312",
    borderGradient: "linear-gradient(90deg, #f472b6, #a78bfa)",
  },
];
