# FriendFinder

This project uses Materialize, Bootstrap, jquery, and express. The user has
three options on the homepage: begin the personality test,
the json object of users stored on the back end, and a link to my github repo. 

The personality test will search the data on the back end to determine who
the user has the most similar personality to. The user will input their name, a photo, and then rank 10 questions according to their traits. There is a common saying that opposites attract, however, research suggest we tend to like people we are most similar to. This is app is aimed to 
help pair individuals with similar personalities.

The back-end works from creating a server through express. The server communicates with two
routes the html route and api route. The html route is responible for sending the html file
paths to the corresponding route on the server. The api route is responsible for the CRUD operations. The two operations used in this application is reading the JSON data and posting new entries received from the input using an ajax request on the front end. The logic is simple in this application in that I am calculating the absolute differences between the users answer and the already existing users answers in the database. The total smallest value is the closest matching personality.

This application is deployed to Heroku.