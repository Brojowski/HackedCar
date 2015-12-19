/**
 * Created by Alex on 12/3/2015.
 */

/**
 TODO: This File Will Have To Be Debugged At The Event
 */

var sys = require("sys");
var exec = require("child_process").exec;
function puts(error, stdout, stderr){ sys.puts(stdout);}
exec("gpio -g 2 1",puts);
exec("gpio -g 2 0",puts);

//open required pins
//pins.open() --ect
module.exports = function ()
{


    return {
        //TODO: How do we control?
        //car control
        forward: function ()
        {
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