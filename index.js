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

    let buff = Buffer.from(url, 'base64');  
    let decoded = buff.toString('utf-8').replace("\n", "");

    console.log(decoded)

    res.send(`<script>window.location="${decoded}"</script>`)
    // res.redirect(308, url);
    res.end("");
});

app.get('/convert/', function(req, res){
    res.sendFile(`${__dirname}/convert.html`);
});

app.listen(PORT)