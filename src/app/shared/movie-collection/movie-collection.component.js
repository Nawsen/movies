class MovieCollectionController{
  constructor($location){
    this.$location = $location;
  }
  addSelected(movie){
    this.add({movie: movie});
  }
  remSelected(movie){
    this.remove({movie: movie});
  }

  detail(movie){
    this.$location.path('/details/' + movie.id);
  }
}

export var MovieCollectionComponent = {
  template: require('./movie-collection.html'),
  controller: MovieCollectionController,
  bindings: {
    movies: '<',
    favorite: '<',
    add: '&',
    remove: '&'
  }
};
