export const DATA = {
  home: {
    hero: {
      name: "Hi, I'm N K Nandini – I design & code modern web experiences",
      title: "Passionate 3rd-Year ECE Student Exploring Emerging Tech & IoT",
      subtitle: "I build fast, accessible, and visually engaging web experiences.",
    },
    skills: {
      sectionTitle: "Skills & Expertise",
      sectionDescription:
        "Specialized in creating modern digital experiences with cutting-edge technologies",
      overview: [
        { name: "UI/UX Design", level: 95, icon: "lucide:layout-dashboard", color: "primary" },
        { name: "Frontend Development", level: 90, icon: "lucide:code", color: "secondary" },
        { name: "Mobile Development", level: 85, icon: "lucide:smartphone", color: "success" },
        { name: "Full Stack Learning", level: 60, icon: "lucide:layers", color: "success" },
        { name: "Electronics & Embedded Fundamentals", level: 88, icon: "lucide:cpu", color: "warning" },
      ],
      skills: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Node.js",
        "Python",
        "MySQL",
        "Figma",
        "Flutter",
        "Embedded Systems",
        "IoT",
        "Java",
        "C",
      ],
    },
    testimonials: {
      sectionTitle: "Testimonials",
      sectionDescription: "What people say about me",
      items: [
        {
          name: "Harish",
          role: "Mentor",
          content: "Nandini is an aspiring designer with great curiosity and creativity.",
          avatar: "https://i.pravatar.cc/150?img=5",
        },
      ],
    },
  },

  about: {
    profile: {
      name: "N K Nandini",
      title: "Aspiring 3rd-year ECE student who wants to learn, build, and grow in technology",
      image: "https://res.cloudinary.com/dwaof9ryo/image/upload/v1765087291/ima_zfpo0z.jpg",
      description: [
        "I'm an aspiring tech enthusiast with a love for coding, embedded systems, IoT, and clean UI/UX design. I focus on building projects that are both functional and visually engaging.",
        "My approach combines curiosity and creativity — I enjoy turning ideas into real-world applications while learning the latest tools like Flutter, React, and TailwindCSS.",
        "Outside of coding, I experiment with motion design, explore innovative tech concepts, and constantly challenge myself to learn and create more.",
      ],
    },
    education: [
      {
        title: "Kendriya Vidyalaya IIT Madras Chennai (CBSE)",
        date: "2019 - 2020",
        icon: "mdi:palette",
        description: "Completed 10th grade with 80% marks.",
      },
      {
        title: "Kendriya Vidyalaya IIT Madras Chennai (Senior Secondary)",
        date: "2022 - 2023",
        icon: "mdi:school",
        description:
          "Completed 12th grade with 64%, developing interest in electronics, coding, and emerging technologies.",
      },
      {
        title: "KCG College of Technology",
        date: "2023 - 2027",
        icon: "mdi:school-outline",
        description: "8 CGPA till 5th semester.",
      },
    ],
    languages: ["Tamil", "English", "Malayalam", "Hindi"],
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "skill-icons:nextjs-dark" },
      { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Python", icon: "logos:python" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Flutter", icon: "logos:flutter" },
      { name: "Embedded Systems", icon: "lucide:cpu" },
      { name: "IoT", icon: "lucide:wifi" },
      { name: "Java", icon: "logos:java" },
      { name: "C", icon: "logos:c" },
    ],
    experience: [
      {
        title: "bigbucks internship (UI/UX developer)",
        date: "July 10 - July 30 2025",
        icon: "mdi:briefcase",
        description:
          "Building projects in UI/UX design, frontend development, IoT, and embedded systems. Learning React, Next.js, Flutter, and modern web technologies.",
      },
    ],
    technologies: {
      frontend: {
        description: "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
        ],
      },
      backend: {
        description: "I build fast APIs and scalable backends using Node.js, Bun, and Python.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Bun", icon: "logos:bun" },
          { name: "Python", icon: "logos:python" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgreSQL", icon: "logos:postgresql" },
          { name: "OpenAI", icon: "simple-icons:openai" },
        ],
      },
      uiUx: {
        description: "I design smooth, user-centered interfaces and high-fidelity prototypes.",
        tools: [
          { name: "Figma", icon: "logos:figma" },
          { name: "Framer", icon: "simple-icons:framer", color: "#0055FF" },
        ],
      },
      coreSkills: {
        description:
          "Proficient in C, Java, Flutter, UI/UX Design, Embedded Systems, IoT, Figma, and VS Code.",
      },
      flutter: { description: "Builds cross-platform mobile apps with Flutter." },
      ciscoPacketTracer: { description: "Networking simulations, embedded systems, and IoT." },
      IOT: { description: "Designs and develops connected devices and smart systems." },
    },
  },

  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription: "Here are my projects providing empowering solutions and exploring technologies",
    work: [
      {
        id: 1,
        title: "SecureOps: Privacy-First Solutions (ongoing)",
        description:
          "Empowered by Privacy, Supported by Law. This project tackles data security and privacy head-on, providing officers with a suite of powerful tools.",
        image: "https://i.ibb.co/PGr5YR58/Chat-GPT-Image-Dec-6-2025-10-28-00-PM.png",
        gallery: [],
        category: "Applications",
        details:
          "Developed a secure criminal case filing system with role-based access control and homomorphic encryption. Integrated Crime Lens API with Gemini LLM for OCR and NLP, anonymized sensitive data, streamlined case management.",
      },
      {
        id: 2,
        title: "LUNA (Funded by Latrobe Australian University)",
        description:
          "A wearable band and app that monitors cycles, heart rate, temperature, and activity, providing predictions, health insights, and wellness tips for women.",
        image: "https://i.ibb.co/LDC6sTgN/lunaaaa2.jpg",
        gallery: [
          "https://i.ibb.co/Sw5vbw1C/desig.jpg",
          "https://i.ibb.co/tP14qt5B/figg.png",
          "https://i.ibb.co/ZzVFwmGf/gggg.jpg",
        ],
        category: "IoT + Application",
        details:
          "Tracks menstrual cycles, temperature, heart rate, and activity, providing predictions, health insights, and wellness tips for women.",
      },
      {
        id: 3,
        title: "Safegrid: Autonomous Line Break Isolator",
        description:
          "Detects broken live conductors with 99% accuracy, isolates power in 5 seconds, alerts control rooms and public.",
        image: "https://i.ibb.co/tPvcJFwN/pic-2-dg.jpg",
        gallery: [
          "https://i.ibb.co/pBc6xJd3/dashboard.jpg",
          "https://i.ibb.co/qFJ41jyG/ss-alobi.png",
          "https://i.ibb.co/9kf6Z5yc/real.jpg",
          "https://i.ibb.co/G4TYMJfn/picc.jpg",
        ],
        category: "IoT + Web Development",
        details:
          "Dual-sensor fusion with vibration detection and current monitoring, AI-assisted identification, isolates faulty lines in 5 seconds, triggers public alerts, solar-powered with 7-day battery backup.",
      },
      {
        id: 4,
        title: "Hybrid Ferrite-Boosted AC Synchronous Reluctance Motor (HF-SynRM-4)",
        description:
          "Rare-earth-free motor delivering high torque and efficiency. Four-curved flux-barrier rotor, selective ferrite boosting, advanced stator windings, FOC control.",
        image: "https://i.ibb.co/kRm66sg/starrr.jpg",
        gallery: [],
        category: "Simulation",
        details:
          "HF-SynRM-4 designed to achieve high torque, high efficiency without rare-earth magnets. Features flux-barrier rotor, ferrite boosting, high copper-fill stator winding, internal cooling, FOC control. Used for EVs, industrial drives, wind turbines.",
      },
      {
        id: 5,
        title: "STARinIT (UI/UX Framework)",
        description:
          "Intelligent star-rating system evaluating users based on course progress, skills, and performance for recruiters.",
        image: "https://i.ibb.co/sJmpH3XK/Screenshot-2025-12-06-235018-1.png",
        gallery: ["https://i.ibb.co/7x0q0kd5/Screenshot-2025-12-06-234642-1.png"],
        category: "Designing",
        details:
          "Auto-grades users with star ratings based on course and skill performance for faster recruitment.",
      },
      {
        id: 6,
        title: "Fitness Tracker App",
        description:
          "Monitor workouts, calorie intake, and goals in one place with personal recommendations.",
        image: "https://i.ibb.co/7tfdfgyC/Screenshot-2025-12-07-004121-1.png",
        gallery: [
          "https://i.ibb.co/7tfdfgyC/Screenshot-2025-12-07-004121-1.png",
          "https://i.ibb.co/93Ycv9rY/Screenshot-2025-12-07-004325-1.png",
        ],
        category: "Applications",
        details:
          "Cross-platform fitness app developed with React Native and TailwindCSS via Expo. Features: calorie tracking, workout logging, analytics via charts, and custom goal-setting.",
      },
    ],
  },

  contact: {
    heading: "Have a project in mind? Get in touch and let's create something amazing.",
    location: {
      mapSrc: "https://www.google.com/maps?q=Chennai,%20India&output=embed",
      address: "Chennai, Tamil Nadu, India",
    },
  },

  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },

  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Projects", href: "/projects", icon: "lucide:folder-code" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],

  footer: {
    name: "N K Nandini",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "nandy32005@gmail.com",
      phone: "9176734347",
      location: "Chennai, Tamil Nadu",
    },
    socialLinks: [
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/nandini-n-k-574b82371",
        icon: "mdi:linkedin",
      },
    ],
    services: ["Web Development", "UI/UX Design", "Mobile Apps"],
  },
} as const;
