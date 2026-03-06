import nodemailer from "nodemailer";

export enum TemplateId {
  ForgotPassword = "forgot-password",
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmail = async (
  receiverEmail: string,
  templateId: TemplateId,
  dynamicTemplateData: any,
  attachments?: any,
): Promise<void> => {
  const senderEmail = process.env.SMTP_EMAIL;

  let subject: string;
  let html: string;

  switch (templateId) {
    case TemplateId.ForgotPassword:
      subject = "Reset Your Password";
      html = `
        <h3>Hello ${dynamicTemplateData.username},</h3>
        <p>Click the link below to reset your password:</p>
        <a href="${dynamicTemplateData.resetLink}">${dynamicTemplateData.resetLink}</a>
        <p>If you didn’t request this, ignore this message.</p>
      `;
      break;
    default:
      throw new Error("Unknown template ID");
  }

  const mailOptions = {
    from: senderEmail,
    to: receiverEmail,
    subject,
    html,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${receiverEmail}`);
  } catch (err) {
    console.error("Titan SMTP error:", err);
    throw new Error("Failed to send email via Titan SMTP");
  }
};

export const sendResetPasswordEmail = async (email: string, resetLink: string) => {
    await sendEmail(email, TemplateId.ForgotPassword, {
        username: email,
        resetLink: resetLink,
    });
};