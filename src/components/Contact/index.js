import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import React, { useRef } from "react";
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactTitle,
  Container,
  Desc,
  Title,
  Wrapper,
} from "./ContactStyle";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_z8xcivb",
        "template_1y3koe2",
        form.current,
        "i3WjX0bVuydSITorE"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contato</Title>
        <Desc>
          Sinta-se à vontade para entrar em contato comigo em caso de dúvidas ou
          oportunidades!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Enviar E-mail 🚀</ContactTitle>
          <ContactInput
            placeholder="Seu E-mail"
            name="from_email"
            type="email"
            required
          />
          <ContactInput
            placeholder="Seu Nome"
            name="from_name"
            type="text"
            required
          />
          <ContactInput
            placeholder="Assunto"
            name="subject"
            type="text"
            required
          />
          <ContactInputMessage
            placeholder="Menssagem"
            rows="4"
            name="message"
            required
          />
          <ContactButton type="submit" value="Enviar" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="E-mail enviado com sucesso!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
