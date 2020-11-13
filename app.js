//associando as dependencias
const express = require('express');

//inicializando
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log("Servidor executando na porta:" +port);
});