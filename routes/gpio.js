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

//motion control pins
const W_PIN = 2;
const S_PIN = 3;
const A_PIN = 14;
const D_PIN = 15;

//camera control pins
const CAM_Up = 17;
const CAM_Down = 27;
const CAM_Left = 23;
const CAM_Right = 24;

//last command variables
var f = 0;
var b = 0;
var r = 0;
var l = 0;
var u = 0;
var d = 0;
var cl = 0;
var cr = 0;

function digitalWrite(pin, val)
{
    exec("gpio -g write " + pin + " " + val, console.log);
}

function servoStop(pin)
{
    switch (pin)
    {
        case CAM_Down:
            digitalWrite(CAM_Up, HIGH);
            break;
        case CAM_Left:
            digitalWrite(CAM_Right, HIGH);
            break;
        case CAM_Right:
            digitalWrite(CAM_Left, HIGH);
            break;
        case CAM_Up:
            digitalWrite(CAM_Down, HIGH);
            break;
    }
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
            b = on_off;
        },
        turnLeft: function (on_off)
        {
            if (l != on_off)
            {
                digitalWrite(A_PIN, on_off);
                if (on_off === 0)
                {
                    digitalWrite(D_PIN, 1);
                    digitalWrite(D_PIN, 0);
                }
            }
            l = on_off;
        },
        turnRight: function (on_off)
        {
            if (r != on_off)
            {
                digitalWrite(D_PIN, on_off);
                if (on_off === 0)
                {
                    digitalWrite(A_PIN, 1);
                    digitalWrite(A_PIN, 0);
                }
            }
            r = on_off;
        },

        //camera control
        camLeft: function (on_off)
        {
        },
        camRight: function (on_off)
        {
        },
        up: function (on_off)
        {
            if (u != on_off)
            {
                if (on_off === 0)
                {
                    servoStop(CAM_Up);
                }else{
                    digitalWrite(CAM_Up,HIGH);
                }
            }
            u = on_off;
        }
        ,
        down: function (on_off)
        {
        }
    };
};