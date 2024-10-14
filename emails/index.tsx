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
// import { FormSchema } from "@/components/forms/ContactForm";

// const baseUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "http://localhost:3000";

// export const EmailTemplateResend = ({
//   dateEvent,
//   email,
//   eventDescription,
//   name,
//   phoneNumber,
//   venue,
// }: z.infer<typeof FormSchema>) => (
//   <Html>
//     <Head />
//     <Preview>
//       Hemos recibido tu solicitusd, a continuación compartimos los detalles
//     </Preview>
//     <Body style={main}>
//       <Container style={container}>
//         <Img
//           src={"https://www.amphitryon.mx/images/logo.png"}
//           width="90"
//           height="22"
//           alt="Amphitryon Logo"
//         />

//         <Text style={title}>
//           <strong>Confirmación de Contacto</strong>
//         </Text>

//         <Section style={section}>
//           <Text style={text}>
//             ¡Hola <strong>{name}!</strong>!
//           </Text>
//           <Text style={text}>
//             Hemos recibido tu solicitud, a continuación compartimos los
//             detalles:
//           </Text>

//           <Text style={text}>Correo: {email}</Text>
//           <Text style={text}>Número de contacto: {phoneNumber}</Text>
//           <Text style={text}>Fecha del evento: {dateEvent}</Text>
//           <Text style={text}>Venue seleccionado: {venue}</Text>
//           <Text style={text}>Descripción del evento: {eventDescription}</Text>

//           <Button href="https://www.amphitryon.mx/" style={button}>
//             Visitar Sitio
//           </Button>
//         </Section>
//         <Text style={links}>
//           <Link href={"https://www.amphitryon.mx/#contacto"} style={link}>
//             Contacto
//           </Link>{" "}
//           ・{" "}
//           <Link
//             href={"https://www.amphitryon.mx/aviso-de-privacidad"}
//             style={link}
//           >
//             Aviso de Privacidad
//           </Link>
//         </Text>

//         <Text style={footer}>Amphytrion</Text>
//       </Container>
//     </Body>
//   </Html>
// );

// export default EmailTemplateResend;

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
  backgroundColor: "#FC9532",
  color: "#000",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
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
