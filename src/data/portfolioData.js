import project1Image from '../assets/images/project1.png'
import project2Image from '../assets/images/project2.png'

export const portfolioData = {
    name: "Kalin Dev",
    title: "Frontend Developer",
    about: "Frontend Developer specializing in modern web technologies including React, JavaScript, HTML5 and CSS3. Strong focus on creating interactive, component-based user interfaces with clean, maintainable code architecture. Experienced in responsive design principles, state management, and Git workflow",
    journey: "I began my web development journey almost a year ago, teaching myself through self-study. My passion for creating visual interfaces led me to dive deep into HTML, CSS, and more recently, React.",
    interests: "I'm fascinated by user experience-oriented development. I enjoy crafting interfaces that are not only visually appealing, but also intuitive and satisfying to use.",
    availability: "I am currently seeking my first job opportunity in frontend development, preferably in a remote position.",
    languages: ["Spanish (Native)", "English (B1)"],
    projects_presentation: ["In this section, I present the projects I've developed as part of my journey as a Frontend Developer. Starting with pure HTML and CSS layouts where I implemented modern techniques like Grid, Flexbox, and responsive design, I moved on to technologies like React to create interactive web applications. Each project represents a stage in my evolution as a developer, demonstrating my commitment to clean code, best practices, and attention to detail. All my code is available on GitHub, and live demos can be viewed through the links provided. I'm currently expanding my portfolio with more complex and functional React projects."],
    projects_focus: ["I'm currently strengthening my React fundamentals, with emphasis on using hooks like useState and useEffect to manage state and side effects in my components. My next step involves exploring Tailwind CSS to optimize my styling workflow and create more efficient, responsive interfaces."],
    socialLinks: [
      {name: "Github", url: "https://github.com/kalin-web"},
      {name: "LinkedIn", url: "https://www.linkedin.com/in/kalindev/"}
    ],
    skills: [
      {name: "HTML", level: "Advanced"}, 
      {name: "CSS", level: "Advanced"}, 
      {name: "JavaScript", level: "Basic"}, 
      {name: "React", level: "Basic"}, 
      {name: "Git", level: "Basic"}, 
      {name: "Responsive Design", level: "Intermediate"}
    ],
    projects: [
      {
        id: 1,
        title: "Pulse Pricing Page",
        description: "A responsive pricing page showcasing modern CSS techniques such as Flexbox, Grid, and smooth transitions with interactive hover effects. Built from scratch using semantic HTML and pure CSS, inspired by Pulse's design.",
        technologies: "HTML5, CSS3, Flexbox, CSS Grid, Responsive Design, BEM Methodology",
        imageUrl: project1Image,
        link: "https://kalin-web.github.io/pulse-pricing-page/",
        date: "Created: January 2025"
      },
      {
        id: 2,
        title: "Abstract Help Center UI",
        description: "A responsive recreation of Abstract's Help Center interface featuring a clean, accessible design with semantic HTML structure and advanced CSS styling. This project demonstrates attention to detail and pixel-perfect implementation.",
        technologies: "HTML5, CSS3, Flexbox, Responsive Design,  Responsive Design, CSS Variables",
        imageUrl: project2Image,
        link: "https://kalin-web.github.io/abstract-landing-recreation/",
        date: "Created: December 2024"
      }
    ],
    contact: {
      email: "lucaskalin.dev@gmail.com",
      linkedin: "https://www.linkedin.com/in/kalindev/",
      github: "https://github.com/kalin-web"
    }
  };