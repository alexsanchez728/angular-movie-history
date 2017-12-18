# NSS-Exercise: angular-movie-history

## Project Description:
> Create an app for searching, saving, and rating movies. Using The Movie Database's API, get all the relevant movie information for the user to see and then save in Firebase.

## Project Requirements Included:
* Use an external API, tmdb.com, to show movie for the user
* Use Firebase's authentication to allow the user to log in using their Google login information to view, save, and edit content on the site
* Use Firebase's database capabilities to save collections of the user's selected movies so only that user can see their chosen movies
* Give the user the abilities to: search, save, mark as watched, and rate any movie in tmdb's database.


## Final Product

This project was designed as an exercise in using AngularJS and Firebase to build a website. Our primary goal was to learn to incorporate AngularJS into our workflow. This included:
* Using Firebase for CRUD functionality
* Dividing our javascripts into 'controllers' for scoped functions and 'services' for accessing APIs
* Seperating our HTML into individual 'partials' creating one partial per page the user will see
* Use minimal jQuery in our project as AngularJS using jQlite

The product is a simple web app that demonstrates creating, reading, updating, and deleting content on the page with the help of Firebase's database. This app will show movies as the user searches for them and displays movie posters and movie descriptions while also giving the user options to say that they've watched a chosen movie or plan to watch a chosen movie


## How to Run it
Must have Node installed first
```
$ git clone https://github.com/alexsanchez728/angular-movie-history
$ cd angular-movie-history/lib/
$ npm install grunt
$ grunt
```
Then, open a seperate tab and do the following:
```
$ cd ../
$ npm install http-server -g
$ http-server -p 8080
```
This will show up in your browser at:
`http://localhost:8080`

Or visit the deployed Firebase site at:
`https://angular-movie-history-e1508.firebaseapp.com`