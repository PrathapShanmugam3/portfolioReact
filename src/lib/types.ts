import { SVGProps } from "react";

export interface Project {
    name: string;
    description: string;
    tech: string[];
    image: string;
    liveDemo?: string;
    codeLink?: string;
}

export interface Skill {
    name: string;
    icon: ((props: SVGProps<SVGSVGElement>) => React.JSX.Element) | null;
}

export interface SkillCategory {
    category: string;
    technologies: Skill[];
}

export interface Social {
    name: string;
    url: string;
}

export interface WorkExperience {
    company: string;
    role: string;
    period: string;
    location: string;
    tasks: string[];
}

export interface Education {
    degree: string;
    institution: string;
    period: string;
    grade: string;
}

export interface Certification {
    name: string;
    institution: string;
    period: string;
}

export interface PortfolioData {
    name: string;
    title: string;
    email: string;
    mobile: string;
    socials: Social[];
    summary: string;
    workExperience: WorkExperience[];
    projects: Project[];
    personalProjects: Project[];
    skills: SkillCategory[];
    education: Education[];
    certifications: Certification[];
}
