import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { bio } from "../../data/constants";
import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  NavLogo,
  SocialMediaIcon,
  SocialMediaIcons,
} from "./FooterStyle";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <NavLogo>
          <LocalFireDepartmentIcon fontSize="large" />
          <Logo>Paulo Araújo</Logo>
        </NavLogo>
        <Nav>
          <NavLink href="#home">Inicio</NavLink>
          {/* <NavLink href="#about">Sobre</NavLink> */}
          <NavLink href="#skills">Habilidades</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#contact">Contato</NavLink>
          {/* <NavLink href="#education">Educação</NavLink> */}
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon
            href={bio.github}
            target="display"
            title="Ver meu GitHub"
          >
            <GitHubIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={bio.linkedin}
            target="display"
            title="Ver meu Linkedin"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={bio.email}
            target="display"
            title="Mandar um E-mail"
          >
            <EmailIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href={bio.whatsapp}
            target="display"
            title="Mandar um Whatsapp"
          >
            <WhatsAppIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; {year} Paulo Araújo. Todos os direitos reservados.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
