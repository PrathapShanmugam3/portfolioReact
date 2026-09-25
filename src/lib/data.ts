import {
  Angular,
  Bootstrap,
  Docker,
  ExpressJs,
  Firebase,
  GitHub,
  GitLab,
  JavaScript,
  MongoDB,
  MySQL,
  NodeJs,
  PostgreSQL,
  ReactJs,
  Render,
  Spring,
  TypeScript,
  Vercel
} from '@/components/icons';
import { PortfolioData } from './types';

export const data: PortfolioData = {
  name: 'Prathap Shanmugam',
  title: 'Full Stack Developer',
  email: 'prathapshanmugam5@gmail.com',
  mobile: '+91 9345749329',
  socials: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prathap-shanmugam-362b69235',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/PrathapShanmugam3',
    },
    {
      name: 'GitLab',
      url: 'https://gitlab.com/prathapshanmugam',
    },
  ],
  summary:
    'Full-Stack Developer with 3+ years of experience in designing and delivering scalable web applications using Angular, React, Spring Boot, and Node.js. Proficient in building RESTful APIs, and optimizing databases including MySQL, MongoDB, and PostgreSQL. Skilled in developing dynamic, user-friendly interfaces and ensuring backend efficiency through clean code practices, CI/CD pipelines, and Agile methodologies. Adept at collaborating with cross-functional teams, solving complex problems, and delivering high-quality solutions that enhance performance and user experience.',
  workExperience: [
    {
      company: 'OASYS Cybernetics Pvt. Ltd',
      role: 'Software Developer (Full Stack Developer)',
      period: 'Aug 2023 – Present',
      location: 'Trichy',
      tasks: [
        'Contributed to the development of a comprehensive ERP system using Angular, React, and Spring Boot.',
        'Designed scalable features and built RESTful APIs for seamless integration across modules.',
        'Developed intuitive, responsive user interfaces with Angular and React, improving user engagement.',
        'Managed and optimized MySQL database operations for better query performance and data handling.',
        'Ensured high software quality through unit testing, integration testing, and adherence to coding best practices.',
        'Collaborated with cross-functional teams to gather requirements, deliver features, and enhance performance.',
        'Applied Agile methodologies including sprint planning, daily stand-ups, retrospectives, and code reviews.',
        'Integrated frontend and backend components efficiently to deliver end-to-end solutions on time.',
      ],
    },
  ],
  projects: [
    {
      name: 'COOPTEX ERP System',
      description:
        'Developed and implemented modules for inventory, sales, and finance, ensuring smooth and efficient data flow across departments. Leveraged Angular for dynamic, responsive front-end development. Used PostgreSQL for secure, scalable database management. Collaborated with cross-functional teams to optimize performance and deliver a seamless user experience.',
      tech: ['Angular', 'Java Spring Boot', 'PostgreSQL'],
      image: 'cooptex-erp-image',
    },
    {
      name: 'OASYS Employee Portal',
      description:
        'Designed and developed a smart, all-in-one platform for managing employee information, attendance, leave, approvals, and tasks. Implemented easy-to-use workflows, one-time approval systems, and real-time updates to simplify daily HR activities. Built with a clean, intuitive user interface for enhanced usability and productivity. Ensured high efficiency, security, and transparency to keep teams connected and processes streamlined. Integrated React for an interactive front end, Spring Boot for robust backend services, and MySQL for reliable data management.',
      tech: ['React', 'Spring Boot', 'MySQL'],
      image: 'employee-portal-image',
    },
  ],
  personalProjects: [
    {
      name: 'Rupi Rewards — Earn & Cash-out App',
      description:
        'A live rewards app on Google Play where users earn points from daily tasks, offerwalls, scratch cards, daily check-ins, secret codes and referrals, then withdraw to UPI. Built end to end with AI-assisted "vibe coding": a Flutter mobile app with Google Sign-In and push notifications, a Node.js + Express REST API with JWT auth and Socket.io, a MySQL database, and a React admin panel for managing offers, users and payouts. Offer18 postback tracking credits rewards automatically. Self-hosted on a Hostinger VPS.',
      tech: ['Flutter', 'Node.js', 'Express', 'MySQL', 'React', 'Firebase', 'Hostinger VPS'],
      liveDemo: 'https://play.google.com/store/apps/details?id=com.reward.server',
      liveLabel: 'Google Play',
      image: 'rupi-rewards-image',
      status: 'Live on Play Store',
    },
    {
      name: 'Dynamic Text-to-SQL Intelligence Platform',
      description:
        'An AI platform that turns plain-English questions into SQL. It connects to MySQL or PostgreSQL at runtime, reads the live schema, and sends the schema and question to a fine-tuned Qwen 2.5 3B LoRA model trained on Google Colab. Generated queries are validated as read-only (SELECT/WITH) before running, and results are returned as JSON through a FastAPI service packaged with Docker.',
      tech: ['Python', 'FastAPI', 'Qwen 2.5 LoRA', 'Google Colab', 'MySQL', 'PostgreSQL', 'Docker'],
      codeLink: 'https://github.com/PrathapShanmugam3/dynamic_text2sql_fastapi',
      image: 'text2sql-image',
      status: 'In progress',
    },
    {
      name: 'TODO App',
      description:
        'A full-stack TODO application using the MERN stack (MongoDB, Express.js, React, Node.js). Features include user authentication with Google Sign-In, allowing users to manage their tasks securely.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Vercel'],
      liveDemo: 'https://todoapplatest.vercel.app',
      image: 'todo-app-image',
    },
    {
      name: 'Calculator Application',
      description:
        'Built a responsive calculator using Angular and Bootstrap with real-time calculation and error handling. Applied modular architecture and clean UI design principles for better maintainability. Deployed using Vercel for continuous integration and quick access.',
      tech: ['Angular', 'Bootstrap', 'Vercel'],
      liveDemo: 'https://calculator-nu-gilt.vercel.app/',
      image: 'calculator-app-image',
    },
    {
      name: 'Portfolio Application',
      description:
        'Designed and developed a personal portfolio showcasing professional skills, experience, and projects. Implemented multi-language support, responsive layout, and smooth navigation using Angular routing. Hosted on Vercel for fast performance and global access.',
      tech: ['Angular', 'Vercel'],
      liveDemo: 'https://portfolio-react-blush-eight.vercel.app/',
      image: 'portfolio-app-image',
    },
    {
      name: 'Expense Tracker App',
      description:
        'Expense Tracker is a mobile application built with Flutter that helps users track their daily expenses. It uses Node.js for the backend and MySQL for the database. Users can add, edit, and delete expenses, and view them in a list format.',
      tech: ['Flutter', 'Node js', 'Mysql'],
      liveDemo: 'https://drive.google.com/file/d/1i1av3M-OGy0uC4K7P3bgjnocpSeHvLDF/view?usp=sharing',
      image: 'expense-tracker-image',
    },
  ],
  skills: [
    {
      category: 'Frontend',
      technologies: [
        { name: 'React', icon: ReactJs },
        { name: 'Angular', icon: Angular },
        { name: 'HTML5', icon: null },
        { name: 'JavaScript', icon: JavaScript },
        { name: 'TypeScript', icon: TypeScript },
        { name: 'CSS3', icon: null },
        { name: 'Bootstrap 5', icon: Bootstrap },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Spring Boot (Java)', icon: Spring },
        { name: 'Node.js', icon: NodeJs },
        { name: 'Express.js', icon: ExpressJs },
        { name: 'REST APIs', icon: null },
      ],
    },
    {
      category: 'Databases',
      technologies: [
        { name: 'MySQL', icon: MySQL },
        { name: 'MongoDB', icon: MongoDB },
        { name: 'PostgreSQL', icon: PostgreSQL },
      ],
    },
    {
      category: 'AI & Machine Learning',
      technologies: [
        { name: 'Python', icon: null },
        { name: 'FastAPI', icon: null },
        { name: 'LLM Fine-tuning (LoRA)', icon: null },
        { name: 'Text-to-SQL', icon: null },
        { name: 'Google Colab', icon: null },
        { name: 'AI Agents & Workflows', icon: null },
        { name: 'Vibe Coding (AI-assisted dev)', icon: null },
      ],
    },
    {
      category: 'DevOps & Tools',
      technologies: [
        { name: 'Docker', icon: Docker },
        { name: 'GitLab', icon: GitLab },
        { name: 'GitHub', icon: GitHub },
        { name: 'Postman', icon: null },
        { name: 'Swagger', icon: null },
        { name: 'VS Code', icon: null },
        { name: 'Spring Tool Suite', icon: Spring },
        { name: 'DBeaver', icon: null },
      ],
    },
    {
      category: 'Platforms & Others',
      technologies: [
        { name: 'Firebase', icon: Firebase },
        { name: 'GitHub Pages', icon: GitHub },
        { name: 'Vercel', icon: Vercel },
        { name: 'Render', icon: Render },
        { name: 'Hostinger VPS', icon: null },
      ],
    },
  ],
  education: [
    {
      degree: 'B.E. in Computer Science & Engineering',
      institution: 'Jayaram College of Engineering and Technology, Pagalavadi, Trichy',
      period: '2017 – 2021',
      grade: 'CGPA: 7.5 / 10.0',
    },
    {
      degree: 'Higher Secondary (Computer Science)',
      institution: 'E.R. Higher Secondary School, Trichy',
      period: '2017',
      grade: 'Percentage: 74.5%',
    },
  ],
  certifications: [
    {
      name: 'Agents and Workflows',
      institution: 'OpenAI Academy',
      period: 'Aug 2026',
      credentialId: '9ndwjq6t4l',
    },
    {
      name: 'Applied AI Foundations',
      institution: 'OpenAI Academy',
      period: 'Aug 2026',
      credentialId: 'k60onlx7mr',
    },
    {
      name: 'AI Foundations',
      institution: 'OpenAI Academy',
      period: 'Aug 2026',
      credentialId: '2ho78cyxkm',
    },
    {
      name: 'Application Developer – Web Mobile (SSC/Q8403), Level 6',
      institution: 'DDUGKY, KRK Educational Trust, Trichy',
      period: 'Sep 2022 – Feb 2023',
    },
  ],
};

/** Opens a WhatsApp chat with the mobile number above, with a friendly message pre-filled. */
export const whatsappUrl = `https://wa.me/${data.mobile.replace(/\D/g, '')}?text=${encodeURIComponent(
  "Hi Prathap, I saw your portfolio and would like to connect."
)}`;
