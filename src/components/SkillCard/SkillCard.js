import React from "react";
import "./SkillCard.css";

function SkillCard(props) {
  return (
    <div className="skillcard">
      <div className="skillcard-icon">{props.icon}</div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default SkillCard;
