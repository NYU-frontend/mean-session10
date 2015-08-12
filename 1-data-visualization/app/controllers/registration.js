app.controller('registration', function($scope, $location){

    $scope.name="Daniel";
    
    $scope.login = function() {
     $location.path("/graph")
 } //login
    $scope.register = function() {
     $location.path("/graph")
 } //register
});