const express = require("express");
const router = express.Router();


router.post("/usuario", UsuarioController.logar);
app.get('/materias-a-cursar', materiasController.getMateriasACursar);
app.get('/materias-cursadas', materiasController.getMateriasCursadas);
app.post('/marcar-como-cursada', materiasController.marcarComoCursada);
app.post('/cadastrar-materia', materiasController.cadastrarMateria);