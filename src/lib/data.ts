import {
  Angular,
  Bootstrap,
  Docker,
  ExpressJs,
  Firebase,
  GitHub,
  GitLab,
  Java,
  JavaScript,
  MongoDB,
  MySQL,
  NodeJs,
  PostgreSQL,
  ReactJs,
  Render,
  Spring,
  TailwindCSS,
  TypeScript,
  Vercel,
} from '@/components/icons';

export const data = {
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
    'Full-Stack Developer with over 2 years of experience in designing and delivering scalable web applications using Angular, React, Spring Boot, and Node.js. Proficient in building RESTful APIs, and optimizing databases including MySQL, MongoDB, and PostgreSQL. Skilled in developing dynamic, user-friendly interfaces and ensuring backend efficiency through clean code practices, CI/CD pipelines, and Agile methodologies. Adept at collaborating with cross-functional teams, solving complex problems, and delivering high-quality solutions that enhance performance and user experience.',
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
    },
    {
      name: 'OASYS Employee Portal',
      description:
        'Designed and developed a smart, all-in-one platform for managing employee information, attendance, leave, approvals, and tasks. Implemented easy-to-use workflows, one-time approval systems, and real-time updates to simplify daily HR activities. Built with a clean, intuitive user interface for enhanced usability and productivity. Ensured high efficiency, security, and transparency to keep teams connected and processes streamlined. Integrated React for an interactive front end, Spring Boot for robust backend services, and MySQL for reliable data management.',
      tech: ['React', 'Spring Boot', 'MySQL'],
    },
  ],
  personalProjects: [
    {
      name: 'Calculator Application',
      description:
        'Built a responsive calculator using Angular with real-time calculation and error handling. Applied modular architecture and clean UI design principles for better maintainability. Deployed using Vercel for continuous integration and quick access.',
      tech: ['Angular', 'Vercel'],
      liveDemo: 'https://ng-calculator-zeta.vercel.app/',
    },
    {
      name: 'Portfolio Application',
      description:
        'Designed and developed a personal portfolio showcasing professional skills, experience, and projects. Implemented multi-language support, responsive layout, and smooth navigation using Angular routing. Hosted on Vercel for fast performance and global access.',
      tech: ['Angular', 'Vercel'],
      liveDemo: 'https://prathap-shanmugam.vercel.app/',
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
        { name: 'Tailwind CSS', icon: TailwindCSS },
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
      name: 'Application Developer – Web Mobile (SSC/Q8403), Level 6',
      institution: 'DDUGKY, KRK Educational Trust, Trichy',
      period: 'Sep 2022 – Feb 2023',
    },
  ],
};
