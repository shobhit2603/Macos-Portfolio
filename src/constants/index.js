const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Languages",
        items: ["JavaScript (ES6+)", "HTML5", "CSS3", "SCSS"],
    },
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "Redux Toolkit", "TanStack React Query", "Tailwind CSS", "GSAP", "EJS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "Socket.io", "WebSockets", "JWT Authentication"],
    },
    {
        category: "Databases",
        items: ["MongoDB", "Mongoose", "Database Indexing", "Query Optimization"],
    },
    {
        category: "Cloud & DevOps",
        items: ["Git/GitHub", "Docker", "Kubernetes", "AWS (ECS, ECR, EC2)", "CI/CD Pipelines"],
    },
    {
        category: "AI & Systems",
        items: ["LangChain", "Generative AI Integration", "Pinecone (Vector DB)", "RAG", "LLMs"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/shobhit2603",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/shobhit-shrivastava-dev/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/shobhit1.jpg",
    },
    {
        id: 2,
        img: "/images/shobhit4.jpg",
    },
    {
        id: 3,
        img: "/images/shobhit3.jpg",
    },
    {
        id: 4,
        img: "/images/shobhit2.jpg",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Echo.AI",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Echo.AI Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Echo.AI is a Next-Gen AI Chat App built with Next.js, React, Redux, Node.js, Express.js, MongoDB, Mistral AI, LangChain, Pinecone, Tavily, and Docker.",
                        "Developed a full-stack chat application utilizing Server-Sent Events (SSE) to stream AI responses chunk-by-chunk, reducing perceived response wait time by 85% (Time-to-First-Token < 200ms).",
                        "Engineered a document QA pipeline using Pinecone vector database; parsed uploads into 1000-character chunks with a 20% overlap and generated 1024-dimension embeddings for precise semantic search.",
                        "Integrated Tavily AI web search to automatically retrieve the top 5 live web sources when local document context is missing, solving the problem of LLM knowledge cutoffs and hallucinations.",
                    ],
                },
                {
                    id: 2,
                    name: "echo-ai.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://echo-ai-ten-zeta.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "echo-ai.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "GitHub Repo",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/shobhit2603/Echo.AI",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "FlexIt",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "FlexIt Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "FlexIt is a Real-Time Social Media Platform built with React, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, Socket.io, ImageKit CDN, and Docker.",
                        "Engineered a real-time messaging system using Socket.io and MongoDB, delivering direct messages instantly in under 100ms while eliminating HTTP polling overhead.",
                        "Optimized media processing and page load speeds by 40% via ImageKit CDN integration and lazy-loading video posts using the Intersection Observer API.",
                        "Implemented secure dual-method login (Google OAuth 2.0 and local JWT via HTTP-only cookies) and modularized deployment with Docker containerization.",
                    ],
                },
                {
                    id: 2,
                    name: "flexit.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://flexit-three.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "flexit.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "GitHub Repo",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/shobhit2603/FlexIt",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Momentum",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Momentum Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Momentum is a Squad Productivity & Consistency App built with Next.js, React, Node.js, Express.js, MongoDB, Mongoose, Passport.js, Tailwind CSS v4, and PWA.",
                        "Developed a social productivity app that drives team consistency by tracking squad task completion rates (Win Rates) and streaks on a shared daily feed.",
                        "Designed a daily 'Midnight Purge' system that automatically marks unfinished tasks as failed at midnight, ensuring 100% honest consistency tracking.",
                        "Built a Progressive Web App (PWA) with service worker caching for 100% offline access, featuring voice-to-text task creation and haptic feedback.",
                    ],
                },
                {
                    id: 2,
                    name: "momentum.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://momentum-dun-rho.vercel.app/",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "momentum.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "GitHub Repo",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/shobhit2603/Momentum",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/shobhit2.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/shobhit5.jpg",
        },
        {
            id: 3,
            name: "professional-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/shobhit4.jpg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/shobhit1.jpg",
            description: [
                "Hey! I’m Shobhit 👋, a Full-Stack Developer specializing in modern web applications, cloud-native systems, and AI-powered solutions.",
                "I have experience building scalable products using React.js, Next.js, Node.js, Express.js, MongoDB, Docker, and AWS, with expertise in real-time communication, API architecture, performance optimization, and agile methodologies.",
                "I'm passionate about system design, clean engineering practices, and creating seamless user experiences that feel smooth, fast, and delightful.",
                "Outside of writing clean and optimized code, you'll find me tweaking layouts at 2AM, exploring new tech, or thinking about my next side project! 🚀",
            ],
        },
        {
            id: 5,
            name: "internship.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-10 right-10",
            subtitle: "Web Developer Intern @ Database Cloud Education",
            description: [
                "Database Cloud Education & Development Pvt. Ltd. (April 2023)",
                "Collaborated in an Agile team framework to deliver 3 performance-driven web projects using ES6+ and RESTful APIs.",
                "Utilized advanced debugging and unit testing workflows to optimize latency of the application codes by 15%.",
            ],
        },
        {
            id: 6,
            name: "education.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 right-10",
            subtitle: "Truba Institute of Engineering and IT",
            description: [
                "Bachelor of Technology (B.Tech) - Computer Science and Engineering (2021 - 2025)",
                "Truba Institute of Engineering and Information Technology, (RGPV University), Bhopal, India",
                "CGPA: 7.1/10",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    settings: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export const WALLPAPERS = [
    { id: 1, name: "Sonoma Light", path: "/images/wallpaper.png" },
    { id: 2, name: "Sonoma Dark", path: "/images/wallpaper2.png" },
    { id: 3, name: "Ventura", path: "/images/wallpaper3.png" },
    { id: 4, name: "Monterey", path: "/images/wallpaper4.png" },
    { id: 5, name: "Big Sur", path: "/images/wallpaper5.png" },
    { id: 6, name: "Catalina", path: "/images/wallpaper6.png" },
    { id: 7, name: "Mojave", path: "/images/wallpaper7.png" },
    { id: 8, name: "High Sierra", path: "/images/wallpaper8.png" }
];

export { INITIAL_Z_INDEX, WINDOW_CONFIG };