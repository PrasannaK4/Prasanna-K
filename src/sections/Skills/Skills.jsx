import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1>Skills</h1>
      <br />
      <div className={styles.skillList}>
        <SkillList icon={checkMarkIcon} skill="JavaScript" />
        <SkillList icon={checkMarkIcon} skill="TypeScript" />
        <SkillList icon={checkMarkIcon} skill="HTML" />
        <SkillList icon={checkMarkIcon} skill="CSS" />
        <SkillList icon={checkMarkIcon} skill="Node JS" />
        <SkillList icon={checkMarkIcon} skill="C#" />
        <SkillList icon={checkMarkIcon} skill="Rest APIs" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={checkMarkIcon} skill="React" />
        <SkillList icon={checkMarkIcon} skill="Next.js" />
        <SkillList icon={checkMarkIcon} skill="Tailwind CSS" />
        <SkillList icon={checkMarkIcon} skill="SVGs" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={checkMarkIcon} skill="Redux" />
        <SkillList icon={checkMarkIcon} skill="Webpack" />
        <SkillList icon={checkMarkIcon} skill="git" />
        <SkillList icon={checkMarkIcon} skill="jest" />
      </div>
      <hr />
    </section>
  );
};

export default Skills;
