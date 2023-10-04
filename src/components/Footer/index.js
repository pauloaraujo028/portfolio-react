import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { bio } from "../../data/constants";
import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcon,
  SocialMediaIcons,
} from "./FooterStyle";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Paulo Araújo</Logo>
        <Nav>
          <NavLink href="#home">Inicio</NavLink>
          <NavLink href="#about">Sobre</NavLink>
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
