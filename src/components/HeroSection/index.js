import React from "react";
import HeroBgAnimation from "../HeroBgAnimation";
import {
  HeroContainer,
  HeroBg,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  SocialMediaIcons,
  SocialMediaIcon,
  ResumeButton,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { bio } from "../../data/constants";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroBgAnimation />
      </HeroBg>
      <HeroInnerContainer>
        <HeroLeftContainer id="Left">
          <Title>
            Olá, Me chamo <br /> {bio.name}
          </Title>
          <TextLoop>
            <Span>
              <Typewriter
                options={{
                  strings: bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
          </TextLoop>
          <SubTitle>{bio.description}</SubTitle>
          <ResumeButton href={bio.resume} target="display">
            Ver Currículo
          </ResumeButton>
        </HeroLeftContainer>

        <HeroRightContainer id="Right">
          <Img
            src="https://github.com/pauloaraujo028.png"
            alt="Foto de Perfil do Paulo Araújo"
          />
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
        </HeroRightContainer>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default HeroSection;
