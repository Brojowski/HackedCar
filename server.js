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
})

app.post('/commands', function (req, res)
{
    var cmd = req.body.cmd;
    res.sendStatus(200);
    cmd = cmd.toUpperCase();
    console.log(cmd);
    switch (cmd)
    {
        case "W":
            //function
            route_io_pins.forward();
            break;
        case "A":
            route_io_pins.turnLeft();
            break;
        case "S":
            route_io_pins.backwards();
            break;
        case "D":
            route_io_pins.turnRight();
            break;

    }
});

app.listen(8080);