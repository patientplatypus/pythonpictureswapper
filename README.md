# Python Picture Swapper

## Motivation

I wanted to build an app that would allow me to play around a bit in python and get some basic CRUD functionality up.

## What It Is

It's a store where you can trade virtual pictures with other users. Each user starts with 100 'platybucks' that they can trade with other users. They can get more platybucks by selling their own pictures or, over time, the lowest 20% of users are issued a bit more currency.

## Technologies Used

On the backend I use python and flask to set up CRUD functionality, and also used timing to inflate and keep track of the currency. The database structure is in SQLAlchemy. On the front-end I used the React seed ARc-React that sets up a fractal design pattern that helps you make your own modular components and shows you the best way to set up your own. I highly recommend it!

## How to run

1. Clone databases

2. cd into frontend and npm Install

3. cd into backend and either brew install (mac) or pip install pc any dependencies needed. The python framework I used was flask, running python 2.7.

4. In the backend run python -m SimpleHTTPServer, in the frontend run npm start (this uses webpack so you can also type 'npm run build' to get minimized files in the dist directory!).

5. Navigate to localhost in your browser at your specified front end port number!

## Pictures of it in Action

Here is a picture of the the splashscreen at the top.

![Screenshot](/screenshots/splashscreen.png?raw=true "Splash Screen")

Here is a picture of 'buy from other users' modal.

![Screenshot](/screenshots/buyfromotherusers.png?raw=true "Buy from other users")

Here is a picture of your picture dashboard.

![Screenshot](/screenshots/picturedashboard.png?raw=true "Picture Dashboard")
