// import { useState } from 'react'
import React, { useRef, useEffect, useState } from "react";

import "./App.css";

const sections = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Live Projects", id: "projects" },
  { name: "Experience", id: "Experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const works = [
  { id: 1, Poster: "React.png", Title: "React JS", Year: "2022" },
  { id: 2, Poster: "next.png", Title: "NEXT JS", Year: "2022" },
  { id: 3, Poster: "js.png", Title: "JAVASCRIPT", Year: "2022" },
  { id: 4, Poster: "download (5).png", Title: "Firebase", Year: "2022" },
  { id: 5, Poster: "tailwind.png", Title: "TAILWIND CSS", Year: "2021" },
  { id: 6, Poster: "html.png", Title: "HTML5", Year: "2021" },
  { id: 7, Poster: "css.png", Title: "CSS", Year: "2021" },
  { id: 8, Poster: "php.png", Title: "PHP", Year: "2022" },
  { id: 9, Poster: "wordpress.png", Title: "WORDPRESS", Year: "2022" },
  { id: 10, Poster: "635e171853ec7189d4683ff4c249cfa4.png", Title: "SHOPIFY", Year: "2022" }
];

const projects = [
  {
    id: 1,
    name: "https://home-radar-ruby.vercel.app/",
    description: "HomeRadar",
    image: "/homeradar.png",
  },
   {
    id: 2,
    name: "https://www.switchonline.xyz/",
    description: "SwitchOnline",
    image: "/switch.jpg",
  },
  {
    id: 3,
    name: "https://www.shuttlers.co/products/voucher",
    description: "Shuttlers",
    image: "/Shuttlers.png",
  },
  {
    id: 4,
    name: "https://to-do-app-ten-jade.vercel.app/",
    description: "To-do List",
    image: "/animo2.png",
  },
  {
    id: 5,
    name: "https://usepopcorn-snowy.vercel.app/",
    description: "IMBD clone  (PC and Tablet view only)",
    image: "/animo3.png",
  },
  {
    id: 6,
    name: "https://sneakers-shop-mu.vercel.app/",
    description: "shoepify",
    image: "/animo4.png",
  },
  {
    id: 7,
    name: "https://consultancysite.vercel.app/",
    description: "Redella Landing Page",
    image: "/animo5.png",
  },
];

const investments = [
  {
    id: 1,
    name: "Bachelors Degree",
    description: "University of Ibadan February, 2017 - December, 2021",
    image: "invest.png",
  },
  {
    id: 2,
    name: "Master of Arts",
    description: "University of Ibadan September, 2024",
    image: "startup.png",
  },
];
const socials = [
  {
    id: 1,
    name: "X / Twitter",
    description: "manslikesherl0ck",
    image: "twitter.png",
  },
  {
    id: 2,
    name: "Email",
    description: "adejumoibk702@gmail.com",
    image: "email.png",
  },
  {
    id: 4,
    name: "Phone",
    description: "+234 913 351 6780",
    image: "phone-call.png",
  },
];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="body">
        <div className="flex-body">
          <Sidebar />
          <MainBody />
        </div>
      </div>
    </>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <div className="test">
        <button className="hamburger" onClick={() => setIsOpen(true)}>
          &#9776;
        </button>
      </div>

      <div className={`Sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>
          &times;
        </button>

        <div className="profile-box">
          
          <div className="name-titile">
            <div className="dev-name">Adejumo Ibukun</div>
            <div className="dev-role">Web Developer</div>
          </div>
        </div>

        {/* Pass the close function down */}
        <NavList closeSidebar={closeSidebar} />
      </div>

      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
}

// function Sidebar() {
//   return (
//     <>
//       <div className="Sidebar">
//         <div className="profile-box">
//           <div>
//             <img src="/dp.png" alt="display picture" />
//           </div>
//           <div className="name-titile">
//             <div className="dev-name">Adejumo Ibukun</div>
//             <div className="dev-role">Web Developer</div>
//           </div>
//           <NavList />
//         </div>
//       </div>
//     </>
//   );
// }

function MainBody() {
  return (
    <div className="main">
      <About />
      <WorkCard />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
function About() {
  return (
    <section className="home" id="about">
      <div>
        <div className="online-box">
          <div>
            <img
              src="/Container.png"
              alt="A descriptive alt text"
              className="home-image"
            />
          </div>
          <div className="available">Available for work</div>
        </div>
       <h1 className="intro-header">
  Building modern interfaces
  <span className="gray-text"> and seamless web experiences</span>
</h1>
        <p>
          With a strong background in frontend development, I have consistently
          demonstrated my proficiency in building intuitive user interfaces and
          delivering high-quality web applications.</p>
          
          <p>My track record of successfully collaborating with
          cross-functional teams and my commitment to continuous improvement
          make me a valuable asset to any organization seeking to elevate its
          frontend development capabilities.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div>
        <h2>Live Projects</h2>
        <ProjectList />
      </div>
    </section>
  );
}

function WorkCard() {
  const listRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [showBar, setShowBar] = useState(false);

  // Show progress bar only on mobile
  useEffect(() => {
    function handleResize() {
      setShowBar(window.innerWidth <= 750);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update progress bar width on scroll
  useEffect(() => {
    if (!showBar) return;
    const list = listRef.current;
    const bar = barRef.current;
    if (!list || !bar) return;

    function updateBar() {
      if (!list || !bar) return; // <-- Add this null check
      const maxScroll = list.scrollWidth - list.clientWidth;
      const percent = maxScroll > 0 ? (list.scrollLeft / maxScroll) * 100 : 0;
      bar.style.width = percent + "%";
    }

    list.addEventListener("scroll", updateBar);
    updateBar();

    return () => list.removeEventListener("scroll", updateBar);
  }, [showBar]);
  return (
    <section id="skills">
      <div>
        <h2> Skills</h2>
        <div className="work-list-container">
          <WorkList listRef={listRef} />
          {showBar && (
            <div className="work-scroll-bar-bg">
              <div className="work-scroll-bar-fg" ref={barRef}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
function WorkList({ listRef }: { listRef: React.RefObject<HTMLUListElement> }) {
  return (
    <ul className="work-list" ref={listRef}>
      {works.map((work) => (
        <li key={work.id} className="work-item">
          <img
            src={work.Poster}
            alt={`${work.Title} poster`}
            className="work-poster"
          />
          <div className="work-details">
            <div className="work-title">{work.Title}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

type NavListProps = {
  closeSidebar: () => void;
};

function NavList({ closeSidebar }: NavListProps) {
  return (
    <ul className="list">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="nav-link"
            onClick={closeSidebar}
          >
            {section.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

function ProjectList() {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.id} className="project-item">
          <a className="project-link" href={`${project.name}`}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="project-description">
              <h3>{project.description}</h3>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Experience() {
  return (
    <section className="Experience" id="Experience">
      <h2>Experience</h2>
      <div className="peoplesay-box">
        <div className="flexnamebox">
          <div className="boxed-names">
            <div className="name-rev">Freelance Frontend Engineer</div>
            <div className="pos-rev">Present</div>
          </div>
        </div>
        <ul style={{ lineHeight: "25px" }}>
          <li>
            Utilized React.js, Next.js, and other modern frameworks to deliver
            high-performing, scalable front-end solutions.
          </li>
          <li>
            Handled full-stack responsibilities when needed, including backend
            integration using Firebase.
          </li>
          <li>
            Optimized website performance and SEO through best practices in
            responsive design, image handling, and SSR.
          </li>
          <li>
            Implemented version control workflows using Git, ensuring clean code
            collaboration and deployment.
          </li>
        </ul>
      </div>
      <div className="peoplesay-box">
        <div className="flexnamebox">
          <div className="boxed-names">
            <div className="name-rev">WordPress Developer for Animo Gifts</div>
            <div className="pos-rev">December 2024 – April 2025</div>
          </div>
        </div>
        <ul style={{ lineHeight: "25px" }}>
          <li>
           Wrote clean, maintainable code using PHP, JavaScript, CSS, and MySQL to build high-performance WordPress sites.
          </li>
          <li>
            Translated UI/UX wireframes and mockups from Figma into functional WordPress components and themes.
          </li>
          <li>
          Collaborated remotely with cross-functional teams to implement user-friendly interfaces and optimize site usability.
          </li>
          <li>
            Integrated essential WordPress plugins and customized them to support advanced theme functionalities.
          </li>
        </ul>
      </div>
      <div className="peoplesay-box">
        <div className="flexnamebox">
          <div className="boxed-names">
            <div className="name-rev">Frontend Engineer</div>
            <div className="pos-rev">Jet and Joe, Remote</div>
            <div className="pos-rev">January 2022 - August 2022</div>
          </div>
        </div>
        <ul style={{ lineHeight: "25px" }}>
          <li>
            Developed the business website, ensuring optimal performance across
            devices.
          </li>
          <li>
            Integrated modern UX/UI principles to enhance user engagement and
            satisfaction.
          </li>
          <li>
            Managed full development lifecycle from wireframing and prototyping
            to deployment and maintenance.
          </li>
        </ul>
      </div>
      <div className="peoplesay-box">
        <div className="flexnamebox">
          <div className="boxed-names">
            <div className="name-rev">Frontend Engineer</div>
            <div className="pos-rev">AVH, Remote</div>
            <div className="pos-rev">June 2023 - September 2023</div>
          </div>
        </div>
        <ul style={{ lineHeight: "25px" }}>
          <li>
            Implemented server-side rendering (SSR) with Next.js, enhancing page
            load speed by 10% and boosting SEO rankings.
          </li>
          <li>
            Collaborated with senior developers to streamline development
            processes, reducing build time by 25% through effective use of
            React.js.
          </li>
          <li>
            Worked closely with the product design team to craft an intuitive
            UI, resulting in a 20% increase in user engagement.
          </li>
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div>
        <ul className="project-list">
          {investments.map((investments) => (
            <li key={investments.id} className="news-item">
              <img src={investments.image} className="news-image" />
              <div className="news-description">
                <h3>{investments.name}</h3>
                <p>{investments.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div>
        <ul className="socials-list">
          {socials.map((social) => (
            <li key={social.id} className="social-item">
              {/* <img
                src={social.image}
                alt={social.name}
                className="social-image"
              /> */}
              <div className="social-description">
                <h3>{social.name}</h3>
                <p>{social.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default App;
