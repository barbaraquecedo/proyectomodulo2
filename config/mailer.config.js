const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MAIL_ACCOUNT,
    pass: process.env.MAIL_PASS,
  },
});

module.exports.sendVerificationEmail = (user) => {
  transporter
    .sendMail({
      from: `My promenade   🍽️   🍸   🥐<${process.env.MAIL_ACCOUNT}>`,
      to: user.email,
      subject: "Por favor verifica tu cuenta de ususario",
      html: `
        <h1><span style="color: blue">My</span> <span class="span-promenade">Promenade</span></h1>
        <h1>Hola ${user.name}!</h2>
        <p>Te damos la bienvenida a My promenade, un espacio donde podrás encontrar planes que se ajusten a tu necesidades de ocio y tiempo libre. Una web adaptada a personas con otras necesidades y gustos.</p>
        <a href="http://${process.env.APP_URL}/users/${user.id}/verify">
           Verifica aquí tu email
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


// module.exports.sendVerificationPay = (plan) => {
//   transporter
//     .sendMail({
//       from: `My promenade   🍽️   🍸   🥐<${process.env.MAIL_ACCOUNT}>`,
//       to: user.email,
//       subject: "Por favor verifica tu copmra",
//       html: `
//         <h1><span style="color: blue">My</span> <span class="span-promenade">Promenade</span></h1>
//         <h1>Hola ${user.name}!</h2>
        
//       `,
//     })
//     .then(() => {
//       console.log("email sent!");
//     })
//     .catch(() => {
//       console.error("error sending email");
//     });
// };


