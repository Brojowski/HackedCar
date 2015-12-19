/**
 * Created by Alex on 12/3/2015.
 */

/**
 TODO: This File Will Have To Be Debugged At The Event
 */

var sys = require("util");
var exec = require("child_process").exec;

const HIGH = 1;
const LOW = 0;

const W_PIN = 2;
const S_PIN = 3;
const A_PIN = 14;
const D_PIN = 15;


function puts(error, stdout, stderr)
{
    console.log(stdout);
}

function writePin(pin, val)
{
    exec("gpio -g write " + pin + " " + val);
}


//open required pins
//pins.open() --ect
module.exports = function ()
{
    return {
        //car control
        forward: function ()
        {
            digitalWrite(W_PIN,HIGH);
            digitalWrite(W_PIN,HIGH);
        },
        backwards: function ()
        {
        },
        turnLeft: function ()
        {
        },
        turnRight: function ()
        {
        },
        setSpeed: function (speed)
        {
        },

        //camera control
        camLeft: function ()
        {
        },
        camRight: function ()
        {
        },
        up: function ()
        {
        },
        down: function ()
        {
        }
    };
};