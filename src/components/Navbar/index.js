import React, { useState } from "react";
import { useTheme } from "styled-components";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  Span,
  MobileIcon,
  MobileMenu,
  MobileMenuLinks,
  NavLink,
  NavItems,
  ButtonContainer,
  GithubButton,
  ThemeButton,
} from "./NavbarStyle";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <LocalFireDepartmentIcon fontSize="large" />
          <Span href="/">Paulo Araújo</Span>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="#about">Sobre</NavLink>
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
          {/* <NavLink href="#education">Educação</NavLink> */}
        </NavItems>
        <ButtonContainer>
          <ThemeButton
            onClick={() => {
              const newMode = !darkMode;
              setDarkMode(newMode);
              localStorage.setItem("theme", newMode ? "dark" : "light");
            }}
          >
            {darkMode ? (
              <LightModeIcon color="warning" fontSize="large" />
            ) : (
              <DarkModeIcon color="primary" fontSize="large" />
            )}
          </ThemeButton>
          <GithubButton
            href="https://github.com/pauloaraujo028"
            target="display"
          >
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileMenuLinks href="/" onClick={() => setOpen(!open)}>
            Inicio
          </MobileMenuLinks>
          <MobileMenuLinks href="#about" onClick={() => setOpen(!open)}>
            Sobre
          </MobileMenuLinks>
          <MobileMenuLinks href="#skills" onClick={() => setOpen(!open)}>
            Habilidades
          </MobileMenuLinks>
          <MobileMenuLinks href="#experience" onClick={() => setOpen(!open)}>
            Experiência
          </MobileMenuLinks>
          <MobileMenuLinks href="#projects" onClick={() => setOpen(!open)}>
            Projetos
          </MobileMenuLinks>
          <MobileMenuLinks href="#contact" onClick={() => setOpen(!open)}>
            Contato
          </MobileMenuLinks>
          {/* <MobileMenuLinks href="#about" onClick={() => setOpen(!open)}>
            Education
          </MobileMenuLinks> */}
          <ThemeButton
            onClick={() => {
              const newMode = !darkMode;
              setDarkMode(newMode);
              localStorage.setItem("theme", newMode ? "dark" : "light");
            }}
          >
            {darkMode ? (
              <LightModeIcon color="warning" fontSize="large" />
            ) : (
              <DarkModeIcon color="primary" fontSize="large" />
            )}
          </ThemeButton>
          <GithubButton
            style={{
              padding: "10px 16px",
              background: `${theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href="https://github.com/pauloaraujo028"
            target="_blank"
          >
            Github Profile
          </GithubButton>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
