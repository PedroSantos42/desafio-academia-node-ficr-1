const githubService = require('./../services/githubService')
const facebookService = require('./../services/facebookService')
const readLocalFileService = require('./../services/readLocalFileService')

class CurriculoController {

    async curriculo(req, res, next) {
        // const responseGithub = await githubService.getUserInfo()
        // console.log('github: ', responseGithub)

        // const responseFacebook = await facebookService.getUserInfo()
        // console.log('facebook: ', responseFacebook)

        const responseText = await readLocalFileService.getUserInfo()

        console.log('teste responseText', responseText.formacao)

        

        // let formacao = responseText.map(form => {
        //     let f = {
        //         "instituicao": form.instituicao,
        //         "curso": form.curso,
        //         "inicio": form.inicio,
        //         "termino": form.termino
        //     }
        //     return f
        // })

        return res.send(responseText)
    }
}

module.exports = new CurriculoController()
