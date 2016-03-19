// Code your AuthCtrl here following the project guide - When you have put the commented out code back into your server.js, use the code from below to
// connect the login function to the backend, and then retest your app.

angular
    .module('trelloClone')
    .controller('AuthCtrl', function ($scope, $state, authService) {

        $scope.test = 'auth';

        $scope.login = function() {
          console.log("username: ", $scope.username);
          authService.login($scope.username).then(function(results){
            console.log(results);
            $state.go("list");
          });

        }
        $scope.handleEnterOnInput = function (event) {
            if (event.keyCode === 13) {
                $scope.login();
            }
        };

        // $scope.login = function () {
        //     authService.login($scope.username)
        //         .then(function (response) {
        //             $state.go('todo')
        //         })
        //         .catch(function (err) {
        //             console.log(err);
        //         })
        // };

        $scope.logout = function () {
            authService.logout()
                .then(function (response) {
                    $state.go('auth')
                })
                .catch(function (err) {
                    console.log(err);
                    $state.go('auth');
                })
        }
});
