angular
    .module('foobar').controller('testCtrl', ['$http', '$log',
    function(){

        var baseUrl = "localhost:8080";
        var test_controller = "/test";

        var req = {
                      //method: 'GET',
                      url: 'http://'+this.getBaseUrl() + test_controller,
                      headers: {
                          'Content-Type': 'application/json',
                          'accept': 'application/json'
                            }
                       };


         var response = $http(req)

         console.log(response);



    }]);

/**
 * scripts go here
 */
