const { Router } = require('express')
const axios = require('axios')

const routes = Router()

routes.get('/', (req, res, next) => res.send('Hello, desafio Nodejs'))

routes.get('/github/user', async (req, res, next) => {
    // request a api publica do github utilizando axios
    try {
        const { data } = await axios.get('https://api.github.com/users/PedroSantos42');
        return res.send(data);
    } catch (error) {
        console.log('error', error)
        return res.send(error);
    }
})

routes.get('/github/repos', async (req, res, next) => {
    // request a api publica do github utilizando axios
    try {
        const { data } = await axios.get('https://api.github.com/users/PedroSantos42/repos');
        return res.send(data);
    } catch (error) {
        console.log('error', error)
        return res.send(error);
    }
})

module.exports = routes