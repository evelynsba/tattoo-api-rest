const express = require('express');
const app = express();
const routes = require('./routes')


const porta = process.env.PORT || 3000;

routes(app)
app.get("/", function(req,res){
    res.send("Ola, estou rodando no heroku")
});

app.listen(porta, () => console.log(`servidor está rodando na porta ${porta}`))

module.exports = app;