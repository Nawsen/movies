class MovieCollectionController{
  constructor(){

  }
  addSelected(movie){
    this.add({movie: movie});
  }
  remSelected(movie){
    this.remove({movie: movie});
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
