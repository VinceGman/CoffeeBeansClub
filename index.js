var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Beans');
});

app.listen(process.env.PORT || 80);