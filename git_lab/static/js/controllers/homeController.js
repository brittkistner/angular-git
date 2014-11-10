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
    };

    $scope.privateRepos = function(filterData) {
        if ($scope.isPrivate) {
            //return repos which are private
            return filterData.private == true;
            // else return true for all topics
        } else {
            return true
        }
    };

    $scope.publicRepos = function(filterData) {
        if ($scope.isPublic) {
            //return repos which are private
            return filterData.private == false;
            // else return true for all topics
        } else {
            return true
        }
    };


}
