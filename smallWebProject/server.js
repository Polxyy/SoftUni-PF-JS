let http = require('http');
let fs = require('fs');

let page = fs.readFileSync('./index.html');

http.createServer((req,res) => {
    res.writeHead(200);
    res.write(page);
    res.end;
}).listen(3000);