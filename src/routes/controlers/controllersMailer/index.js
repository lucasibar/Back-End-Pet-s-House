const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
  "458498120049-e4d5o875lhk4nb9ucr5ajduj4ds249fb.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//045RGzbkeRc3cCgYIARAAGAQSNwF-L9IrYRZmPJS5tcMv5fBc69SDoMBDzmUGtY3lqtHy5A3VWAj6yBv2F7hmloS0wtk-S4Q1JfA";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

async function sendMail(destinatario, subject, html) {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "petshousepf@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "Pets House <petshousepf@gmail.com>",
      to: destinatario,
      subject: subject,
      html: html,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendMail;
