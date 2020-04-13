# Fur Keeps Pet Finder app

FURKEEPS is your one stop for determining your perfect pet type, being matched with a fur baby awaiting adoption who meets your pet match criteria and starting the adoption process all from the comfort of your home. 

### [ FurKeeps web page](https://furkeeps.herokuapp.com/)

![Furkeeps](https://furkeeps.herokuapp.com/images/furKeep.jpg)

## Getting Started

These instructions will get you a copy of the project [furKeeps Git hub Repo](https://github.com/Mlusso06/fosterPetTinder) up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need: 
* code editing [Visual Studio](https://visualstudio.microsoft.com/)
* work bench ui [MySQL](https://dev.mysql.com/doc/workbench/en/)

```
Open your Code editing software (example Visual Studio)

Open the "Terminal" in studio
perform a git clone https://github.com/Mlusso06/fosterPetTinder.git

```

### Installing

After having the files cloned into your Studio, I would perform a 
* "Save Workspace AS" to have a workspace to come back to.
* Next you will need to install your code's Dependencies
    * This will capture all the items in your package.json file

See below on how to perfom the install.

```
npm i
```

Next open MySQL and create a new "connection"
* create a user name
* set up a pass word

Now you will create your own .env file in the root folder and enter the following info.


```
DBhost = "localhost"
DBuser = "root" or your username
DBPass = "root" or your pass word chosen

```
Now go into the (/models/schema.sql) and (seeds.sql) files and copy the information and enter into your workbench.
Be sure to run the code to create your DB (data base) and Tables.  Then on the seeds file, run that code to create the usable information.

## Running the server

Now you will want to run the web site locally.

### Right Click your server.js file and OPEN in Terminal

This will open your terminal in your "Root" folder and allow you to run the server "you may have done this already to get your  "npm i " completed

```
node server.js
```

### You should now see the serving running

click on the link to open your webbrowser "local host"

```
Server listening on: http://localhost:8080
```

# Project work

## Deployment

We deployed with [Heroku](https://dashboard.heroku.com/apps)
using the the app [JawsDB](https://devcenter.heroku.com/articles/jawsdb)

#### read individual instructions for more detal

## The Web site was Built With

* [Materialize](https://materializecss.com/) - The web framework used
* [Font Awesome](https://fontawesome.com/) - Icon and font
* [OwlCarousel](https://owlcarousel2.github.io/OwlCarousel2/) - Used to create the carousel


## Project Team:

* **Dannielle Taylor** - *Front End* - [d-taylor6403](https://github.com/d-taylor6403)


* **Celeste Lewis** - *Back end* - [cdlewis42](https://github.com/cdlewis42)


* **Mike Lusso** - *Team Lead* - [Mlusso06](https://github.com/Mlusso06)

## BootCamp Acknolegments 

This project was part of the Vanderbilt coding Bootcamp - click [Vanderbilt](https://bootcamps.vanderbilt.edu/)  for details and how you can enroll.

## Acknowledgments

* Thanks to our Class instructor, and the TAs that have helped over the 2 weeks of development
* Inspiration for this was a small part of the Friend finder app, matching your pet with the right owner.