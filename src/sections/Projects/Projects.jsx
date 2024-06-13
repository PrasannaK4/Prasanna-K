import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";
import nasaImage from "../../assets/NasaImage.png";
import expenceTracker from "../../assets/expence_Tracker.png";
import weather from "../../assets/weather.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={nasaImage}
          link="https://github.com/PrasannaK4/React_Projects/tree/main/Nasa_App"
          h3="NASA"
          p="NASA APP"
        />
        <ProjectCard
          src={expenceTracker}
          link="https://github.com/PrasannaK4/React_Projects/tree/main/expence_tracker"
          h3="Expence Tracker"
          p="Expence Tracker APP"
        />
        <ProjectCard
          src={weather}
          link="https://github.com/PrasannaK4/Javascript_Projects/tree/main/wheather%20app"
          h3="Weather Tracker"
          p="Weather APP"
        />
      </div>
    </section>
  );
}

export default Projects;
