const Router = require('express')
const CurriculoController = require('./controllers/CurriculoController')

const routes = Router()

routes.get('/', (req, res, next) => res.send('Hello, desafio Nodejs'))

routes.get('/curriculo', CurriculoController.curriculo)

module.exports = routes

/*

, function (req, res, next) {
    if (req.route.path != '/github2/') return res.status(404).send('teste')
}

*/