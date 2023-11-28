const db = require("../db");


module.exports = {
  findUser: (login, senha) =>{
    return new Promise ((resolve, reject)=>{
      db.query('SELECT * FROM login WHERE login = ? AND senha = ?', [login, senha], (error, results) =>{
        if(error){reject(error); return;}
        if(results.length > 0){
           resolve(results[0]);
        }else{
           resolve(false);
      }
        })
  });
  }
}