"use server";

import { Resend } from "resend";
import ContactFormEmail from "@/emails/emails/contact-form-email";
import SimpleContactEmail from "@/emails/emails/simple-contact-email";
import SimpleContactOnlyEmail from "@/emails/emails/simple-contact-only-email";

export async function addEntry(data: any) {
  const result = data;

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

const resend = new Resend("re_ePzVq4ct_4QsSXaQaFKERseFC1p6rA6Bg");

export async function sendEmail(data: any) {
  const { name, email, phoneNumber, service, project, budget, interest } = data;
  try {
    const data = await resend.emails.send({
      from: "rodrigo@ogc.mx",
      to: [email],
      cc: ["rodrigo@ogc.mx"],
      subject: "New Contact",
      react: ContactFormEmail({
        name,
        email,
        phoneNumber,
        service,
        project,
        budget,
        interest,
      }),
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }

  // if (result.error) {
  //   return { success: false, error: result.error.format() };
  // }
}

export async function sendContactEmail(data: any) {
  const { name, email, phoneNumber } = data;
  try {
    const data = await resend.emails.send({
      from: "rodrigo@ogc.mx",
      to: [email],
      cc: ["rodrigo@ogc.mx"],
      subject: "New Contact",
      react: SimpleContactEmail({
        name,
        email,
      }),
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }

  // if (result.error) {
  //   return { success: false, error: result.error.format() };
  // }
}

export async function sendContactOnlyEmail(data: any) {
  const { email } = data;
  try {
    const data = await resend.emails.send({
      from: "rodrigo@ogc.mx",
      to: [email],
      cc: ["rodrigo@ogc.mx"],
      subject: "New Contact",
      react: SimpleContactOnlyEmail({
        email,
      }),
    });
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }

  // if (result.error) {
  //   return { success: false, error: result.error.format() };
  // }
}
