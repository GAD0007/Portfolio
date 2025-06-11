// import { useState } from 'react'
import { ReactNode } from "react";
import { useState } from "react";


interface ResusableButtonProps {
  children: ReactNode;
  className?: string;
}

import "./App.css";

const sections = [
  { name: "Home", id: "home" },
  { name: "Skills", id: "skills" },
  { name: "Live Projects", id: "projects" },
  { name: "What Others Say", id: "what-others-say" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const works = [
  { id: 1, Poster: "React.png", Title: "React JS", Year: "2022" },
  { id: 2, Poster: "next.png", Title: "NEXT JS", Year: "2022" },
  { id: 3, Poster: "js.png", Title: "JAVASCRIPT", Year: "2022" },
  { id: 4, Poster: "tailwind.png", Title: "TAILWIND CSS", Year: "2021" },
  { id: 5, Poster: "html.png", Title: "HTML5", Year: "2021" },
  { id: 6, Poster: "css.png", Title: "CSS", Year: "2021" },
  { id: 7, Poster: "php.png", Title: "PHP", Year: "2022" },
  { id: 8, Poster: "wordpress.png", Title: "WORDPRESS", Year: "2022" },

];

const projects = [
  {
    id: 1,
    name: "https://animogifts.com",
    description:
      "Ecommerce Site",
    image: "/animo1.png",
  },
  {
    id: 2,
    name: "https://to-do-app-ten-jade.vercel.app/",
    description: "To-do List",
    image: "/animo2.png",
  },
  {
    id: 3,
    name: "https://usepopcorn-snowy.vercel.app/",
    description:
      "IMBD clone",
    image: "/animo3.png",
  },
  {
    id: 4,
    name: "https://sneakers-shop-mu.vercel.app/",
    description: "shoepify",
    image: "/animo4.png",
  },
  {
    id: 5,
    name: "https://consultancysite.vercel.app/",
    description: "consultancy site",
    image: "/animo5.png",
  },
];

const investments = [
  {
    id: 1,
    name: "Bachelors Degree",
    description:
      "University of Ibadan February, 2017 - December, 2021",
    image: "invest.png",
  },
  {
    id: 2,
    name: "Master of Arts",
    description:
      "University of Ibadan September, 2024",
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


const review = [
  {
    id: 1,
    Year: "Your expertise and direction have fueled exceptional design initiatives.",
    Poster: "person-front-computer-working-html (1).png",
    img: "iiiii.png",
    name: "Mary Keats",
    position: "President",
  },
  {
    id: 2,
    Year: "Your style acumen outstanding! Your knowledge and guidance have propelled unique design ventures.",
    Poster: "photo-editor-histogram-setting-concept (1).png",
    img: "67.png",
    name: "Ayo Kehinde",
    position: "UI/UX Lead",
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
          <img src="/dp.png" alt="display picture" />
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
      <Home />
      <WorkCard />
      <Projects />
      <WhatPeopleSay />
      <Investments />
      <Socials />
    
    </div>
  );
}
function Home() {
  return (
    <section className="home" id="home">
      <div>
        <div className="online-box">
          <div>
            <img
              src="/Container.png"
              alt="A descriptive alt text"
              className="home-image"
            />
          </div>
          <div>Accepting new projects</div>
          <div>
            {" "}
            <button className="Contact"> Start a project</button>
          </div>
        </div>
        <h1 className="intro-header">
          Designing products
          <span className="gray-text"> and building digital businesses</span>
        </h1>
        <p>
          Adejumo Ibukun is a frontend developer with a strong blend of
          creativity and technical expertise. I specialize in building visually
          engaging, user-focused interfaces and turning design ideas into
          responsive, interactive web experiences.
        </p>

        <div className="flex-btn-container">
          <ResusableButton className={`primary-btn1`}>
            Lets's start a project
          </ResusableButton>
          <ResusableButton className={`Contact2`}>Contact</ResusableButton>
        </div>
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

function ResusableButton({ children, className }: ResusableButtonProps) {
  return (
    <button className={`resusable-button ${className}`}>{children}</button>
  );
}
function WorkCard() {
  return (
    <section id="skills">
      <div>
        <h2> Skills</h2>
        <WorkList />
      </div>
    </section>
  );
}
function WorkList() {
  return (
    <ul className="work-list">
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





function WhatPeopleSay() {
  return (
    <section className="review-section" id="what-others-say">
      <h2>What others say</h2>
      <div className="peoplesay-box">
        <div className="flexnamebox">
          <div>
            <img src="lZTqZTGcaqGuaCWqqriCJCIv0QU.jpg.png" />
          </div>
          <div className="boxed-names">
            <div className="name-rev">Joseph Peace</div>
            <div className="pos-rev">Design Director</div>
          </div>
        </div>
        <p>
          "Ibukun wasn’t merely a designer; he transformed the face of numerous
          projects. Surpassing expectations as an expert visual and UX designer,
          he rapidly evolved into a precious collaborator on important
          initiatives, consistently generating remarkable results."
        </p>
      </div>
      <ul className="service-list">
        {review.map((review) => (
          <li key={review.id} className="service-item">
            <div className="flexnamebox">
              <div>
                <img src={review.img} />
              </div>
              <div>
                <div className="boxed-names">
                  <div className="name-rev">{review.name}</div>
                  <div className="pos-rev">{review.position}</div>
                </div>
              </div>
            </div>

            <div className="service-details">
              <p className="service-year">{review.Year}</p>
            </div>
          </li>
        ))}
      </ul>
      
      
      
     
    </section>
  );
}

function Investments() {
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

function Socials() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div>
        <ul className="socials-list">
          {socials.map((social) => (
            <li key={social.id} className="social-item">
              <img
                src={social.image}
                alt={social.name}
                className="social-image"
              />
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
