const fs = require('fs')

class FileHelper {
    constructor() { }
    get() {
        return fs.readFileSync('curriculo.json', 'utf8')
    }
}

module.exports = new FileHelper()