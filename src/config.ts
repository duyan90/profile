export const siteConfig = {
  name: "Duy An Nguyen",
  title: "Full-Stack Angular & Node.js Developer",
  description:
    "Full-stack developer with 9+ years of experience building enterprise web applications using Angular, Node.js, and modern web technologies. Passionate about clean code, scalable architecture, and delivering business value.",
  accentColor: "#1d4ed8",

  social: {
    email: "nguyenduyan90@gmail.com",
    linkedin: "https://www.linkedin.com/in/duy-an-nguyễn-26a0726a/",
    github: "https://github.com/duyan90",
  },

  aboutMe: `
I am a Full-Stack Developer specializing in Angular and Node.js. 
With more than 9 years of professional experience, I have worked on enterprise-scale applications for global clients in agile teams. 
I focus on building responsive, performant, and SEO-friendly applications with modern technologies such as Angular SSR, RxJS Signals, and TailwindCSS. 
I enjoy mentoring junior developers and collaborating in cross-functional teams to deliver high-quality software.
  `,

  skills: [
    "Angular (v18+)",
    "RxJS / Signals",
    "TailwindCSS",
    "Responsive UI",
    "Node.js",
    "NestJS",
    "Express.js",
    "REST API / GraphQL",
    "PostgreSQL / MySQL / MongoDB",
    "SignalR",
    "Plotly",
    "Git / Docker",
    "CI/CD (GitHub Actions)",
    "Agile / Scrum"
  ],

  projects: [
    {
      name: "E-Commerce Platform",
      description:
        "An SSR Angular & Node.js e-commerce site with Stripe integration and real-time order tracking.",
      link: "https://myecommerce-demo.vercel.app",
      skills: ["Angular SSR", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"]
    },
    {
      name: "SaaS Dashboard",
      description:
        "Enterprise dashboard with analytics, role-based access, and data visualization using Plotly.",
      link: "https://demo-saas.vercel.app",
      skills: ["Angular", "NestJS", "MongoDB", "Plotly"]
    },
    {
      name: "Portfolio Website",
      description:
        "Personal developer portfolio built with Angular SSR + TailwindCSS, deployed on Vercel.",
      link: "https://duyan-portfolio.vercel.app",
      skills: ["Angular", "TailwindCSS", "Vercel"]
    }
  ],

  experience: [
    {
      company: "FPT Software",
      title: "Angular Developer",
      dateRange: "Apr 2021 – Present",
      bullets: [
        "Developed and maintained large-scale Angular applications for enterprise clients.",
        "Implemented real-time communication features with SignalR.",
        "Improved application performance by 30% using SSR and lazy loading.",
        "Worked in Agile teams of 6–10 developers, delivering features on time."
      ]
    },
    {
      company: "TC Systems Vietnam",
      title: "JavaScript Developer",
      dateRange: "Dec 2019 – Apr 2021",
      bullets: [
        "Developed web applications with Angular and Node.js backend.",
        "Integrated third-party APIs and optimized UI responsiveness."
      ]
    },
    {
      company: "Nexle Corporation",
      title: "JavaScript Developer",
      dateRange: "May 2019 – Nov 2019",
      bullets: [
        "Built cross-platform web apps with Angular.",
        "Improved code quality with unit testing (Jasmine/Karma)."
      ]
    },
    {
      company: "Axon Active Vietnam",
      title: "JavaScript Developer",
      dateRange: "Aug 2017 – May 2019",
      bullets: [
        "Developed and maintained Angular projects for international clients.",
        "Collaborated in Scrum teams, closely working with QA and designers."
      ]
    },
    {
      company: "bbv Software Services",
      title: "Java Developer",
      dateRange: "Oct 2016 – Jul 2017",
      bullets: ["Maintained and developed enterprise Java web applications."]
    },
    {
      company: "Cosatech",
      title: "Java Developer",
      dateRange: "Apr 2015 – Aug 2016",
      bullets: ["Developed and maintained Java enterprise solutions."]
    },
    {
      company: "Infonam",
      title: "Java Developer",
      dateRange: "Jun 2014 – Feb 2016",
      bullets: ["Worked on Java-based enterprise applications."]
    }
  ],

  education: [
    {
      school: "Ho Chi Minh University of Technology",
      degree: "Bachelor of Software Engineering",
      dateRange: "2009 – 2014",
      achievements: ["Graduated with strong foundation in Computer Science & Engineering"]
    }
  ]
};
