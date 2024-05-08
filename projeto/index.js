var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

const app = express();

app.use(bodyParser.json());
app.use(express.static('assets'));
app.use('/assets/estilos', express.static(__dirname + '/assets/estilos'));
app.use('/assets/imagens', express.static(__dirname + '/assets/imagens'));
app.use('/assets/paginas', express.static(__dirname + '/assets/paginas'));
app.use('/assets/scripts', express.static(__dirname + '/assets/scripts'));

app.use(bodyParser.urlencoded({
    extended: true
}));

_promise = mongoose.connect("mongodb://localhost:27017/myDB");
var db = mongoose.connection;

db.on("error", () => console.log("Erro em conectar ao banco de dados"))
db.once("open", () => {
    db.collection('users').find({}).toArray()
        .then((result) => {
            console.log("Documentos encontrados na coleção 'users':", result);
        })
        .catch((error) => {
            console.error("Erro ao buscar documentos:", error);
        });
});

app.post("/signup", async (req, res) => {
    var name = req.body.nome;
    var last_name = req.body.sobrenome;
    var email = req.body.email;
    var password = req.body.senha;

    const hashedPassword = await bcrypt.hash(password, 10);

    var dataobj = {
        "name": name + ' ' + last_name,
        "email": email,
        "password": hashedPassword
    };

    db.collection('users').insertOne(dataobj, (err) => {
        if (err) {
            throw err;
        }
        console.log("Registro inserido com sucesso");
    });

    return res.redirect('index.html');
});

app.post("/signin", async (req, res) => {
    var email = req.body.email;
    var password = req.body.senha;

    dataobj = {
        "email": email
    };

    db.collection('users').findOne(dataobj, async (err, user) => {
        if (err) {
            throw err;
        }
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                console.log("Usuário autenticado");
                return res.redirect('index.html');
            } else {
                console.log("Senha incorreta");
            }
        } else {
            console.log("Usuário não encontrado");
        }
    });
});

app.get("/loginpage.html", (req, res) => {
    res.sendFile(__dirname + '/assets/paginas/loginpage.html');
    console.log("loginpage");
});

app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + '/index.html');
    console.log("index");
});

app.get("/", (req, res) => {
    res.set({
        "ALLow-access-ALLow-Origin": "*"
    });
    return res.redirect("loginpage.html");
}).listen(3000);

console.log("Ouvindo porta 3000...");
