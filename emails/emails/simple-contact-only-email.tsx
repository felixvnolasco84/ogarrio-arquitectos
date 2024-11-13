import * as z from "zod";

import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
// import { FormSchema } from "@/app/components/Contact/ContactFormOnlyEmail";

export const SimpleContactOnlyEmail = ({
  email,
  // }: z.infer<typeof FormSchema>) => (
}: any) => (
  <Html>
    <Head />
    <Preview>
      We have received your contact request, here are the details
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={"https://www.ogarrioarquitectos.com/images/Logo_Black_Text.png"}
          width="210"
          alt="Ogarrio Logo"
        />

        <Text style={title}>
          <strong>Contact confirmation</strong>
        </Text>

        <Section style={section}>
          <Text style={text}>Hello!</Text>
          <Text style={text}>
            We have received your contact request, here are the details:
          </Text>

          <Text style={text}>Email: {email}</Text>

          <Button href="https://www.ogarrioarquitectos.com/" style={button}>
            View Website
          </Button>
        </Section>
        {/* <Text style={links}>
          <Link href={"https://www.amphitryon.mx/#contacto"} style={link}>
            Contacto
          </Link>{" "}
          ・{" "}
          <Link
            href={"https://www.amphitryon.mx/aviso-de-privacidad"}
            style={link}
          >
            Aviso de Privacidad
          </Link>
        </Text> */}

        <Text style={footer}>OGARRIO ARQUITECTOS</Text>
      </Container>
    </Body>
  </Html>
);

export default SimpleContactOnlyEmail;

const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#1E1E1E",
  color: "white",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 14px",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};
