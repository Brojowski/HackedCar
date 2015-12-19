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

app.get('/javascripts/app.js', function (req, res)
{
    res.sendFile(__dirname + "/public/javascripts/app.js");
});

app.post('/commands:power', function (req, res)
{
    res.sendStatus(200);
    var cmd = req.body.cmd;
    cmd = cmd.toUpperCase();
    var pwr = parseInt(req.params.power.charAt(1));
    switch (cmd)
    {
        case "W":
            //function
            route_io_pins.forward(pwr);
            break;
        case "A":
            route_io_pins.turnLeft(pwr);
            break;
        case "S":
            route_io_pins.backwards(pwr);
            break;
        case "D":
            route_io_pins.turnRight(pwr);
            break;
        case "I":

            break;
        case "K":
            break;
        case "J":
            break;
        case "L":
            break;
    }
});

app.listen(8080);