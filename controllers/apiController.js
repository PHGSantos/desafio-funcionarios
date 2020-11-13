exports.test = function(req,res){
    res.send("Olá, testando");
};

//Criando controllers para os CRUD
exports.details = function (req, res) { //listar
    res.send({type: 'GET'});
  };

exports.add = function (req, res) { //adicionar
    res.send({type: 'POST'});
  };

  exports.update = function (req, res) { //atualiar
    res.send({type: 'PUT'});
  };

exports.delete = function (req, res) { //deletar
    res.send({type: 'DELETE'});
};