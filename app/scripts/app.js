(function() {
  function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider
             .state('home', {
                 url: '/',
                 templateUrl: '/templates/home.html'
             });
     }

     angular
        .module('app', ['ui.router'])
        .config(config);
})();
