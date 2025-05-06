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
  { name: "Skills", id: "work" },
  { name: "Live Projects", id: "projects" },
  { name: "Services", id: "services" },
  { name: "Newsletter", id: "newsletter" },
  { name: "What Others Say", id: "what-others-say" },
  { name: "Investments", id: "investments" },
  { name: "Social", id: "social" },
  { name: "Blog", id: "blog" },
];

const works = [
  { id: 1, Poster: "React.png", Title: "React JS", Year: "2022" },
  { id: 2, Poster: "next.png", Title: "NEXT JS", Year: "2022" },
  { id: 3, Poster: "js.png", Title: "JAVASCRIPT", Year: "2022" },
  { id: 4, Poster: "html.png", Title: "HTML5", Year: "2021" },
  { id: 5, Poster: "css.png", Title: "CSS", Year: "2021" },
  { id: 6, Poster: "php.png", Title: "PHP", Year: "2022" },
  { id: 7, Poster: "wordpress.png", Title: "WORDPRESS", Year: "2022" },
  { id: 8, Poster: "photoshop.png", Title: "PHOTOSHOP", Year: "2022" },
];

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "This is the first project",
    image: "/path-to-image1.jpg",
  },
  {
    id: 2,
    name: "Project Two",
    description: "This is the second project",
    image: "/path-to-image2.jpg",
  },
  {
    id: 3,
    name: "www.animogifts.com",
    description: "An ecommerce webste built with Vanilla JS, PHP and paystack API to handle payments..Mobile responsive✅",
    image: "/giftbox (2).png",
  },
  {
    id: 4,
    name: "https://usepopcorn-snowy.vercel.app/",
    description: "A IMBD clone where users can search and rate movies, built with react..Mobile responsive❌",
    image: "clapperboard.png",
  },
  {
    id: 5,
    name: "https://sneakers-shop-mu.vercel.app/",
    description: "A shoe ecommerce site, built with Vanilla JS ..Mobile responsive✅",
    image: "shoes.png",
  },
];
const news = [
  {
    id: 1,
    name: "Starting and Growing a Career in Web Design",
    description:
      "As the internet continues to develop and grow exponentially jobs related to the industry do too...",
    image: "8.png",
    year: "April 1, 2025",
  },
  {
    id: 2,
    name: "Create a Landing Page That Performs Great",
    description:
      "Whether you work in marketing, sales, or product design, you should understand the importance of a quality landing page...",
    image: "Container3.png",
    year: "October 8, 2024",
  },
  {
    id: 3,
    name: "How Can Designers Prepare for the Future?",
    description:
      "Last month I had the chance to attend CSS Day in Lagos, a two day event split between a “UI day” focusing on...",
    image: "imagenew.png",
    year: "Jan 4, 2023",
  },
  {
    id: 4,
    name: "Building a Navigation Component with Variables",
    description:
      " Navigation is key within any digital interface. Smart Components enable us to create custom interactive navigation...",
    image: "last-image.png",
    year: "Sep 5, 2022",
  },
];
const investments = [
  {
    id: 1,
    name: "Startup Unicorn",
    description:
      "This company specializes in making amazing things happen. Still in stealth and will launch in 2045.",
    image: "invest.png",
  },
  {
    id: 2,
    name: "Exciting Company",
    description:
      "A company so incredible it will blow your socks off. They specialize in building things and moving mountains.",
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
    name: "LinkedIn",
    description: "in/jakerobinson",
    image: "social3.png",
  },
  {
    id: 3,
    name: "Instagram",
    description: "ibk.adejumo",
    image: "social4.png",
  },
  {
    id: 4,
    name: "Web",
    description: "in/jakerobinson",
    image: "social3.png",
  },
];

const services = [
  {
    id: 1,
    Title: "Web Design",
    Year: "Looking to build a website for your enterprise? I create efficient responsive websites that attract clients.",
    Poster: "person-front-computer-working-html (1).png",
  },
  {
    id: 2,
    Title: "Product Design",
    Year: "I dont just build websites, I am also an expert in product designing  with vast knowlege in using diffrent tools",
    Poster: "photo-editor-histogram-setting-concept (1).png",
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
          {/* <MyComponent /> */}
        </div>
      </div>
    </>
  );
}

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger menu icon */}
      <div className="test">
        <button className="hamburger" onClick={() => setIsOpen(true)}>
          &#9776;
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div className={`Sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          &times;
        </button>

        <div className="profile-box">
          <img src="/dp.png" alt="display picture" />
          <div className="name-titile">
            <div className="dev-name">Adejumo Ibukun</div>
            <div className="dev-role">Web Developer</div>
          </div>
        </div>

        <NavList />
      </div>

      {/* Optional: Overlay background when open */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
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
      <Services />
      <Newsletter />
      <WhatPeopleSay />
      <Investments />
      <Socials />
      <Footer />
    </div>
  );
}
function Home() {
  return (
    <section className="home">
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
          creativity and technical expertise. I specialize in building
          visually engaging, user-focused interfaces and turning design ideas
          into responsive, interactive web experiences.
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
    <section className="projects-section">
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
    <section>
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
function Services() {
  return (
    <section className="services">
      <div>
        <h2>Services</h2>
        <ServicesList />
      </div>
    </section>
  );
}

function ServicesList() {
  return (
    <ul className="service-list">
      {services.map((service) => (
        <li key={service.id} className="service-item">
          <div className="service-details">
            <h3 className="service-title">{service.Title}</h3>
            <p className="service-year">{service.Year}</p>
          </div>
          <img
            src={service.Poster}
            alt={`${service.Title} poster`}
            className="service-poster"
          />
          <div>
            <HoverButton />
          </div>
        </li>
      ))}
    </ul>
  );
}

function NavList() {
  return (
    <ul className="list">
      {sections.map((section) => (
        <li key={section.id}> {section.name}</li>
      ))}
    </ul>
  );
}
function ProjectList() {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.id} className="project-item">
          <img
            src={project.image}
            alt={project.name}
            className="project-image"
          />
          <div className="project-description">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function HoverButton() {
  return <button className="hover-button">Get started</button>;
}

function Newsletter() {
  return (
    <section className="newsletter">
      <div>
        <h2>Newsletter</h2>
        <div className="newsletter-sub">
          <p>
            I frequently relay my ideas to my subscriber list and keep them
            informed about my endeavors—hoping to inspire someone. If you're
            interested in such notifications, put your email below and get them
            sent straight to your inbox.
          </p>
          <form
            className="email-form"
            action="your-server-endpoint"
            method="POST"
          >
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit" className="submit-button">
                Submit
              </button>
            </div>
          </form>
        </div>
        <ul className="project-list">
          {news.map((news) => (
            <li key={news.id} className="news-item">
              <img src={news.image} alt={news.name} className="news-image" />
              <div className="news-description">
                <h3>{news.name}</h3>
                <p>{news.description}</p>
                <p>{news.year}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="hover-button2">View all articles</button>
      </div>
    </section>
  );
}

function WhatPeopleSay() {
  return (
    <section className="review-section">
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
      <div className="peoplesay-box">
        <div className="flexnamebox">
          <div>
            <img src="yuu.png" />
          </div>
          <div className="boxed-names">
            <div className="name-rev">Afolabi Temilade</div>
            <div className="pos-rev">Design Lead</div>
          </div>
        </div>
        <p>
          "Possessing exceptional design skills, a commendable work discipline,
          superior problem-tackling tactics, and tremendous leadership traits,
          Ibukun can add immense value to any contingent."
        </p>
      </div>
      <button className="hover-button2">View all quotes</button>
    </section>
  );
}

function Investments() {
  return (
    <section>
      <h2>Investments</h2>
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
    <section>
      <h2>Socials</h2>
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

function Footer() {
  return (
    <section className="footer">
      <div className="peoplesay-box">
        <div className="flex-footer">
          <div>
            <h2>Partner with me</h2>

            <p>
              Are you seeking a designer to help you make leaps and boubds with
              your business? Hire me to design experiences and build a brand
              that users won't forget.
            </p>
            <div className="flex-btn-container2">
              <ResusableButton className={`primary-btn1`}>
                Lets's start a project
              </ResusableButton>
              <ResusableButton className={`Contact2`}>Contact</ResusableButton>
            </div>
          </div>
          <div>
            <div className="relative-position">
              <img src="Overlay+Shadow.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;
