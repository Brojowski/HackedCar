/**
 * Created by Alex on 12/3/2015.
 */

/**
 TODO: This File Will Have To Be Debugged At The Event
 */

var sys = require("util");
var exec = require("child_process").exec;

const W_PIN = 2;
const S_PIN = 3;
const A_PIN = 14;
const D_PIN = 15;

var f = 0;
var b = 0;
var r = 0;
var l = 0;

function digitalWrite(pin, val)
{
    exec("gpio -g write " + pin + " " + val, console.log);
}


//open required pins
//pins.open() --ect
module.exports = function ()
{
    return {
        //car control

        forward: function (on_off)
        {
            if (f != on_off)
            {
                digitalWrite(W_PIN, on_off);
            }
            f = on_off;
        },
        backwards: function (on_off)
        {
            if (b != on_off)
            {
                digitalWrite(S_PIN, on_off);
            }
            b = on_off;        },
        turnLeft: function (on_off)
        {
            if (l != on_off)
            {
                digitalWrite(A_PIN, on_off);
            }
            l = on_off;
        },
        turnRight: function (on_off)
        {
            if (r != on_off)
            {
                digitalWrite(D_PIN, on_off);
            }
            r = on_off;
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