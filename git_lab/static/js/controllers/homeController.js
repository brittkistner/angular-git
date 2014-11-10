function homeController($scope, $http, RepoFactory) {
    console.log('homeController');
//    console.log($scope.repos);
//    Get Repos
//    $http.get('proxy/user/repos').
//        success(function(res) {
//            console.log('worked');
//            console.log(res);
//            $scope.repositories = res
//        }).
//        error(function(err) {
//            console.log('got an error');
//            console.log(err)
//    });
    if (RepoFactory.repoList.length > 0) {
        $scope.repos = RepoFactory.repoList;
    } else{
        RepoFactory.getRepos(function(repoResponse) {
            $scope.repos = repoResponse;
            console.log(repoResponse);
            RepoFactory.repoList = $scope.repos;
        });
    }
//   Repo Description
//    $scope.repoDescription = function() {
//        if (this.description){
//            return false;
//        } else {
//            this.description = true;
//        }
//    }

}
