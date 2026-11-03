export const profile = {
  name: 'Sahda Rahani Susilawati',
  role: 'Frontend Engineer',
  location: 'Bogor, Indonesia',
  email: 'sahdarahani@gmail.com',
  phone: '0822-1308-1354',
  whatsapp: 'https://wa.me/6282213081354',
  gmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=sahdarahani@gmail.com',
  cv: 'https://drive.google.com/drive/folders/1C4R8RNzIC9Na3XWbv6iKtmXvaQb6cxS_?usp=sharing',
  description:
    'Frontend engineer building interfaces from design tokens to production pages, with a background in computer science, UI/UX, and mobile.',
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahda-rahani-susilawati-66a55a285/' },
  { label: 'GitHub', href: 'https://github.com/sahdacantik' },
  { label: 'Instagram', href: 'https://www.instagram.com/_shdrhn' },
];

export const nav = [
  { label: 'Work', href: 'projects/' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: 'about/' },
  { label: 'Contact', href: '#contact' },
];

export const experience = [
  {
    role: 'Frontend Engineer Intern',
    org: 'Current internship',
    period: 'Present',
    summary:
      'Working on an enterprise web application: implementing a Figma design system as CSS tokens and building reusable UI components on a server-rendered stack.',
    tags: ['JSF', 'PrimeFaces', 'CSS tokens', 'Figma', 'jQuery'],
    project: 'design-system-implementation',
  },
  {
    role: 'General Affairs Intern',
    org: 'DPRD Kota Bogor',
    period: 'Jul 2025 – Sep 2025',
    summary:
      'Developed web-based information systems for the secretariat, including a digital guest book, a public service survey platform, and an internship management system.',
    tags: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    project: 'guestly',
  },
  {
    role: 'Assistant Lecturer',
    org: 'Universitas Pakuan',
    period: 'Mar 2024 – Jul 2026',
    summary:
      'Assisted laboratory-based learning and guided students in implementing and troubleshooting technical coursework.',
    tags: ['Operating Systems', 'Cloud Computing', 'Network Security', 'Digital Systems', 'Microprocessors'],
  },
];

export const skills = [
  { group: 'Frontend', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Astro', 'JSF', 'PrimeFaces', 'jQuery'] },
  { group: 'Design', items: ['Figma', 'Design tokens', 'UI/UX'] },
  { group: 'Mobile', items: ['Flutter', 'Dart'] },
  { group: 'Backend', items: ['PHP', 'Laravel', 'Python', 'Flask', 'MySQL'] },
  { group: 'AI & Data', items: ['TensorFlow', 'OpenCV', 'CNN', 'MobileNetV2', 'KNN', 'GLCM', 'NLP'] },
  { group: 'Tools', items: ['Git', 'GitHub'] },
];

export const softSkills = ['Communication', 'Problem Solving', 'Team Work', 'Adaptability'];

export const education = {
  degree: 'Bachelor of Computer Science',
  school: 'Universitas Pakuan',
  period: '2022 – 2026',
  gpa: '3.90 / 4.00',
  thesis: 'Model Sortir Kelayakan Telur Dengan Convolutional Neural Network Berdasarkan Citra Cangkang Telur',
};

export const journey = [
  { year: '2022', title: 'Started College', text: 'Began my journey as a Computer Science student at Pakuan University.' },
  { year: '2023', title: 'Academic Projects', text: 'Developed several academic projects and participated in competitions.' },
  { year: '2024', title: 'Assistant Lecturer', text: 'Joined as an Assistant Lecturer at Pakuan University.' },
  { year: '2025', title: 'Internship at DPRD', text: 'Completed an internship at DPRD Bogor and worked on web-based information systems.' },
  { year: '2026', title: 'Thesis & Graduation', text: 'Completed my undergraduate thesis and graduated with a GPA of 3.90/4.00 from Pakuan University.' },
];

export const organization = [
  {
    role: 'Secretary 1',
    org: 'Laboratory Workshop Assistant Association, Universitas Pakuan',
    period: '2025 – 2026',
    text: 'Led administrative coordination, documentation, and communication for lab activities and events.',
  },
  {
    role: 'Secretary 2',
    org: 'Laboratory Workshop Assistant Association, Universitas Pakuan',
    period: '2024 – 2025',
    text: 'Assisted in managing administrative tasks, coordinating lab activities, and supporting teaching and practical sessions.',
  },
];

export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
