/**
 * Created by Alex on 12/18/2015.
 */
angular.module('app', [])
    .controller('ctrlr',["$scope","$http",ctrlr]);

function ctrlr($scope,$http)
{
    $scope.send = function(event)
    {
        console.log(String.fromCharCode(event.keyCode));

        $http.post("/commands",{cmd:String.fromCharCode(event.keyCode)});
    }
}