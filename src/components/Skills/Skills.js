import React from "react";
import "./Skills.css";
import {
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiJava,
  DiNpm,
  DiNodejs,
  DiPhotoshop,
  DiReact,
  DiSass,
  DiUnitySmall,
} from "react-icons/di";
import {
  SiAndroidstudio,
  SiAdobexd,
  SiCsharp,
  SiFirebase,
  SiKotlin,
  SiStyledcomponents,
  SiXamarin,
} from "react-icons/si";

import SkillCard from "../SkillCard/SkillCard";

const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-card-container">
        <SkillCard icon={<DiJsBadge />} title="JavaScript" />
        <SkillCard icon={<DiReact />} title="React" />
        <SkillCard icon={<DiHtml5 />} title="HTML" />
        <SkillCard icon={<DiCss3 />} title="CSS" />
        <SkillCard icon={<DiGit />} title="Git" />
        <SkillCard icon={<DiGithubBadge />} title="GitHub" />
        <SkillCard icon={<SiStyledcomponents />} title="Styled Comp." />
        <SkillCard icon={<DiSass />} title="Sass" />
        <SkillCard icon={<SiFirebase />} title="Firebase" />
        <SkillCard icon={<DiNpm />} title="NPM" />
        <SkillCard icon={<DiNodejs />} title="Node.js" />
        <SkillCard icon={<DiPhotoshop />} title="Photoshop" />
        <SkillCard icon={<SiAdobexd />} title="Adobe XD" />
        <SkillCard icon={<SiCsharp />} title="C#" />
        <SkillCard icon={<SiXamarin />} title="Xamarin.Forms" />
        <SkillCard icon={<DiJava />} title="Java" />
        <SkillCard icon={<SiKotlin />} title="Kotlin" />
        <SkillCard icon={<SiAndroidstudio />} title="AndroidStudio" />
        <SkillCard icon={<DiUnitySmall />} title="Unity" />
      </div>
    </div>
  );
};

export default Skills;
