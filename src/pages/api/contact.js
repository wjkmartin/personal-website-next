// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  let nodemailer = require('nodemailer');
  console.log(process.env.BOT_USER);

  const transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtp.sendgrid.net',
    port: 465,
    secure: true,
    auth: {
      user: process.env.BOT_USER,
      pass: process.env.BOT_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: 'mail@willmartin.ca', // sender address
    to: 'wjkmartin@gmail.com', // list of receivers
    subject: `This is a message from ${req.body.name} via yer boi MailBot`, // Subject line
    text: `${req.body.message}`, // plain text body
    html: `<p>FROM: ${req.body.name}</p><p>EMAIL: ${req.body.email}</P <p>${req.body.message}</p>`, // html body
  };

  await transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);
}
