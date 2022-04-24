const nodemailer = require('nodemailer');
const { google } = require('googleapis');


async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        
        user: 'rkgcodes@gmail.com',
        password:'rkg(2022)'
      },
    });

    const mailOptions = {
      from: 'rkgcodes@gmail.com',
      to: 'email@email.com',
      subject: 'Elite Academy Invoice',
      text: 'This mail is a generated invoice',
      html: '<h1>gmail email using API</h1>',
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log('Email sent...', result))
  .catch((error) => console.log(error.message));
