const axios = require('axios')

class GithubService {
    async getUserInfo() {
        let name, bio, company, html_url
        let repos = []

        try {
            const { data } = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USER}`);
            company = data.company
            name = data.name
            bio = data.bio
            html_url = data.html_url
        } catch (error) {
            console.log('error', error)
            return error
        }

        try {
            const { data } = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USER}/repos`)

            console.log('tipo data', typeof (data))

            repos = data.map(repo => {
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
                return 0
            }).slice(0, 3)
        } catch (error) {
            console.log('error', error)
            return error
        }

        const githubProfile = {
            name,
            html_url,
            bio,
            company,
            repositories: repos
        }

        return githubProfile
    }
}

module.exports = new GithubService()
