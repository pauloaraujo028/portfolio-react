import React from "react";
import { skills } from "../../data/constants";
import {
  Container,
  Desc,
  Skill,
  SkillImage,
  SkillItem,
  SkillList,
  SkillTitle,
  SkillsContainer,
  Title,
  Wrapper,
} from "./SkillStyle";

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Aqui estão algumas das minhas habilidades nas quais tenho trabalhado
          no último ano.
        </Desc>
        <SkillsContainer>
          {skills.map((item, index) => (
            <Skill key={index}>
              <SkillTitle>{item.title}</SkillTitle>
              <SkillList>
                {item.skills.map((skill, idx) => (
                  <SkillItem key={idx}>
                    <SkillImage src={skill.image} />
                    {skill.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
