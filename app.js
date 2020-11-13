//associando as dependencias
const express = require('express');

//inicializando
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log("Servidor executando na porta:" +port);
});

//end-point inválido
app.get('/',function(req,res){
    res.send('end-point inválido')
})

// todo o url começado por ‘/api’ chama as rotas em ‘./routes/api’
const routes = require('./routes/api');
app.use('/api', routes);