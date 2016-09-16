export class MovieFavoritesController {
  constructor(MoviesService) {
    this.MoviesService = MoviesService;
  }

  $onInit() {
   this.getBrol();
  }

  remove(movie) {
    this.MoviesService.deleteMovie(movie.id).then((d) => {
      this.getBrol();
    });
  }
  getBrol(){
    this.MoviesService.getFavMovies().then((d) => {
      this.movies = d;
    });
  }
}

export var MovieFavoritesComponent = {
  template: require('./movie-favorites.html'),
  controller: MovieFavoritesController
};
