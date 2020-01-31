const axios = require('axios')

class FacebookService {
    async getUserInfo() {
        const FACEBOOK_URL = `https://graph.facebook.com/v5.0/me?fields=picture%2Cfirst_name%2Clast_name%2Caddress%2Cgender%2Cbirthday%2Cemail%2Clocation&access_token=${process.env.FACEBOOK_TOKEN}`

        let first_name, birthday, last_name, gender, email, location, picture

        let facebookProfile

        try {
            const { data } = await axios.get(FACEBOOK_URL)

            first_name = data.first_name
            birthday = data.birthday
            last_name = data.last_name
            gender = data.gender
            email = data.email
            location = data.location
            picture = data.picture.data.url

            facebookProfile = {
                first_name,
                birthday,
                last_name,
                gender,
                email,
                location,
                picture
            }
        } catch (error) {
            console.log('error', error)
            return error
        }

        return facebookProfile
    }
}

module.exports = new FacebookService()