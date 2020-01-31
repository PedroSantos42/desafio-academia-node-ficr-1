const Router = require('express')
const CurriculoController = require('./controllers/CurriculoController')

const routes = Router()

routes.get('/curriculo', CurriculoController.curriculo)

module.exports = routes
