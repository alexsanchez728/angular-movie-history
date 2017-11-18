'use strict';

//To keep users from seeing anything on the page
// resolve will be true
let isAuth = (AuthServices) => new Promise((resolve, reject) => {
	if (AuthServices.isAuthenticated()) {
		resolve();
	} else {
		reject();
	}
});

//app.run() runs one time/ application, AFTER the config
	// the time to add variables

app.run(function ($location, $rootScope, FIREABASE_CONFIG, AuthServices, tmdbService){
	firebase.initializeApp(FIREABASE_CONFIG);

	tmdbService.tmdbConfiguration().then((results) => {
		$rootScope.image_url = results.data.images.base_url;
	}).catch((err) => {
		console.log("error in tmdbCondifuration", err);
	});

//watch method that fires on change of a route.  3 inputs. 
  //event is a change event
  //currRoute is information about your current route
  //prevRoute is information about the route you came from
	$rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
    // checks to see if there is a current user
		var logged = AuthServices.isAuthenticated();

    var appTo;

    // to keep error from being thrown on page refresh
    if (currRoute.originalPath) {
      // check if the user is going to the auth page = currRoute.originalPath
      // if user is on auth page then appTo is true
      // if it finds something other than /auth it return a -1 and -1!==-1 so resolves to false
      appTo = currRoute.originalPath.indexOf('/auth') !== -1;
    }

    //if not on /auth page AND not logged in redirect to /auth
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/auth');
    }
  });
	
});

app.config(function($routeProvider){
	$routeProvider
	.when("/auth", {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when("/search", {
		templateUrl: 'partials/search.html',
		controller: 'SearchCtrl',
		resolve: {isAuth}
	})
	.when("/wishlist", {
		templateUrl: 'partials/wishlist.html',
		controller: 'WishlistCtrl',
		resolve: {isAuth}
	})
	.when("/rated", {
		templateUrl: 'partials/rated.html',
		controller: 'RatedCtrl',
		resolve: {isAuth}
	})
	.when("/movie/:id", {
		templateUrl: 'partials/movie_detail.html',
		controller: 'MovieDetailCtrl',
		resolve: {isAuth}
	})
	.otherwise('/auth');
});