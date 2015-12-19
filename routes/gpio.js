/**
 * Created by Alex on 12/3/2015.
 */

/**
 TODO: This File Will Have To Be Debugged At The Event
 */

var io = require("pi-gpio");

//open required pins
//pins.open() --ect
module.exports = function ()
{
    io.open(21, "output", function (err)
    {
        io.write(21, 1, function ()
        {
            io.close(16);
        });
    });

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