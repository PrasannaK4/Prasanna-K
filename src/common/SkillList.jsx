import React from "react";

function SkillList({icon, skill}) {
  return (
    <span>
      <img src={icon} alt="CheckMark Icon" />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
