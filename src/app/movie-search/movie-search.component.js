export class MovieSearchController {
  constructor(MoviesService) {
    this.MoviesService = MoviesService;
  }

  search(filter){
    console.log(filter);
    this.MoviesService.getMovies(filter).then((data) => {
      console.log(data);
      this.movies = data;
    });
  }
}

export var MovieSearchComponent = {
  template: require('./movie-search.html'),
  controller: MovieSearchController
};
