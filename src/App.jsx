import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link as ScrollLink, Element } from "react-scroll";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <ScrollLink to="hero" smooth={true} duration={500}>
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="projects" smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="skills" smooth={true} duration={500}>
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Element name="hero">
          <Hero />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
