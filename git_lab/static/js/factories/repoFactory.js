gitlab.factory('RepoFactory', function($http){
   return{
       repoList: [],
       getRepos: function(callback) {
           $http.get('proxy/user/repos')
               .success(function(repositories){
                   callback(repositories);
                   $scope.repos = repositories;
               }).error(function(error) {
                   console.log('there was an error');
                   console.log(error);
               });
       }
   }

});