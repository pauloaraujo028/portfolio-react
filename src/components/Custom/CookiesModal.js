import React from "react";
import { Modal, Fade } from "@mui/material";
import Cookies from "js-cookie";
import styled from "styled-components";
import CookieIcon from "@mui/icons-material/Cookie";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000000a7;
  display: flex;
  align-items: end;
  justify-content: end;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

export const Wrapper = styled.div`
  max-width: 500px;
  width: 100%;
  border-radius: 16px;
  margin: 10px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;

  @media screen and (max-width: 640px) {
    font-size: 14px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  margin: 12px 0px;
  gap: 12px;
`;

export const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const CookiesModal = ({ open, handleClose }) => {
  const handleAccept = () => {
    handleClose();
    Cookies.set("modalAccepted", "true", { expires: 365 });
  };

  return (
    <Modal
      open={open && !Cookies.get("modalAccepted")}
      onClose={handleClose}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
    >
      <Fade in={open}>
        <Container>
          <Wrapper>
            <div style={{ width: 400 }}>
              <Title>
                <CookieIcon color="warning" />
                <h2 id="transition-modal-title">Esse site usa cookies</h2>
              </Title>
              <p id="transition-modal-description">
                Este site utiliza cookies para personalizar o conteúdo e
                analisar o tráfego para lhe oferecer uma melhor experiência.
              </p>
              <ButtonGroup>
                <Button onClick={handleClose} dull>
                  Recusar
                </Button>
                <Button onClick={handleAccept}>Aceitar</Button>
              </ButtonGroup>
            </div>
          </Wrapper>
        </Container>
      </Fade>
    </Modal>
  );
};

export default CookiesModal;
