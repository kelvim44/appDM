const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: localhost,
  user: root,
  password: '',
  database: appsql,
});

connection.connect();

// Rota para obter matérias a cursar
app.get('/api/materias-a-cursar', (req, res) => {
  connection.query('SELECT * FROM materias WHERE cursada = false', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

// Rota para obter matérias cursadas
app.get('/api/materias-cursadas', (req, res) => {
    connection.query('SELECT * FROM materias WHERE cursada = true', (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });

// Rota para marcar uma matéria como cursada
app.post('/marcar-como-cursada', (req, res) => {
  const { id } = req.body;
  connection.query('UPDATE materias SET cursada = true WHERE id = ?', [id], (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Rota para cadastrar uma nova matéria
app.post('/cadastrar-materia', (req, res) => {
    const { nome } = req.body;
    connection.query('INSERT INTO materias (nome, cursada) VALUES (?, false)', [nome], (error, results) => {
      if (error) throw error;
      
      // Obtenha a matéria recém-cadastrada para retornar ao cliente
      connection.query('SELECT * FROM materias WHERE id = ?', [results.insertId], (error, result) => {
        if (error) throw error;
        res.json(result[0]);
      });
    });
  });
  
  // Rota para cadastrar um novo usuário
  app.post('/cadastrar-usuario', (req, res) => {
    const { nome, cpf, email, senha } = req.body;
    connection.query('INSERT INTO usuarios (nome, cpf, email, senha) VALUES (?, ?, ?, ?)', [nome, cpf, email, senha], (error, results) => {
      if (error) throw error;
      res.json(results);
    });
  });