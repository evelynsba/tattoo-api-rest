const users = require('./userRoute')
const agenda = require('./agendamentoRoute')
const express = require('express')
module.exports = app => {

    app.use((req, res, next) => {
        console.log(req.headers.host, new Date().toLocaleTimeString());
        next();
      });
    app.use(express.json())
    app.use(users)
    app.use(agenda)

}