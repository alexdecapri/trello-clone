// Code here for your authCtrl.js to test the endpoint
var app = angular.module("trelloClone");

app.controller("AuthCtrl", function($scope, $state, authService) {
  $scope.test = "auth";
})



// When you are done testing your own endpoint, comment out or erase your code, and use the code from below to test the trello app

// angular
//     .module('trelloClone')
//     .controller('AuthCtrl', function ($scope, $state, authService) {

//         $scope.test = 'auth';

//         $scope.handleEnterOnInput = function (event) {
//             if (event.keyCode === 13) {
//                 $scope.login();
//             }
//         };

//         $scope.login = function () {
//             authService.login($scope.username)
//                 .then(function (response) {
//                     $state.go('todo')
//                 })
//                 .catch(function (err) {
//                     console.log(err);
//                 })
//         };

//         $scope.logout = function () {
//             authService.logout()
//                 .then(function (response) {
//                     $state.go('auth')
//                 })
//                 .catch(function (err) {
//                     console.log(err);
//                     $state.go('auth');
//                 })
//         }
// });
