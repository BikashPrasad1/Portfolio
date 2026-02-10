import express from "express";
import nodemailer from "nodemailer";

const app = express();
const port = process.env.PORT || 5174;

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, projectType, budget, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.MAIL_TO || process.env.SMTP_USER;
    const from = process.env.MAIL_FROM || process.env.SMTP_USER;

    await transporter.sendMail({
      from,
      to,
      subject: `Portfolio contact from ${name}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        projectType ? `Project Type: ${projectType}` : null,
        budget ? `Budget: ${budget}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return res.json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, error: "Failed to send message." });
  }
});

app.listen(port, () => {
  console.log(`Contact server listening on http://localhost:${port}`);
});
