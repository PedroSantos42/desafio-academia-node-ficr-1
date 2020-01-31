const githubService = require('./../services/githubService')
const facebookService = require('./../services/facebookService')
const readLocalFileService = require('./../services/readLocalFileService')

class CurriculoController {
    async curriculo(req, res, next) {
        try {
            Promise.all([
                githubService.gitHubUserInfo(),
                githubService.gitHubUserRepos(),
                facebookService.facebookUserInfo(),
                readLocalFileService.getUserFile()
            ]).then(results => {
                const githubUserInfo = results[0]

                const repos = results[1].map(repo => {
                    let r = {
                        size: repo.size,
                        name: repo.name,
                        url: repo.url
                    }
                    return r
                }).sort((a, b) => {
                    if (a.size < b.size)
                        return 1
                    if (a.size > b.size)
                        return -1
                    return 0;
                }).slice(0, 3)

                const facebookUserInfo = results[2]

                const arquivoLocalInfo = JSON.parse(results[3])

                const curriculo = {
                    nome: facebookUserInfo.first_name,
                    data_nascimento: facebookUserInfo.birthday,
                    endereco: facebookUserInfo.location ? facebookUserInfo.location : '',
                    email: facebookUserInfo.email,
                    genero: facebookUserInfo.gender,
                    bio: githubUserInfo.bio,
                    foto: facebookUserInfo.picture,
                    formacao: arquivoLocalInfo.formacao,
                    experiencia_profissional: arquivoLocalInfo.experiencia_profissional,
                    github: {
                        perfil: githubUserInfo.html_url,
                        alguns_repositorios: repos
                    }
                }
                res.send(curriculo)
            }).catch(err => {
                console.log(err)
                res.send(err)
            })
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}

module.exports = new CurriculoController()
