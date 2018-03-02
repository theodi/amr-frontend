const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static');
const app = express();
const server = require('auth-static')

server({
    options: {
        cache: 3600,
        gzip: true
    },
    password: process.env.PASSWORD,
    port: 1234,
    realm: 'Private',
    root: './dist',
    username: process.env.USERNAME
})

app.use(serveStatic(__dirname));
app.use(history())
app.use(serveStatic(__dirname));

app.get("/", function (req, res) {
 res.render(path.join(__dirname + "/index.html"))
})

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);
