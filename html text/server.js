import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "billwachi2550@gmail.com",
    pass: "efnp cxcv zvds zpqs",
  },
});

transporter
  .sendMail({
    to: "xzeed2550@gmail.com",
    subject: "My test",
    html: "<h1>Hi how are you</h1>",
  })
  .then(() => {
    console.log("Email sent");
  })
  .catch((err) => {
    console.error(err);
  });
