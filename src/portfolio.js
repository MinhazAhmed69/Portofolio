/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Minhaz Ahmed",
  title: "Hi all, I'm Minhaz",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kdOLs8TmgPbYpEHofKOC35Kt7Xym0Flv/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MinhazAhmed69",
  linkedin: "https://www.linkedin.com/in/minhazahmed69/",
  gmail: "minhazahmed554@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "These are my skills, which I am very comfortable with and enjoy working on.",
  skills: [
    emoji(
      "⚡ Developing highly interactive Front-End/User Interfaces for web and mobile applications"
    ),
    emoji(
      "⚡ Building Progressive Web Applications (PWA) and Single Page Applications (SPA)"
    ),
    emoji(
      "⚡ Integrating third-party services such as Firebase and other APIs seamlessly"
    ),
    emoji(
      "⚡ Optimizing performance and enhancing user experience across different platforms"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sahyadri College of Engineering and Management",
      logo: require("./assets/images/12.jpeg"),
      subHeader: "Bachelor of Technology in Computer Science Engineering",
      duration: "September 2023 - September 2027",
      desc: "Took core courses in Computer Science Engineering, covering key areas such as programming, data structures, algorithms, and Japanese language learning.",
      descBullets: [
        "CR of the class",
        " Part of The IEEE community",
        "Participated in various hackathons and coding competitions",
        "Won inter class cultural event",
        "Extensive learning in CSE (Computer Science Engineering), focusing on topics like machine learning, AI, and software engineering",
        "Strong emphasis on self-driven projects and teamwork, which honed my problem-solving and collaboration skills",
        "Dedicated to Japanese language learning, building foundational proficiency",
        "Developed a well-rounded skill set in both technical and cultural aspects, preparing for a global career in tech"
      ]
    },
    {
      schoolName: "Sri Chaitanya School and College",
      logo: require("./assets/images/123.png"),
      subHeader: "CBSE & State Board",
      duration: "March 2018 - March 2023",
      desc: "I attended Sri Chaitanya School from 8th to 10th grade, where I developed a strong foundation in academics and extracurricular activities. Later, I pursued my higher education at Sri Chaitanya Junior College, focusing on the State Board curriculum with a specialization in PCMC (Physics, Chemistry, Mathematics, and Computer Science). This journey helped me build analytical and problem-solving skills essential for my career.",
      descBullets: ["8th to 2nd PUC with a specialization in PCMC"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "30%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Projects which i feel proud of",
  projects: [
    {
      image: require("./assets/images/Frog.png"),
      projectName: "FloodGuardHQ",
      projectDesc:
        "I participated in SSOSC - Srinivas Students Open Source Community’s Srinathon, a national-level hackathon, where I developed a website called FloodGuard. This platform aims to raise flood awareness by providing real-time flood alerts and local detection features."
    },
    {
      image: require("./assets/images/SIP.png"),
      projectName: "Roaring Rythm",
      projectDesc:
        "“It’s a game called Roaring Rhythm, designed for the visually impaired. The game provides a demo beat, and players must use the X and Z keys to match the rhythm. It features multiple tracks that increase in speed and difficulty over time. This innovative idea was selected for the Bangalore Ideathon at Nitte and also secured first place in our class competition.”"
    },
    {
      image: require("./assets/images/lilly.png"),
      projectName: "The Lilly Pad",
      projectDesc:
      "“A minimalist food website with a diverse menu, crafted for an enhanced user experience as our final SkillLab milestone.”"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications!!!",

  achievementsCards: [
    {
      title: "Sahyadri Achievement",
      subtitle:
        "Sahyadri Based Certifications.",
      image: require("./assets/images/hacknight.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Synergia(2024)",
          url: "https://www.linkedin.com/posts/minhazahmed69_hacknight-particpation-activity-7265641020380319745-VFTr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1DueoB8d0LhJPwGekycH6_oyvIPchAyzk"
        },
        {
          name: "Synergia(2023)",
          url: "https://www.linkedin.com/posts/activity-7142117378200416257-znhI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1DueoB8d0LhJPwGekycH6_oyvIPchAyzk"
        },
        {
          name: "TCE(2024)",
          url: "https://www.linkedin.com/posts/minhazahmed69_fullstackdevelopment-mernstack-webdevelopment-activity-7297098474779553792-5UB5?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1DueoB8d0LhJPwGekycH6_oyvIPchAyzk"
        },
        {
          name: "SIP(2023)",
          url: "https://www.linkedin.com/posts/activity-7224395538459246592-ud96?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1DueoB8d0LhJPwGekycH6_oyvIPchAyzk"
        }
      ]
    },
    {
      title: "Nitte Achievement",
      subtitle:
        "Nitte Based Certification.",
      image: require("./assets/images/nitte.png"),
      imageAlt: "nitte",
      footerLink: [
        {
          name: "Certificate of Participation",
          url: "https://www.linkedin.com/posts/minhazahmed69_nitte-meenakshi-institute-of-technology-i-activity-7242868002151350274-2v_B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1DueoB8d0LhJPwGekycH6_oyvIPchAyzk"
        }
      ]
    },

    {
      title: "SriniThon",
      subtitle: "Hackathon conducted in  Srinivas Institute of Technology.",
      image: require("./assets/images/sri.png"),
      imageAlt: "sri Logo",
      footerLink: [
        {name: "Certification", 
          url: "https://www.linkedin.com/posts/minhazahmed69_srinathon-participation-certificate-activity-7273543765703692289-oL9i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1DueoB8d0LhJPwGekycH6_oyvIPchAyzk"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "My Books 📚",
  subtitle:
    "I love to write about my experiences and share my knowledge with the community. I have written a few books on Wattpad, and I am currently working on a new book. Stay tuned for more updates!",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      title: "The BLACK CIPHER",
      subtitle: "A Thriller, Mystery, and Suspense Novel",
      image: require("./assets/images/black.png"),
      url: "https://www.wattpad.com/story/384109803-the-black-cipher"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Duolingo",
      subtitle: "Assignment on Mobile App Development",
      slides_url: "",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Books📖"),
  subtitle: "The BLACK CIPHER",
  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://www.wattpad.com/story/384109803-the-black-cipher"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9901320599",
  email_address: "minhazahmed554@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "elonmusk", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};


