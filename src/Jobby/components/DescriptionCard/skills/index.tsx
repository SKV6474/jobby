import React from "react";
import { SkillsObject } from "../../../interface";
import {
  SkillContainerDiv,
  SkillImg,
  SkillImgContainer,
} from "./styledComponent";

const Skills = (props: { skill: SkillsObject }) => {
  const { skill } = props;

  return (
    <SkillContainerDiv>
      <SkillImgContainer>
        <SkillImg src={skill.image_url} alt="Skill Logo" />
      </SkillImgContainer>
      <div>{skill.name}</div>
    </SkillContainerDiv>
  );
};

export default Skills;
