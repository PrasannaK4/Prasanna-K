import React from "react";
import styles from "./HeroStyles.module.css"; // Import CSS module
import heroImage from "../../assets/Profile.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/PrasananCV.pdf";
import { useTheme } from "../../common/ThemeContext"; // Import theme context

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <figure className={styles.heroImage}>
          <img
            src={heroImage}
            alt="Profile picture of Prasanna K"
            className={styles.hero}
            style={{ objectFit: "cover" }}
          />
        </figure>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Prasanna <br /> K
        </h1>
        <h2>Frontend Developer</h2>
        <span className={styles.socialLinks}>
          <a
            href="https://twitter.com/PrasannaK5424"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a
            href="https://github.com/PrasannaK4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://linkedin.com/in/prasanna-k-567685177"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I am a dedicated Front End Developer with a passion for creating
          modern web applications.
        </p>
        <a href={CV} download="PrasananCV.pdf">
          <button className={styles.resumeBtn}>Resume</button>
        </a>
        <p className={styles.email}>
          Email:{" "}
          <a href="mailto:prasanna5424pg@gmail.com">prasanna5424pg@gmail.com</a>
        </p>
        <p className={styles.phone}>Phone: +91 9845330598</p>
      </div>
    </section>
  );
}

export default Hero;
