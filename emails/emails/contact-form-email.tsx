const ContactFormEmail = ({
  name,
  email,
  phoneNumber,
  service,
  project,
  budget,
  interest,
}: any) => (
  <div>
    <h1>Nuevo Contacto</h1>
    <p>
      De <strong>{name}</strong> con el correo {email}
    </p>
    <p>Telefono: {phoneNumber}</p>
    <p>Servicio: {service}</p>
    <p>Proyecto: {project}</p>
    <p>Presupuesto: {budget}</p>
    <p>Intereses:</p>
    <ul>
      {interest.map((interest: any, index: number) => (
        <li key={index}>{interest}</li>
      ))}
    </ul>
  </div>
);

export default ContactFormEmail;
