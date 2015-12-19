/**
 * Created by Alex on 12/3/2015.
 */
var express = require("express");
var app = express();
var body_parser = require("body-parser");
var override = require("method-override");

//
var server = require('http').Server(app);
var io = require("socket.io")(server);

//setup body parsing
app.use(body_parser.urlencoded({extended: false}));
//parse json
app.use(body_parser.json());

//override normal requests
app.use(override('X_HTTP_Method-Override'));

//routes
var route_io_pins = require("./routes/gpio.js")();

app.get('/', function (req, res)
{
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/commands',function(req, res){
   var cmd = req.body;
    switch (cmd)
    {
        case "w":
            //function
            break;

    }
});

app.use(express.static('public'));

app.listen(8080);