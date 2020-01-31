const helper = require('./../helpers/FileHelper')

class ReadLocalFileService {
    async getUserInfo() {
        return helper.get()
    }
}

module.exports = new ReadLocalFileService()