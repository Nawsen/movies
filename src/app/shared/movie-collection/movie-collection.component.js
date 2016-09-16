class MovieCollectionController{
  constructor(){

  }

}

export var MovieCollectionComponent = {
  template: require('./movie-collection.html'),
  controller: MovieCollectionController,
  bindings: {
    movies: '<'
  }
};
