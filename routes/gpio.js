/**
 * Created by Alex on 12/3/2015.
 */

/**
 TODO: This File Will Have To Be Debugged At The Event
 */

var sys = require("util");
var exec = require("child_process").exec;
function puts(error, stdout, stderr){ console.log(stdout);}
exec("gpio -g write 2 1",puts);
exec("gpio -g write 2 0", puts);


//open required pins
//pins.open() --ect
module.exports = function ()
{


    return {
        //car control
        forward: function ()
        {
            exec("gpio -g write 2 1",puts);
            exec("gpio -g write 2 0", puts);
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