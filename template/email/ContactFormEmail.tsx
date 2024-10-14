// import { FormSchema } from "@/components/forms/ContactForm";
import * as z from "zod";

const ContactFormEmail = ({
  name,
  email,
  phoneNumber,
  dateEvent,
  venue,
  eventDescription,
}: any) => (
  <div>
    <h1 style={{ fontSize: "24px", color: "#333" }}>
      Nuevo Contacto | Amphytrion
    </h1>
    <p style={{ fontSize: "18px", color: "#666" }}>
      <strong>Nombre:</strong> {name}
      <br />
      <strong>Correo:</strong> {email}
      <br />
      <strong>Telefono:</strong> {phoneNumber}
      <br />
      <strong>Fecha del evento:</strong> {dateEvent}
      <br />
      <strong>Lugar:</strong> {venue}
      <br />
      <strong>Descripcion del evento:</strong> {eventDescription}
    </p>
  </div>
);

export default ContactFormEmail;
