const application = require('./config/server')

const rotaHome = require('./app/routes/home')(application)

// Porta
application.listen(3000, function(){
    console.log('Servidor rodando...')
})