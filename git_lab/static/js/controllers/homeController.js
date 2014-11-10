function homeController($scope, $http, RepoFactory) {
    console.log('homeController');
//    Get Repos
    RepoFactory.getRepos(function(repoResponse) {
        $scope.repos = repoResponse;
        console.log(repoResponse);
        RepoFactory.repoList = $scope.repos;
    });
//   Repo Description
    $scope.repoDescription = function() {
        if (this.description){
            return false;
        } else {
            this.description = true;
        }
    }

}
