const express = require("express");
const app = express();

const PORT = 3000

// app.get('/', function (req, res){
//     res.redirect(307, "https://www.google.com");
// });

app.get('/r/:redirect', function (req, res){
    let url = req.params.redirect;
    console.log(url);
    console.log(req.ip + "\n")
    res.redirect(308, url);
    res.end("");
});

app.get('/convert/', function(req, res){
    res.sendFile(`${__dirname}/convert.html`);
});

app.listen(PORT)