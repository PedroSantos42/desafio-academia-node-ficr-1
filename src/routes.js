const Router = require('express')
const CurriculoController = require('./controllers/CurriculoController')
const NotFound = require('../middlewares/NotFound')

const routes = Router()

routes.use(NotFound)

routes.get('/curriculo', CurriculoController.curriculo)

module.exports = routes
