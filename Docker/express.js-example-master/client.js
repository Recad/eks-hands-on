const rp = require('request-promise');

class Client {
    constructor(url) {
        this.textToUseInFecthAction = process.argv.pop();
        this.options = {
            method: 'POST',
            uri: url,
            body: {
                text: this.textToUseInFecthAction
            },
            json: true
        };
        this.fetchApi = function () {
            rp(this.options)
                .then(function (parsedBody) {
                    console.log(parsedBody)
                })
                .catch(function (err) {
                    console.log(err);
                });
        }
    }
}
const client = new Client('http://localhost:3000/api');
client.fetchApi();