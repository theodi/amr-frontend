const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback')
const serveStatic = require('serve-static');
const app = express();

app.use(serveStatic(__dirname));
app.use(history())
app.use(serveStatic(__dirname));

app.get("/", function (req, res) {
 res.render(path.join(__dirname + "/index.html"))
})

var port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);
