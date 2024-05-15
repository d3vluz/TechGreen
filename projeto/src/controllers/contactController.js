const path = require('path');
const nodemailer = require('nodemailer');

const sendEmailForTechGreen = async (req, res) => {
    const { name, email, contact, message } = req.body;
    let emailUs = process.env.EMAIL_ACCOUNT 

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ACCOUNT,
            pass: 'sdfmjgvigknwbitl',
        }
    });

    let mailHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contato</title>
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333;
            border-bottom: 2px solid #333;
            padding-bottom: 10px;
            margin-bottom: 20px;
            text-align: center;
        }

        p {
            margin: 10px 0;
        }

        .label {
            font-weight: bold;
            color: #555;
        }

        .email-content {
            border-top: 2px solid #333;
            padding-top: 20px;
        }
    </style>
    </head>
    <body>
        <div class="container">
            <h1>Nova mensagem do formulário de contato</h1>
            <div class="email-content">
                <p><strong class="label">Nome:</strong> <span>${name}</span></p>
                <p><strong class="label">Email:</strong> <span>${email}</span></p>
                <p><strong class="label">Contato:</strong> <span>${contact}</span></p>
                <p><strong class="label">Mensagem:</strong> <span>${message}</span></p>
            </div>
        </div>
    </body>
    </html>
`;

    let mailOptions = {
        from: email,
        to: emailUs,
        subject: 'Nova mensagem do formulário de contato',
        html: mailHTML, 
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.redirect('/contactpage');
        } else {
            console.log("Email send: " + info.response);
            res.redirect('/contactpage');
        }
    });
  };

module.exports.sendEmailForTechGreen = sendEmailForTechGreen;
