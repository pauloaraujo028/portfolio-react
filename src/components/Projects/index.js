import React, { useState } from "react";
import { projects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCard";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from "./ProjectsStyle";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <Desc>
          Trabalhei em uma ampla gama de projetos. Aqui estão alguns dos meus
          projetos.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              TODOS
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              TODOS
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
              active
              value="web app"
              onClick={() => setToggle("web app")}
            >
              WEB APP'S
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              WEB APP'S
            </ToggleButton>
          )}
          <Divider />
          {toggle === "wordpress" ? (
            <ToggleButton
              active
              value="wordpress"
              onClick={() => setToggle("wordpress")}
            >
              MOBILE
            </ToggleButton>
          ) : (
            <ToggleButton
              value="wordpress"
              onClick={() => setToggle("wordpress")}
            >
              MOBILE
            </ToggleButton>
          )}
          <Divider />
          {toggle === "backend app" ? (
            <ToggleButton
              active
              value="backend app"
              onClick={() => setToggle("backend app")}
            >
              BACKEND APP'S
            </ToggleButton>
          ) : (
            <ToggleButton
              value="backend app"
              onClick={() => setToggle("backend app")}
            >
              BACKEND APP'S
            </ToggleButton>
          )}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === "all" &&
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
