const Router = require('express')
const CurriculoController = require('./controllers/CurriculoController')

const routes = Router()

routes.get('/', (req, res, next) => res.send('Hello, desafio Nodejs'))

routes.get('/github', CurriculoController.github)
routes.get('/facebook', CurriculoController.facebook)

module.exports = routes