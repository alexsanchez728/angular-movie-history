'use strict';

//app.run() runs one time/ application, AFTER the config
	// the time to add variables

app.run(function ($rootScope, FIREABASE_CONFIG, tmdbService){
	firebase.initializeApp(FIREABASE_CONFIG);

	tmdbService.tmdbConfiguration().then((results) => {
		$rootScope.image_url = results.data.images.base_url;
	}).catch((err) => {
		console.log("error in tmdbCondifuration", err);
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
		controller: 'SearchCtrl'
	})
	.when("/wishlist", {
		templateUrl: 'partials/wishlist.html',
		controller: 'WishlistCtrl'
	})
	.when("/rated", {
		templateUrl: 'partials/rated.html',
		controller: 'RatedCtrl'
	})
	.otherwise('/auth');
});