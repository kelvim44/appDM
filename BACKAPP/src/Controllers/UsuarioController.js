const UsuarioModel = require ("../utils/UsuarioModel");

module.exports = {
    logar: async (req, res)=>{
        let json = {error: '', result:{}};

        let login = req.body.email;
        let senha = req.body.senha;

        if(login && senha){
            let user = await UsuarioModel.findUser(login, senha);
                if(user){
                    json.result = user;
                }
        }else{
            json.error = "Campos em branco!";
        }
        res.json(json);

    },
}