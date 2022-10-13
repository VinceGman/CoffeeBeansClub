var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('This is the official Beans Discord Website! Woo!');
});

app.listen(process.env.PORT || 80);