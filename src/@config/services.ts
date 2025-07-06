import {
  DeviceMobileIcon,
  ChipIcon,
  UserGroupIcon,
  DesktopComputerIcon,
  ColorSwatchIcon,
  CodeIcon,
} from "@heroicons/react/outline";
import { StatItem } from "types";

export const servicesOffered = [
  {
    title: "Personalized Website & Mobile App Development",
    description:
      "We engineer high-performance websites and mobile applications using state-of-the-art technology stacks, ensuring seamless scalability, security, and user engagement.",
    icon: CodeIcon,
  },
  {
    title: "Next-Gen SaaS & Custom Application Development",
    description:
      "Empowering businesses with bespoke SaaS platforms and intelligent enterprise software solutions, tailored to optimize operations and enhance efficiency.",
    icon: DeviceMobileIcon,
  },
  {
    title: "Strategic Social Media & Brand Management",
    description:
      "Elevating digital presence through high-impact content strategies, customer engagement, and data-driven social media management for sustained brand growth.",
    icon: ColorSwatchIcon,
  },
  {
    title: "AI-Powered Business Transformation",
    description:
      "Leveraging artificial intelligence to build predictive analytics, automation frameworks, and intelligent workflows that drive innovation and operational excellence.",
    icon: ChipIcon,
  },
  {
    title: "Digital Marketing & High-End Design Solutions",
    description:
      "Crafting visually compelling and conversion-driven designs for digital platforms, branding, and user experience optimization, ensuring market differentiation.",
    icon: ColorSwatchIcon,
  },
  {
    title: "Executive-Level 1:1 Technology Consultation",
    description:
      "Offering C-suite advisory and strategic IT consultation to align technology initiatives with business objectives, ensuring sustainable growth and innovation.",
    icon: UserGroupIcon,
  },
  {
    title: "Enterprise IT Infrastructure & Hardware Solutions",
    description:
      "Providing high-performance computing systems, enterprise-grade servers, and IT equipment procurement, ensuring reliability and scalability for your business.",
    icon: DesktopComputerIcon,
  },
  {
    title: "Corporate Digitization & Cloud Workspace Integration",
    description:
      "Seamless implementation of Google Workspace, Microsoft 365, and advanced cloud-based productivity solutions for modern enterprises.",
    icon: DesktopComputerIcon,
  },
  {
    title: "Custom Notion Dashboards & Business Analytics",
    description:
      "Developing tailored Notion dashboards and analytics frameworks to enhance data visualization, workflow automation, and strategic decision-making.",
    icon: DesktopComputerIcon,
  },
];

// src/config/services.ts
export const services = [
  {
    id: 1,
    title: "Personalized Websites",
    description: "Modern web solutions for personal and business needs",
    features: [
      "Domain Registration",
      "SEO Optimization",
      "Performance Tuning",
      "CMS Integration",
    ],
    icon: "💻",
    longDescription:
      "Create powerful web applications with cutting-edge technologies and best practices.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    tiers: {
      standard: [
        "Up to 5 pages",
        "Basic SEO",
        "Mobile Responsive",
        "3 Months Support",
        "Basic Analytics",
      ],
      business: [
        "Up to 15 pages",
        "Advanced SEO",
        "Analytics Integration",
        "6 Months Support",
        "E-commerce Features",
        "Custom Integrations",
      ],
      pro: [
        "Unlimited Pages",
        "Full SEO Suite",
        "Custom Features",
        "1 Year Support",
        "Priority Development",
        "24/7 Support",
        "Custom Analytics",
      ],
    },
  },
  {
    id: 2,
    title: "App Development",
    description:
      "Native and cross-platform mobile apps or SaaS solutions for your business needs",
    features: [
      "iOS & Android",
      "React Native",
      "App Store Support",
      "Push Notifications",
    ],
    icon: "📱",
    longDescription:
      "Build powerful mobile applications that work seamlessly across all platforms.",
    technologies: ["React Native", "Swift", "Kotlin", "Flutter"],
    tiers: {
      standard: [
        "Single Platform",
        "Basic Features",
        "App Store Submission",
        "3 Months Support",
        "Basic Analytics",
      ],
      business: [
        "Dual Platform",
        "Advanced Features",
        "Analytics Integration",
        "6 Months Support",
        "Push Notifications",
        "Offline Mode",
      ],
      pro: [
        "Multi-Platform",
        "Custom Features",
        "Priority Support",
        "Lifetime Updates",
        "Advanced Security",
        "Custom Analytics",
        "White Label Option",
      ],
    },
  },
  {
    id: 3,
    title: "Strategic Social Media & Brand Management",
    description:
      "Elevating digital presence through high-impact content strategies, customer engagement, and data-driven social media management for sustained brand growth.",
    features: [
      "Content Creation",
      "Post Scheduling",
      "Analytics Reports",
      "Community Management",
    ],
    icon: "📊",
    longDescription:
      "Comprehensive social media management with scheduled posting, analytics, and engagement strategies.",
    technologies: ["Buffer", "Hootsuite", "Meta Business", "Twitter API"],
    platforms: ["Instagram", "Facebook", "Twitter/X", "LinkedIn", "TikTok"],
    tiers: {
      standard: [
        "3 Social Platforms",
        "15 Scheduled Posts/Month",
        "Basic Content Calendar",
        "Monthly Analytics Report",
        "2 Revision Rounds",
        "Response Time: 24h",
        "Basic Hashtag Strategy",
      ],
      business: [
        "5 Social Platforms",
        "30 Scheduled Posts/Month",
        "Advanced Content Calendar",
        "Bi-weekly Analytics Report",
        "4 Revision Rounds",
        "Response Time: 12h",
        "Custom Hashtag Strategy",
        "Competitor Analysis",
        "Community Management",
      ],
      pro: [
        "All Social Platforms",
        "Unlimited Posts/Month",
        "Dynamic Content Calendar",
        "Weekly Analytics Report",
        "Unlimited Revisions",
        "Response Time: 4h",
        "Advanced Hashtag Strategy",
        "Monthly Strategy Meetings",
        "Crisis Management",
        "Influencer Outreach",
        "Paid Ads Management",
      ],
    },
  },
  {
    id: 4,
    title: "Digital Marketing & High-End Design Solutions",
    description:
      "Crafting visually compelling and conversion-driven designs for digital platforms, branding, and user experience optimization, ensuring market differentiation.",
    features: [
      "SEO Optimization",
      "PPC Campaigns",
      "Content Marketing",
      "Email Marketing",
      "UX/UI Design",
    ],
    icon: "🎨",
    longDescription:
      "Tailored digital marketing strategies to boost brand awareness, engage customers, and drive conversions through SEO, PPC, content marketing, and more.",
    technologies: ["Google Analytics", "AdWords", "HubSpot", "Figma"],
    tiers: {
      standard: [
        "Basic SEO",
        "1 PPC Campaign",
        "Monthly Blog Post",
        "Quarterly Email Newsletter",
        "Basic UX/UI Design",
        "Response Time: 24h",
      ],
      business: [
        "Advanced SEO",
        "3 PPC Campaigns",
        "Bi-weekly Blog Posts",
        "Monthly Email Newsletters",
        "Intermediate UX/UI Design",
        "Response Time: 12h",
      ],
      pro: [
        "Full SEO Suite",
        "5 PPC Campaigns",
        "Weekly Blog Posts",
        "Bi-weekly Email Newsletters",
        "Advanced UX/UI Design",
        "Response Time: 4h",
        "Custom Analytics",
        "Monthly Strategy Meetings",
        "Influencer Outreach",
        "Paid Ads Management",
      ],
    },
  },
  {
    id: 5,
    title: "Cloud Services (DevOps)",
    description:
      "Cloud infrastructure and DevOps solutions for scalable enterprise applications.",
    features: [
      "Azure Deployment",
      "AWS Deployment",
      "GCP Deployment",
      "CI/CD Pipelines",
      "Monitoring & Logging",
    ],
    icon: "☁️",
    longDescription:
      "Developing Cloud Solutions with Azure, AWS, and Google Cloud Platform, including CI/CD pipelines, monitoring, and logging.",
    technologies: ["Azure", "AWS", "GCP", "Jenkins", "Prometheus"],
    tiers: {
      standard: [
        "Setup & Training",
        "1 Month Support",
        "Cloud Deployment",
        "Basic CI/CD Pipeline",
        "Basic Monitoring",
        "Response Time: 2h",
      ],
      business: [
        "Setup & Training",
        "1 Month Support",
        "Cloud Deployment",
        "Advanced CI/CD Pipeline",
        "Detailed Monitoring & Logging",
        "24/7 Support",
        "Custom Analytics",
        "Nightly Backups",
      ],
      pro: [
        "Setup & Training",
        "1 Month Support",
        "Cloud Deployment",
        "Custom CI/CD Pipeline",
        "Advanced Monitoring & Logging",
        "Dedicated Support Team",
        "Custom Analytics",
        "Dedicated Account Manager",
        "Round the Clock Deployment",
        "Nightly Backups",
        "Custom Integrations",
      ],
    },
  },
  {
    id: 6,
    title: "Network Services",
    description:
      "Design, deployment, and management of robust network infrastructures to ensure high-speed, secure, and reliable connectivity for your business.",
    features: [
      "Wired & Wireless Networking",
      "Network Security",
      "VPN Setup",
      "Load Balancing",
    ],
    icon: "🌐",
    longDescription:
      "Building and managing secure, scalable, and high-speed network infrastructures for optimal business operations.",
    technologies: ["Cisco", "Juniper", "Fortinet", "VMware"],
    tiers: {
      standard: [
        "Basic Wired Networking",
        "Standard Firewall",
        "VPN Setup",
        "Monthly Monitoring",
        "Response Time: 24h",
      ],
      business: [
        "Advanced Wired & Wireless Networking",
        "Advanced Firewall",
        "VPN Setup",
        "Bi-weekly Monitoring",
        "Response Time: 12h",
        "Load Balancing",
      ],
      pro: [
        "Custom Wired & Wireless Networking",
        "Custom Firewall",
        "VPN Setup",
        "Weekly Monitoring",
        "Response Time: 4h",
        "Load Balancing",
        "DDoS Protection",
        "24/7 Network Monitoring",
        "Dedicated Network Engineer",
      ],
    },
  },
  {
    id: 7,
    title: "IT Hardware Solutions",
    description:
      "Supplying and configuring top-tier IT hardware to support your business operations, including servers, storage, and networking devices.",
    features: [
      "Server Provisioning",
      "Storage Solutions",
      "Networking Equipment",
      "Hardware Maintenance",
    ],
    icon: "🖥️",
    longDescription:
      "Providing high-performance computing systems, enterprise-grade servers, and IT equipment procurement, ensuring reliability and scalability for your business.",
    technologies: ["HP", "Dell", "Cisco", "NetApp"],
    tiers: {
      standard: [
        "Basic Server Provisioning",
        "Standard Storage Solutions",
        "Basic Networking Equipment",
        "Quarterly Maintenance",
        "Response Time: 24h",
      ],
      business: [
        "Advanced Server Provisioning",
        "Advanced Storage Solutions",
        "Advanced Networking Equipment",
        "Monthly Maintenance",
        "Response Time: 12h",
      ],
      pro: [
        "Custom Server Provisioning",
        "Custom Storage Solutions",
        "Custom Networking Equipment",
        "Weekly Maintenance",
        "Response Time: 4h",
        "Dedicated IT Support",
        "24/7 Hardware Monitoring",
      ],
    },
  },
  {
    id: 8,
    title: "AI Products & LLM Integrations",
    description:
      "Developing AI-driven products and integrating Large Language Models (LLMs) to automate processes, enhance decision-making, and provide intelligent insights.",
    features: [
      "Predictive Analytics",
      "Automation Frameworks",
      "LLM Integration",
      "Custom AI Solutions",
    ],
    icon: "🤖",
    longDescription:
      "Leveraging artificial intelligence to build predictive analytics, automation frameworks, and intelligent workflows that drive innovation and operational excellence.",
    technologies: ["TensorFlow", "PyTorch", "OpenAI GPT", "AWS SageMaker"],
    tiers: {
      standard: [
        "Basic Predictive Analytics",
        "Simple Automation Framework",
        "LLM Integration",
        "Monthly Reporting",
        "Response Time: 24h",
      ],
      business: [
        "Advanced Predictive Analytics",
        "Advanced Automation Framework",
        "LLM Integration",
        "Bi-weekly Reporting",
        "Response Time: 12h",
      ],
      pro: [
        "Custom Predictive Analytics",
        "Custom Automation Framework",
        "LLM Integration",
        "Weekly Reporting",
        "Response Time: 4h",
        "Dedicated AI Engineer",
        "24/7 AI Support",
        "Custom AI Solutions",
      ],
    },
  },
];

export const consultationService = {
  id: "consultation",
  title: "All Other Services",
  description: "30-min Free 1:1 strategy session with our experts",
  icon: "🤝",
  isConsultation: true,
  features: [
    "1:1 Expert Consultation",
    "Technology Stack Review",
    "Architecture Planning",
    "Cost Optimization",
  ],
};

export const sections = [
  {
    id: "mission",
    title: "What we do?",
    icon: "🎯",
    content:
      "To revolutionize digital experiences through quick modern Websites and AI-powered solutions transforming businesses.",
    points: [
      "Harness AI & Machine Learning for intelligent solutions",
      "Create lightning-fast, scalable applications",
      "Design intuitive, modern user experiences",
      "Deliver data-driven, smart engineering solutions",
      "Enable rapid digital transformation",
    ],
  },
  {
    id: "vision",
    title: "Who we are?",
    icon: "🌟",
    content:
      "To be the pioneer in AI-integrated development, setting new standards in smart engineering and innovative digital solutions.",
    points: [
      "Lead AI-driven development practices",
      "Set benchmarks in performance optimization",
      "Shape the future of user experience design",
      "Drive innovation through smart technology",
      "Build sustainable, future-proof solutions",
    ],
  },
  {
    id: "values",
    title: "Why us?",
    icon: "💫",
    content:
      "Our commitment to innovation, excellence, and smart solutions defines our approach to every project.",
    points: [
      "Innovation First: Embracing cutting-edge AI & technology",
      "Smart Engineering: Optimizing for performance & scale",
      "Design Excellence: Creating stunning modern interfaces",
      "Rapid Delivery: Accelerating development cycles",
      "Continuous Evolution: Always learning & improving",
    ],
  },
];

export const projects = [
  {
    title: "Websites/ECommerce Stores",
    category: "Web Development",
    description: "A Custom Website or full-featured e-commerce platform.",
    image: "/assets/images/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Supercharged with AI-LLMs",
    category: "AI Development",
    description:
      "Custom analytics solution using machine learning for predictive insights.",
    image: "/assets/images/aianalytics.png",
    technologies: ["Python", "TensorFlow", "AWS"],
  },
  {
    title: "Startup Ideas Pilot/MVPs",
    category: "Mobile Development",
    description: "Quick Pilots and MVPs for startups to validate their ideas.",
    image: "/assets/images/mobilebanking.png",
    technologies: ["React Native", "Firebase", "Node.js"],
  },
  {
    title: "Healthcare Management System",
    category: "Custom Software",
    description:
      "Comprehensive healthcare management system for clinics and hospitals.",
    image: "/assets/images/ehr.png",
    technologies: ["Angular", ".NET", "SQL Server"],
  },
  {
    title: "Smart Home IoT Platform",
    category: "IoT Development",
    description: "IoT platform for managing and monitoring smart home devices.",
    image: "/assets/images/iotapp.jpg",
    technologies: ["React", "Python", "MQTT"],
  },
  {
    title: "Supply Chain Management",
    category: "Enterprise Software",
    description:
      "End-to-end supply chain management solution with real-time tracking.",
    image: "/assets/images/scmapp.png",
    technologies: ["Vue.js", "Java Spring", "PostgreSQL"],
  },
  {
    title: "Online Store",
    category: "Web Development",
    description:
      "Full-featured e-commerce platform with Live Order Management and COD.",
    image: "/assets/images/ecommerce.png",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Personal Healthcare Trackers",
    category: "Custom Software",
    description:
      "Comprehensive personal healthcare management system for Sports and Professionals.",
    image: "/assets/images/ehr.png",
    technologies: ["React", "NodeJS", "MySQL Server"],
  },
  {
    title: "Real Estate Solutions - AR/VR",
    category: "AR/VR",
    description:
      "Virtual Reality solutions for Real Esate using AR/VR and other Lead Generative Features.",
    image: "/assets/images/aianalytics.png",
    technologies: ["Python", "TensorFlow", "React"],
  },
];

export const stats: StatItem[] = [
  {
    value: 9,
    label: "Websites Launched",
    sublabel: "Domains Registered",
    suffix: "+",
    color: "from-blue-500 to-blue-600",
  },
  {
    value: 2.5,
    label: "Million",
    sublabel: "Lines of Code Deployed",
    suffix: "M+",
    color: "from-green-500 to-green-600",
  },
  {
    value: 5,
    label: "Clients",
    sublabel: "Across 3+ Countries",
    prefix: "+",
    color: "from-purple-500 to-purple-600",
  },
  {
    value: 12,
    label: "Services",
    sublabel: "12+ Digital Solutions",
    suffix: "+",
    color: "from-indigo-500 to-indigo-600",
  },
];

export const achievements = [
  {
    title: "App Performance",
    stats: [
      { label: "Mobile Responsiveness", value: "100%" },
      { label: "SEO Score Average", value: "95+" },
      { label: "Conversion Rate", value: "4.8%" },
    ],
  },
  {
    title: "Social Media Growth",
    stats: [
      { label: "Engagement Rate", value: "8.5%" },
      { label: "Audience Growth", value: "300%" },
      { label: "Content Reach", value: "100k+" },
    ],
  },
  {
    title: "Digital Marketing",
    stats: [
      { label: "ROI Average", value: "250%" },
      { label: "Lead Generation", value: "2K+" },
      { label: "Click-Through Rate", value: "3.2%" },
    ],
  },
];
