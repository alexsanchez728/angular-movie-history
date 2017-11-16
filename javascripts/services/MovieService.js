'use strict';

app.service("MovieService", function ($http, $q, FIREABASE_CONFIG) {
  const getRatedMovies = (userUid) => {
    let movies = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREABASE_CONFIG.databaseURL}/movies.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbMovies = results.data;
        Object.keys(fbMovies).forEach((key) => {
            fbMovies[key].id = key;
            if (fbMovies[key].isWatched) {
              movies.push(fbMovies[key]);
            }
            resolve(movies);
          });
      }).catch((error) => {
        reject(error);
      });
    });
  }; // end getRatedMovies


  const getWishlistMovies = (userUid) => {
    let movies = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREABASE_CONFIG.databaseURL}/movies.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbMovies = results.data;
        Object.keys(fbMovies).forEach((key) => {
          fbMovies[key].id = key;
          if (!fbMovies[key].isWatched) {
            movies.push(fbMovies[key]);
          }
          resolve(movies);
        });
      }).catch((error) => {
        reject(error);
      });
    });
  }; // end getWishlistMovies

const postNewMovie = (newMovie) => {
  return $http.post(`${ FIREABASE_CONFIG.databaseURL }/movies.json`, JSON.stringify(newMovie));
};

  return { getRatedMovies, getWishlistMovies, postNewMovie};
});