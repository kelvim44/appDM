const connection = require('./database');

// Cadastrar uma nova matéria
exports.cadastrarMateria = (nome) => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO materias (nome, cursada) VALUES (?, false)', [nome], (error, results) => {
      if (error) {
        reject(error);
      } else {
        // Obter a matéria recém-cadastrada para retornar ao cliente
        connection.query('SELECT * FROM materias WHERE id = ?', [results.insertId], (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result[0]);
          }
        });
      }
    });
  });
};

// Obter matérias a cursar
exports.getMateriasACursar = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM materias WHERE cursada = false', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Obter matérias cursadas
exports.getMateriasCursadas = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM materias WHERE cursada = true', (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// Marcar uma matéria como cursada
exports.marcarComoCursada = (id) => {
  return new Promise((resolve, reject) => {
    connection.query('UPDATE materias SET cursada = true WHERE id = ?', [id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
