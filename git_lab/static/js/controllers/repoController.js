function repoController($scope, $http, $routeParams, RepoFactory) {
    console.log('repoController');
    $scope.ownerName = $routeParams.owner;
    $scope.repoName = $routeParams.repo;

    $http.get('/proxy/repos/' + $scope.ownerName + '/' + $scope.repoName)
        .success(function (repo) {
            console.log(repo);
            $scope.repo = repo;
        })
        .error(function (error) {
            console.log('error');
            console.log(repo);
        });

}