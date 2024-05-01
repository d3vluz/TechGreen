const express = require('express');
const http = require('http');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const server = http.Server(app);
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Configurando o Express para servir arquivos estáticos do diretório 'assets'
app.use(express.static(path.join(__dirname, 'assets')));

// Rota para a página de contato
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'assets/paginas/contactpage.html'));
});

app.get('/:paginas', function(req, res) {
    const page = req.params.paginas;
    res.sendFile(path.join(__dirname, 'assets', 'paginas', `${page}`));
});


app.post('/send_email', function(req, res) {
    let nameUser = req.body.name;
    let emailUser = req.body.email;
    let contactUser = req.body.contact;
    let messageUser = req.body.message;
    let emailUs = 'techgreenunifor@gmail.com'

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'techgreenunifor@gmail.com',
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
                <p><strong class="label">Nome:</strong> <span>${nameUser}</span></p>
                <p><strong class="label">Email:</strong> <span>${emailUser}</span></p>
                <p><strong class="label">Contato:</strong> <span>${contactUser}</span></p>
                <p><strong class="label">Mensagem:</strong> <span>${messageUser}</span></p>
            </div>
        </div>
    </body>
    </html>
`;


    let mailOptions = {
        from: emailUser,
        to: emailUs,
        subject: 'Nova mensagem do formulário de contato',
        html: mailHTML, 
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log("Email send: " + info.response);
            res.redirect('/');
        }
    });
});

server.listen(port, function() {
    console.log('Server is running on port ' + port);
});
