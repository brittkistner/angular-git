function homeController($scope, $http, RepoFactory) {
    console.log('homeController');
//    Get Repos
    if (RepoFactory.repoList.length > 0) {
        console.log('if');
        $scope.repos = RepoFactory.repoList;
    } else{
        RepoFactory.getRepos(function(repoResponse) {
            $scope.repos = repoResponse;
            console.log(repoResponse);
            RepoFactory.repoList = $scope.repos;
        });
    }
//   Repo Description
    $scope.repoDescription = function() {
        if (this.description){
            this.description = false;
        } else {
            this.description = true;
        }
    }



}
