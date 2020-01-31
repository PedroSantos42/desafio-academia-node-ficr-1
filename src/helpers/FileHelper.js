const fs = require('fs')

class FileHelper {
    constructor() { }
    async get() {
        return fs.readFileSync('curriculo.json')
    }
}

module.exports = new FileHelper()