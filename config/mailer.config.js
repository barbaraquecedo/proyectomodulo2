require("dotenv").config();
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.MAIL_ACCOUNT,
        pass: process.env.MAIL_PASS
    }
});

module.exports.sendVerificationEmail = (user) => {
  transporter
    .sendMail({
      from: `Proyecto 2 👻 <${process.env.MAIL_ACCOUNT}>`,
      to: user.email,
      subject: "Por favor realice el pago de su plan",
      html: `
        <h1>Hello ${user.name}!</h2>
        <p>Welcome to Express Contacts. Please verify your account</p>
        <a href="http://${process.env.APP_URL}/users/${user.id}/pay">
            Verify email
        </a>
      `,
    })
    .then(() => {
      console.log("email sent!");
    })
    .catch(() => {
      console.error("error sending email");
    });
};
