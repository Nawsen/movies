export class MoviesService {
  constructor($http, BASEURL) {
    this.$http = $http;
    this.BASEURL = BASEURL;
  }
  getMovies(title) {
    return this.$http.get(`${this.BASEURL}/online?title=${title}`).then((resp) => {
      return resp.data;
    });
  }
}
