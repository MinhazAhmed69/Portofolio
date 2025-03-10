import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Import images properly
import sahyadriLogo from "./assets/images/12.jpeg";
import chaitanyaLogo from "./assets/images/123.png";
import frogImage from "./assets/images/Frog.png";
import sipImage from "./assets/images/SIP.png";
import lillyImage from "./assets/images/lilly.png";
import nitteImage from "./assets/images/nitte.png";
import hacknightImage from "./assets/images/hacknight.png";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

// Summary And Greeting Section
const illustration = {
  animated: true,
};

const greeting = {
  username: "Minhaz Ahmed",
  title: "Hi all, I'm Minhaz",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 experienced in building Web and Mobile applications with JavaScript, React.js, Node.js, and React Native."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kdOLs8TmgPbYpEHofKOC35Kt7Xym0Flv/view?usp=share_link",
  displayGreeting: true,
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/MinhazAhmed69",
  linkedin: "https://www.linkedin.com/in/minhazahmed69/",
  gmail: "minhazahmed554@gmail.com",
  display: true,
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "These are my skills, which I am very comfortable with and enjoy working on.",
  skills: [
    emoji("⚡ Developing highly interactive Front-End/User Interfaces for web and mobile applications"),
    emoji("⚡ Building Progressive Web Applications (PWA) and Single Page Applications (SPA)"),
    emoji("⚡ Integrating third-party services such as Firebase and other APIs seamlessly"),
    emoji("⚡ Optimizing performance and enhancing user experience across different platforms"),
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "ReactJS", fontAwesomeClassname: "fab fa-react" },
    { skillName: "SASS", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "NodeJS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "NPM", fontAwesomeClassname: "fab fa-npm" },
  ],
  display: true,
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Sahyadri College of Engineering and Management",
      logo: sahyadriLogo,
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "September 2023 - September 2027",
      desc: "Took core courses in Computer Science Engineering, covering key areas such as programming, data structures, algorithms, and Japanese language learning.",
      descBullets: [
        "CR of the class",
        "Extensive learning in CSE, focusing on machine learning, AI, and software engineering",
        "Strong emphasis on self-driven projects and teamwork",
        "Dedicated to Japanese language learning",
      ],
    },
    {
      schoolName: "Sri Chaitanya School and College",
      logo: chaitanyaLogo,
      subHeader: "CBSE & State Board",
      duration: "March 2018 - March 2023",
      desc: "Attended Sri Chaitanya School from 8th to 10th grade and later pursued higher education at Sri Chaitanya Junior College, specializing in PCMC (Physics, Chemistry, Mathematics, and Computer Science).",
      descBullets: ["8th to 2nd PUC with a specialization in PCMC"],
    },
  ],
};

// Projects Section
const bigProjects = {
  title: "Projects",
  subtitle: "Projects which I feel proud of",
  projects: [
    {
      image: frogImage,
      projectName: "FloodGuardHQ",
      projectDesc: "Developed a website for real-time flood alerts and local detection at SSOSC Srinathon, a national-level hackathon.",
    },
    {
      image: sipImage,
      projectName: "Roaring Rhythm",
      projectDesc: "A rhythm-based game for the visually impaired, selected for Bangalore Ideathon at Nitte and won first place in a class competition.",
    },
    {
      image: lillyImage,
      projectName: "The Lilly Pad",
      projectDesc: "A minimalist food website with a diverse menu, developed as our final SkillLab milestone.",
    },
  ],
  display: true,
};

// Achievements Section
const achievementsCards = [
  {
    title: "Ideathon 5.0 - The Hive",
    subtitle:
      "Participated in Ideathon 5.0 at Nitte Meenakshi Institute of Technology as part of 'The Hive' team.",
    image: nitteImage,
    imageAlt: "Ideathon 5.0 Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://www.linkedin.com/posts/minhazahmed69_nitte-meenakshi-institute-of-technology-i-activity-7242868002151350274-2v_B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1DueoB8d0LhJPwGekycH6_oyvIPchAyzk",
      },
    ],
  },
  {
    title: "HackNight - DEVHOST 2024",
    subtitle:
      "Actively contributed to the 20-hour HackNight Hackathon at DEVHOST 2024, showcasing technical skills and problem-solving abilities.",
    image: hacknightImage,
    imageAlt: "HackNight Logo",
    footerLink: [
      {
        name: "View Certificate",
        url: "https://www.linkedin.com/posts/minhazahmed69_hacknight-particpation-activity-7265641020380319745-VFTr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1DueoB8d0LhJPwGekycH6_oyvIPchAyzk",
      },
    ],
  },
];

// Contact Information
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  number: "+91-9901320599",
  email_address: "minhazahmed554@gmail.com",
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  bigProjects,
  contactInfo,
  achievementsCards,
};