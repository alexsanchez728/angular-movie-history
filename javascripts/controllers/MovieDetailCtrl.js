'use strict';

app.controller("MovieDetailCtrl", function($routeParams, $rootScope, $scope, MovieService){
  $scope.movie = {};


  const getMovie = () => {
    MovieService.getWishlistMovies($rootScope.uid).then((results) => {
      $scope.movies = results;
    }).catch((err) => {
      console.log("error in RatedCtrl", err);
    });
  };

  getMovie();

  MovieService.getSingleMovie($routeParams.id).then((results) => {
    $scope.movie = results.data;
  }).catch((err) => {
    console.log("error in getSingleMovie", err);
  });

  $scope.switchWatched = (movie) => {
    movie.isWatched = true;
    let updatedMovie = MovieService.createMovieObject(movie);
    MovieService.updateMovie(updatedMovie, $routeParams.id).then((results) => {
      getMovie();
    }).catch((err) => {
      console.log("error in updateMovie", err);
    });
  };

  $scope.starChange = (event, movie) => {
    if (event.rating) {
      movie.rating = event.rating;
      let updatedMovie = MovieService.createMovieObject(movie);
      MovieService.updateMovie(updatedMovie, $routeParams.id).then(() => {
        getMovie();
      }).catch((error) => {
        console.log("error in updateMovie", error);
      });
    }
  };
  
});