gitlab.factory('RepoFactory', function($http){
   return{
       repoList: [],
       getRepos: function(callback) {
           $http.get('') //the route to github where I will retrieve the repos
               .success(function(response){
                   callback(response);
               }).error(function(error) {
                   console.log(error);
               });
       }
   }

});