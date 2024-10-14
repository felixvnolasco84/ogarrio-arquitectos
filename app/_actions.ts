"use server";

import * as z from "zod";
import { Resend } from "resend";
// import EmailTemplateResend from "@/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

// export async function sendContactEmail(data: z.infer<typeof FormSchema>) {
//   const {
//     name,
//     email,
//     phoneNumber,
//     dateEvent: DATESYM,
//     venue,
//     eventDescription,
//   } = data;

//   let dateEvent = new Date(DATESYM).toLocaleDateString("es-MX", {
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//   });

//   try {
//     const data = await resend.emails.send({
//       from: "Grupo Amphitryon <felipe@amphitryon.mx>",
//       to: [email],
//       cc: ["ines@amphitryon.mx", "felipe@amphitryon.mx"],
//       subject: "Nuevo Contacto | Amphitryon",
//       react: EmailTemplateResend({
//         name,
//         email,
//         phoneNumber,
//         dateEvent,
//         venue,
//         eventDescription,
//       }),
//     });
//     return { success: true, data };
//   } catch (error) {
//     console.log(error);
//     return { success: false, error };
//   }
// }
