const axios = require('axios')

class GithubService {
    async gitHubUserInfo() {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USER}`);
            return data
        } catch (error) {
            console.log('error', error)
            return error
        }
    }

    async gitHubUserRepos() {
        try {
            const { data } = await axios.get(`https://api.github.com/users/${process.env.GITHUB_USER}/repos`)
            return data
        } catch (error) {
            console.log('error', error)
            return error
        }
    }
}

module.exports = new GithubService()
