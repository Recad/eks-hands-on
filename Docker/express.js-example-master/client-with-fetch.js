const fetch = require('node-fetch');

class Client {
    constructor() {
        this.textToUseInFecthAction = process.argv.pop();
        this.fetchApi = function () {
            fetch('http://localhost:3000/api', { 
                method: 'post',
                body:    JSON.stringify({text: this.textToUseInFecthAction}),
                headers: { 'Content-Type': 'application/json' },
            }).then((res) => {
                return res.text();
            }).then((text) => 
                console.log(text)
            ).catch((e) => console.log(e))
        }
    }

    
}
const client = new Client();
client.fetchApi();