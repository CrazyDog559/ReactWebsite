import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  CrazyDogLogo,
  logo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Photography and Video Editing",
    url: "#photography",
  },

  {
    id: "1",
    title: "My Work",
    url: "#features",
  },

  /*
  {
    id: "2",
    title: "Roadmap",
    url: "#roadmap",
  },

  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
*/

  {
    id: "4",
    title: "Contact",
    url: "#contact",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Resume",
    url: "#resume",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  CrazyDogLogo,
  CrazyDogLogo,
  CrazyDogLogo,
  CrazyDogLogo,
  CrazyDogLogo,
];

export const brainwaveServices = [
  "Photo taking",
  "Photo Editing",
  "Video Editing",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Education",
    text: "Graduated Highschool Early",
    date: "Sept 2020",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Education",
    text: "Computer Engineering Student at UCLA",
    date: "Sept 2022",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Learn",
    text: "Create self projects and modify code",
    date: "",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Work",
    text: "",
    date: "",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText = "";

export const collabContent = [
  {
    id: "0",
    title: "Student",
    text: collabText,
  },
  {
    id: "1",
    title: "Freelancer",
  },
  {
    id: "2",
    title: "If you would like to support me to keep the website running",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "ProjectRender",
    text: "A nonprofit organization committed to improving the quality of life for people in San Diego without computer access.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "CrazyDog",
    text: "My Youtube Channel where I can express my video editing skills and showcase the exciting memories I make.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "SkoolMadeEz",
    text: "A youtube channel created to teach and share educational knowledge.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Coding Projects",
    text: "Explore my diverse coding projects, including web development with React, IoT-based game, Games using C++, and more",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Video And Photo Portfolio",
    text: "This website is my portfolio showcasing all the work I have created.  Explore more of my creative work here.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "About Me",
    text: "I aim to expand my skills and use my tech knowledge to make a positive impact. I aspire to become a product manager or enter tech consulting, where I can bridge the gap between technology and user needs.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
