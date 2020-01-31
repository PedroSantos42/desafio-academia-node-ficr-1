const helper = require('./../helpers/FileHelper')

class ReadLocalFileService {
    async getUserFile() {
        return helper.get()
    }
}

module.exports = new ReadLocalFileService()