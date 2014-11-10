gitlab.factory('RepoFactory', function($http){
   return{
       repoList: [],
       getRepos: function(callback) {
           $http.get('proxy/user/repos')
               .success(function(repositories){
                   callback(repositories);
               }).error(function(error) {
                   console.log('error');
                   console.log(error);
               });
       }
   }

});