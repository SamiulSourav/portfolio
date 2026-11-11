// Single source of truth for everything shown on the site.
// Content is taken from the résumé (Md. Samiul Haque.pdf); edit here to update the page.

export type SectionId = 'experience' | 'work' | 'skills' | 'competitive' | 'education' | 'contact'

export interface Section {
  id: SectionId
  /** Short label used in the navigation bar. */
  nav: string
  /** Full heading shown above the section. */
  title: string
}

export interface Stat {
  value: string
  label: string
}

export interface Job {
  role: string
  company: string
  start: { label: string; datetime: string }
  /** `null` means the role is current. */
  end: { label: string; datetime: string } | null
  highlights: string[]
}

export interface Project {
  name: string
  org: string
  description: string
  tags: string[]
  url?: string
}

export interface Platform {
  name: string
  handle: string
  url?: string
  headline: Stat
  details: string[]
}

export interface ContestResult {
  year: number
  contest: string
  result: string
  /**
   * Public standings page for the contest, when one exists. CodeMarshal (algo.codemarshal.org)
   * has shut down and its domain was re-registered, so those contests link to Wayback Machine
   * snapshots that were checked to show the team at the listed rank.
   */
  url?: string
}

export const sections: Section[] = [
  { id: 'experience', nav: 'Experience', title: 'Experience' },
  { id: 'work', nav: 'Work', title: 'Selected work' },
  { id: 'skills', nav: 'Skills', title: 'Skills' },
  { id: 'competitive', nav: 'Competitive', title: 'Competitive programming' },
  { id: 'education', nav: 'Education', title: 'Education' },
  { id: 'contact', nav: 'Contact', title: 'Contact' },
]

export const profile = {
  name: 'Md. Samiul Haque',
  shortName: 'Samiul Haque',
  title: 'Frontend Software Engineer',
  experience: "3+ years' experience",
  location: 'Uttara, Dhaka',
  currentRole: 'Software Engineer at AppsCode',
  summary: [
    "I'm a frontend engineer with three and a half years of experience at AppsCode, building responsive, scalable web applications in VueJS and Nuxt — including the web console that operations teams use to manage Kubernetes clusters.",
    'I build reusable UI components, translate designs into high-quality code, integrate RESTful APIs, and troubleshoot issues to their root cause before delivering verified fixes.',
  ],
}

export const contact = {
  email: 'samiul.ss9@gmail.com',
  phone: '+880 1521 302574',
  phoneHref: 'tel:+8801521302574',
  github: { label: 'github.com/SamiulSourav', url: 'https://github.com/SamiulSourav' },
  linkedin: {
    label: 'linkedin.com/in/md-samiul-haque',
    url: 'https://linkedin.com/in/md-samiul-haque',
  },
  resumeUrl: `${import.meta.env.BASE_URL}Md-Samiul-Haque-Resume.pdf`,
}

export const stats: Stat[] = [
  { value: '3.5', label: 'years building VueJS & Nuxt apps at AppsCode' },
  { value: '20+', label: 'databases with create & operate forms' },
  { value: '1577', label: 'max Codeforces rating' },
  { value: '1,800+', label: 'problems solved across Codeforces, LeetCode & UVa' },
]

export const experience: Job[] = [
  {
    role: 'Software Engineer',
    company: 'AppsCode Ltd.',
    start: { label: 'Mar 2023', datetime: '2023-03' },
    end: null,
    highlights: [
      'Maintained reusable VueJS components that manage Kubernetes clusters, databases, billing and the user platform to ease operations.',
      'Built complex forms to create and operate 20+ different databases, and maintained them as database features changed.',
      'Understand customer requirements and fix complex bugs while on call.',
      'Optimized frontend performance and reduced build sizes across several repositories.',
      'Collaborate with backend and UI engineers to keep the user experience consistent.',
      'Review code to maintain a clean, understandable codebase.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Form-Builder',
    org: 'AppsCode',
    description:
      'Generates complex configuration forms from JSON and YAML input — the schema layer behind product setup flows — along with the JavaScript functions that keep track of each form’s rendering conditions.',
    tags: ['JavaScript', 'JSON', 'YAML', 'Schema-driven UI'],
  },
  {
    name: 'Platform-UI',
    org: 'AppsCode',
    description:
      'Server-side-rendered (SSR) user-management site in Nuxt covering accounts, access, and organisation structure across the platform.',
    tags: ['Nuxt', 'SSR', 'User management'],
  },
  {
    name: 'HackerNews',
    org: 'Personal',
    description:
      'Vue client for the HackerNews API with different tiers of tech news, paginated stories, comment threads and user pages.',
    tags: ['VueJS', 'HackerNews API', 'Pagination'],
    url: 'https://hacker-news-xi-five.vercel.app/',
  },
]

export const strengths: string[] = [
  'Reusable UI components & front-end libraries',
  'RESTful API integration',
  'Responsive, cross-browser UI',
  'Performance & build-size optimization',
  'Troubleshooting & debugging',
  'Fluent written & spoken English',
]

export const toolGroups: { label: string; items: string[] }[] = [
  { label: 'Frameworks', items: ['VueJS', 'Nuxt', 'React', 'NextJS'] },
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'C', 'C++'] },
  { label: 'Tools', items: ['Git', 'Docker', 'Postman'] },
]

export const competitiveIntro =
  'A background in competitive programming brings a thorough approach to problem-solving — one that looks beyond the first plausible explanation.'

export const platforms: Platform[] = [
  {
    name: 'Codeforces',
    handle: 'SamiulSourav',
    url: 'https://codeforces.com/profile/SamiulSourav',
    headline: { value: '1577', label: 'max rating (Specialist)' },
    details: ['1200+ problems solved', '200+ contests'],
  },
  {
    name: 'LeetCode',
    handle: 'SamiulSourav',
    url: 'https://leetcode.com/u/SamiulSourav',
    headline: { value: '500+', label: 'problems solved' },
    details: [],
  },
  {
    name: 'UVa Online Judge',
    handle: 'Samiul Sourav',
    url: 'https://uhunt.onlinejudge.org/id/841501',
    headline: { value: '140+', label: 'problems solved' },
    details: [],
  },
]

export const contests: ContestResult[] = [
  {
    year: 2020,
    contest: 'MIST NCPC',
    result: '#100',
    // No link: algo.codemarshal.org is gone and no archived copy of these standings exists.
  },
  {
    year: 2019,
    contest: 'ACM ICPC Dhaka Regional',
    result: '#79',
    url: 'https://web.archive.org/web/20220628162312/https://algo.codemarshal.org/contests/icpc-dhaka-19-onsite-main/standings',
  },
  {
    year: 2019,
    contest: 'VU CSE Tech Fest',
    result: '#30',
    url: 'https://toph.co/c/vu-cse-tech-fest-2019-contest/standings',
  },
  {
    year: 2019,
    contest: 'MIST IUPC',
    result: '#65',
    url: 'https://web.archive.org/web/20191211081335/https://algo.codemarshal.org/contests/mist-iupc-19/standings',
  },
  {
    year: 2019,
    contest: 'SUST IUPC',
    result: '#93',
    url: 'https://toph.co/c/sust-iupc-2019/standings',
  },
  {
    year: 2018,
    contest: 'ACM ICPC Dhaka Regional',
    result: '#235',
    url: 'https://web.archive.org/web/20230304060514/https://algo.codemarshal.org/contests/icpc-dhaka-18/standings',
  },
  {
    year: 2018,
    contest: 'NSU Cybernauts NPC',
    result: '#53',
    url: 'https://toph.co/c/cybernauts-npc-2018/standings',
  },
  { year: 2017, contest: 'BRUR CSE Fest', result: '#4' },
  { year: 2012, contest: 'Rangpur Math Olympiad', result: '2nd runner-up' },
]

export interface Education {
  degree: string
  school: string
  /** Omit for single-year qualifications such as SSC/HSC; only `end` is shown then. */
  start?: string
  end: string
  grade: string
}

// Newest first.
export const education: Education[] = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    school: 'Begum Rokeya University, Rangpur',
    start: '2016',
    end: '2022',
    grade: 'CGPA 3.27',
  },
  {
    degree: 'Higher Secondary Certificate',
    school: 'Carmichael College, Rangpur',
    end: '2015',
    grade: 'GPA 4.67',
  },
  {
    degree: 'Secondary School Certificate',
    school: 'Collectorate School and College, Rangpur',
    end: '2013',
    grade: 'GPA 5.00',
  },
]
