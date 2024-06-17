import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import nasaImage from "../../assets/NasaImage.png";
import expenceTracker from "../../assets/expence_Tracker.png";
import weather from "../../assets/weather.png";
import eCommerce from "../../assets/e_commerce.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={eCommerce}
          link="https://github.com/PrasannaK4/e_commerce"
          h3="E_Commerce APP"
          p="Skills: React,JavaScript, React_Router,Mango DB,HTML,CSS"
        />
        <ProjectCard
          src={nasaImage}
          link="https://github.com/PrasannaK4/React_Projects/tree/main/Nasa_App"
          h3="NASA APP"
          p="Skills: React,JavaScript,Material UI,HTML,CSS"
        />
        <ProjectCard
          src={weather}
          link="https://github.com/PrasannaK4/Javascript_Projects/tree/main/wheather%20app"
          h3="Weather Tracker"
          p="Skills: React,JavaScript,CSS,API,Bootstrap"
        />
        <ProjectCard
          src={expenceTracker}
          link="https://github.com/PrasannaK4/React_Projects/tree/main/expence_tracker"
          h3="Expence Tracker"
          p="Skills: React,JavaScript,CSS"
        />
      </div>
      <hr />
    </section>
  );
}

export default Projects;
