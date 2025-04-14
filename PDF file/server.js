import nodemailer from "nodemailer";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SENDEMAIL,
    pass: process.env.SENDPASSWORD,
  },
});

transporter
  .sendMail({
    from: process.env.SENDEMAIL,
    to: process.env.RECEIVEEMAIL,
    subject: "My test with PDF",
    html: "<h1>Hi, please find the attached PDF</h1>",
    attachments: [
      {
        filename: "report.pdf", // The name it will have in the email
        path: "./assets/report.pdf", // Path to your PDF file
        contentType: "application/pdf",
      },
    ],
  })
  .then(() => {
    console.log("Email with PDF sent");
  })
  .catch((err) => {
    console.error("Error sending email:", err);
  });
