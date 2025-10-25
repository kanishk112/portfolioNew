const BASE = import.meta.env.BASE_URL;

export const myProjects = [
  {
    id: 1,
    title: "Samsung OnUI 8 Settings Application",
    description:
      "Led backend-oriented architecture for Samsung’s Settings app, optimizing performance across CPU/GPU/power layers by achieving 30% efficiency.",
    subDescription: [
      "Developed modular services in Java/Kotlin with microservice, integrating cloud-native tools like Firebase and Samsung Cloud for secure user data management.",
      "Implemented secure token management using Android Encrypted Shared Preferences + Knox.",
      "Refactored large codebases with MVVM, Hilt, and LiveData/StateFlow, improving code maintainability and modularity by 40%.",
    ],
    href: "https://www.samsung.com/latin_en/support/mobile-devices/how-to-use-updated-notification-settings-in-samsung-one-ui-8/",
    logo: "",
  image: `${BASE}assets/projects/Settings.png`,
    tags: [
      {
        id: 1,
        name: "Kotlin",
  path: `${BASE}assets/logos/kotlin.png`,
      },
      {
        id: 2,
        name: "Android",
  path: `${BASE}assets/logos/android.png`,
      },
      {
        id: 3,
        name: "Java",
  path: `${BASE}assets/logos/java.png`,
      },
      {
        id: 4,
        name: "Flutter",
  path: `${BASE}assets/logos/flutter.svg`,
      },
    ],
  },
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
  image: `${BASE}assets/projects/auth-system.jpg`,
    tags: [
      {
        id: 1,
        name: "Auth0",
  path: `${BASE}assets/logos/auth0.svg`,
      },
      {
        id: 2,
        name: "React",
  path: `${BASE}assets/logos/react.svg`,
      },
      {
        id: 3,
        name: "SQLite",
  path: `${BASE}assets/logos/sqlite.svg`,
      },
      {
        id: 4,
        name: "TailwindCSS",
  path: `${BASE}assets/logos/tailwindcss.svg`,
      },
    ],
  },
  {
    id: 3,
    title: "Smart Calculator App",
    description:
      "A modern, interactive web application built with React and FastAPI.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using React and TypeScript.",
      "Implemented robust backend APIs with FastAPI and Python for seamless client-server communication.",
      "Designed responsive and visually appealing UI components using Tailwind CSS and Mantine.",
      "Integrated MathJax for dynamic mathematical rendering and Axios for efficient API requests.",
    ],
    href: "",
    logo: "",
  image: `${BASE}assets/projects/SmartCalc.png`,
    tags: [
      {
        id: 1,
        name: "React",
  path: `${BASE}assets/logos/react.svg`,
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: `${BASE}assets/logos/tailwindcss.svg`,
      },
      {
        id: 3,
        name: "Vite.js",
        path: `${BASE}assets/logos/vitejs.svg`,
      },
      {
        id: 4,
        name: "Mantine",
        path: `${BASE}assets/logos/mantine.svg`,
      },
      {
        id: 5,
        name: "GeminiAI",
        path: `${BASE}assets/logos/gemini.png`,
      },
      {
        id: 6,
        name: "Python",
        path: `${BASE}assets/logos/python.svg`,
      },
    ],
  },
  {
    id: 4,
    title: "Unity FPS Game",
    description:
      "A 3D unity game with FPS mechanics with multi player support.",
    subDescription: [
      "Built a powerful rendering game using Unity, OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
  image: `${BASE}assets/projects/game-engine.jpg`,
    tags: [
      {
        id: 1,
        name: "C++",
  path: `${BASE}assets/logos/cplusplus.svg`,
      },
      {
        id: 2,
        name: "C#",
  path: `${BASE}assets/logos/csharp.svg`,
      },
      {
        id: 3,
        name: "VR",
  path: `${BASE}assets/logos/vr.png`,
      },
      {
        id: 4,
        name: "Unity",
  path: `${BASE}assets/logos/unity.png`,
      },
    ],
  },
  {
    id: 5,
    title: "Ice Cream Parlor Website",
    description:
      "Designed and Developed a Website for a local Ice cream Parlor using HTML, CSS, JavaScript, and SASS. Created this website by using various SASS properties and Animations.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "https://kanishk112.github.io/Ice-Cream/",
    logo: "",
  image: `${BASE}assets/projects/IceCream.png`,
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: `${BASE}assets/logos/wordpress.svg`,
      },
      {
        id: 2,
        name: "HTML5",
        path: `${BASE}assets/logos/html5.svg`,
      },
      {
        id: 3,
        name: "CSS3",
        path: `${BASE}assets/logos/css3.svg`,
      },
      {
        id: 4,
        name: "Vite.js",
        path: `${BASE}assets/logos/vitejs.svg`,
      },
    ],
  },
  {
    id: 6,
    title: "Sorting Visualizer",
    description:
      "A web application that allows users to visualize sorting algorithms in action.",
    subDescription: [
      "Created a web application using HTML, CSS, JavaScript to visualize how various sorting algorithms work.",
      "The website is made for the easiest demonstration of how different types of sorting algorithm works. We have made a visualization process with the help of which every algorithm working on an unsorted array.",
      "The Application allows users to select the sorting algorithm, speed of the algorithm, and input array elements.",
    ],
    href: "https://kanishk112.github.io/Sorting-Visualiser/",
    logo: "",
  image: `${BASE}assets/projects/SortingVisualizer.png`,
    tags: [
      {
        id: 1,
        name: "CSS3",
        path: `${BASE}assets/logos/css3.svg`,
      },
      {
        id: 2,
        name: "Wordpress",
        path: `${BASE}assets/logos/wordpress.svg`,
      },
      {
        id: 3,
        name: "HTML5",
        path: `${BASE}assets/logos/html5.svg`,
      },
      {
        id: 4,
        name: "JavaScript",
        path: `${BASE}assets/logos/javascript.svg`,
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: `${BASE}assets/socials/whatsApp.svg`,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/kanishk-sharda/",
    icon: `${BASE}assets/socials/linkedIn.svg`,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kxnixk.sh/",
    icon: `${BASE}assets/socials/instagram.svg`,
  },
];

export const experiences = [
  {
    title: "Senior Software Engineer",
    job: "Samsung R&D Institute",
    date: "2023-Present",
    contents: [
      "Samsung Mobiles Settings Application Android | Kotlin | Java | C++ | MVVM | Git | Jira",
      "Led backend-oriented architecture improvements for Samsung’s mobile Settings system (100M+ devices),optimizing performance across CPU/GPU/power layers - achieved 30% boost in system efficiency.",
      "Developed modular services in Java/Kotlin with microservice-like separation, integrating cloud-native tools like Firebase and Samsung Cloud for secure user data management and sync.",
      "Implemented secure token management using Android EncryptedSharedPreferences + Knox, aligning with cloud security and storage best practices.",
      "Refactored large codebases with MVVM, Hilt, and LiveData/StateFlow, improving code maintainability and modularity by 40%.",
    ],
  },
  {
    title: "Software Engineer",
    job: "Samsung",
    date: "2022-2023",
    contents: [
      "Input Device Pairing Application Android | Kotlin | IoT |Bluetooth | Android XR | MVVM | Git | Jira",
      "Engineered a scalable, device-agnostic Bluetooth pairing service for Samsung’s IoT and XR ecosystem, supporting low-latency pairing across XR headsets and mobile devices.",
      "Designed a low-power BLE scanning system with adaptive device memory (Room DB), enhancing reconnection speeds by 25%. Built and exposed custom RESTful APIs for cross-device pairing operations; ensured platform resilience through detailed telemetry and fallback strategies.",
      "Ensured data privacy for customers and partners through industry-compliant protocols.",
      "Actively worked in Linux-based embedded environments, debugging connectivity and memory issues using command-line tools and AOSP logs.",
    ],
  },
  {
    title: "Software Developer Intern",
    job: "Securonix",
    date: "03-2022- 08-2022",
    contents: [
      "Digital Identity Security SQL | Java | Jira | Apache Calcite |Spring MVC",
      "Developed core components for the Next Gen SIEM ”SNYPRR” platform combining log management, UEBA, and security incident response into a complete, end-to-end security operations platform.",
      "Developed biometric security authenticator for digital identity verification.Utilized SQL, Java, and Apache Calcite for robust backend implementation.",
    ],
  },
  {
    title: "Software Developer Intern",
    job: "Thales",
    date: "01-2022- 03-2022",
    contents: [
      "Digital Identity and Security SQL | Java | Jira | Apache Calcite |Spring MVC",
      "Developed core components for the Next Gen SIEM ”SNYPRR” platform combining log management, UEBA, and security incident response into a complete, end-to-end security operations platform.",
      "Developed biometric security authenticator for digital identity verification.Utilized SQL, Java, and Apache Calcite for robust backend implementation.",
    ],
  },
];
export const reviews = [
  {
    name: "Samsung",
    username: "@srib",
    body: "Certified by Samsung for Advanced Algorithmic & Problem-Solving Excellence",
    img: `${BASE}assets/socials/samsung.svg`,
  },
  {
    name: "Udemy",
    username: "@udemy",
    body: "Certification on Advanced Unity and Game development",
    img: `${BASE}assets/socials/udemy.svg`,
  },
  {
    name: "Samsung",
    username: "@srib",
    body: "Spot award for contribution in input pairing application",
    img: `${BASE}assets/socials/samsung.svg`,
  },
  {
    name: "Udemy",
    username: "@udemy",
    body: "Certification on Advanced Android and Kotlin",
    img: `${BASE}assets/socials/udemy.svg`,
  },
  {
    name: "Udemy",
    username: "@udemy",
    body: "Certification on advanced Java programming language.",
    img: `${BASE}assets/socials/udemy.svg`,
  },
  {
    name: "Unity",
    username: "@unity",
    body: "Led Samsung’s first post-Meta Space Warping initiative, improving real-time XR performance by 35%, reducing latency spikes in motion tracking for a next-gen immersive experience.",
    img: `${BASE}assets/logos/unity.png`,
  },
  {
    name: "Udemy",
    username: "@udemy",
    body: "Certification on advanced C++ programming language.",
    img: `${BASE}assets/socials/udemy.svg`,
  },
  {
    name: "Tata",
    username: "@tata",
    body: "Certification in Industrial Robotics, Product design and development, Mechatronics and IoT, Advance Manufacturing..",
    img: `${BASE}assets/socials/tata.svg`,
  },
];
