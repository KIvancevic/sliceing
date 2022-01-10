
    //API for contact form 

import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const fs = require("fs");

pathToAttachment = `${__dirname}/attachment.pdf`;
attachment = fs.readFileSync(pathToAttachment).toString("base64");

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "kristianivancevic@gmail.com", // Your email where you'll receive emails
      from: "kristianivancevic@gmail.com", // your website email address here
      title: `${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.fullname}</h3>
              <h3>Their email is: ✉️${req.body.email}</h3>
              <h3>Their first name is: ✉️${req.body.firstName}</h3>
              <h3>Their last name is: ✉️${req.body.lastName}</h3>
              <h2>Their linkedIn profile is: ✉️${req.body.linkedIn}</h2>
              <h2>Their portfolio link: ✉️${req.body.portfolioLink}</h2>
              <h2>Their phone number is: ✉️${req.body.phoneNumber}</h2>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <p>About you:</p>
              <p>${req.body.aboutYou}</p>
              <br>
              </div>
              
              </div>
      </body>
      </html>`,
      attachments: [
        {
          content: attachment,
          filename: "attachment.pdf",
          type: "application/pdf",
          disposition: "attachment"
        }
      ]
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;