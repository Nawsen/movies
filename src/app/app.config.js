import {MovieHomepageController} from './movie-homepage/movie-homepage.component';
import {MovieSearchController} from './movie-search/movie-search.component';
export function appConfig($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/home', {
    template: '<movies-homepage></movies-homepage>'
  });

  $routeProvider.when('/search', {
    template: '<movies-search></movies-search>'
  });

  $routeProvider.otherwise({
    redirectTo: '/home'
  });
}
