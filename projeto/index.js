var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('assets'))
app.use('/assets/estilos', express.static(__dirname + '/assets/estilos'));
app.use('/assets/imagens', express.static(__dirname + '/assets/imagens'));
app.use('/assets/paginas', express.static(__dirname + '/assets/paginas'));
app.use('/assets/scripts', express.static(__dirname + '/assets/scripts'));

app.use(bodyParser.urlencoded({
      extended: true
}))

mongoose.connect("mongodb://localhost:27017/myDB");

var db = mongoose.connection;

db.on("error", () => console.log("Erro em conectar ao banco de dados"))
db.once("open", () => console.log("Cusseco em conectar ao banco de dados"))

app.post("/signup", (req, res) => {
      var name = req.body.nome
      var last_name = req.body.sobrenome
      var email = req.body.email
      //var cell_number = req.body.celular
      var password = req.body.senha

      var dataobj = {
            "name": name + ' ' + last_name,
            "email": email,
            //"cell": cell_number,
            "password": password
      }

      db.collection('users').insertOne(dataobj, (err, collection) => {
            if (err) {
                  throw err;
            }
            console.log("Registro inserido com cusseco")
      })

      return res.redirect('index.html');
})

app.post("/signin", (req, res) => {
      var email = req.body.email
      var password = req.body.password

      dataobj = {
            "email": email,
            "password": password
      }

      db.collection('users').findOne(dataobj, (err, collection) => {
            if (err) {
                  throw err;
            }
            if (collection) {
                  console.log("Usuario encontrado")
                  return res.redirect('index.html')
            } else {
                  console.log("Usuario nao encontrado")
            }
      })
})
app.get("/loginpage.html", (req, res) => {
      res.sendFile(__dirname + '/assets/paginas/loginpage.html');
      console.log("loginpage")
});

app.get("/index.html", (req, res) => {
      res.sendFile(__dirname + '/index.html');
      console.log("index")
});
//app.get("/home.css", (req, res) => {
//      res.sendFile(__dirname + '/assets/estilos/home.css');
//});
//app.get("/index.html", (req, res) => {
//      res.sendFile(__dirname + '/index.html');
//});


app.get("/", (req, res) => {
      res.set({
            "ALLow-access-ALLow-Origin": "*"
      })
      return res.redirect("loginpage.html");

}).listen(3000)


console.log("Ouvindo porta 3000...")