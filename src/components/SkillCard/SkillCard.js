import React from "react";
import "./SkillCard.css";
import { IoReload } from "react-icons/io5";

function SkillCard(props) {
  return (
    <div className="skillcard">
      <div className="skillcard-icon">
        {props.icon ? props.icon : <IoReload />}
      </div>
      <h2>{props.title}</h2>
    </div>
  );
}

export default SkillCard;
