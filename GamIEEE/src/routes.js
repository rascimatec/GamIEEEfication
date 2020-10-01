const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const f = require('./config')

const connection = mysql.createPool({
  host     : f.conexao.host,
  user     : f.conexao.user,
  password : f.conexao.password,
  database : f.conexao.database
});

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });

app.get('/users', function (req, res) {
    connection.getConnection(function (err, connection) {
    
    connection.query('SELECT * FROM users', function (error, results, fields) {
      
      res.send(results)
    });
  });
});

app.post('/cadastro', function(req, res){
    var corpo = {email: req.body.email, 
        senha: req.body.senha, 
        nome: req.body.nome, 
        xp: req.body.xp, 
        membresia: req.body.membresia}

    connection.query("INSERT INTO `users` SET ?", corpo, function(err, result){
        if(err) throw err;
            console.log("Usuário inserido");
        });
    res.send()
});

app.listen(3000 , () => {console.log('Servidor online')})
