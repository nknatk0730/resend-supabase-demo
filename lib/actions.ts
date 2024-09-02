'use server'

import { EmailTemplate } from "@/components/email-template";
import { FormData, formSchema } from "./schema"
import { Resend } from 'resend';

export const sendEmail = async (data: FormData) => {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return {error: result.error}
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: [data.email],
    subject: 'Hello world',
    react: EmailTemplate(data),
    text: 'welcome ' + data.name
  });

  if (error) {
    return {error}
  };
}

