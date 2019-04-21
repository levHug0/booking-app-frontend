# GoLogic Booking Platform

This is created using EmberJS Framework. I have a year commercial experience using Ember at my previous position, but the version they were using was 2.0 and this app is created in Ember 3.8.1, so A lot has changed. Also, this is my first time creating an Ember app from scratch, since the Ember app I was doing was already built and I don't have experience creating an Ember app from the groundup, so there was a lot of learning curve during the development of this project. I went with Ember and Sails JS stack, because I want to improve and actually get better at making apps using these two.

### Problems encountered and solution

* RESTAdapter inside app/adapters/application.js, I wasn't aware that the adapter is expecting a response nested inside a property, for example /rooms/1 is expecting "room": { "title": "Luxury room", "id": 1 }

###### Solution: On the backend latest SailsJS by default doesn't respond with a key of the data, so I had to create a function inside the RoomController which does exactly the same as GET /rooms/1, but modified so response is i.e. "room": { "title": "Luxury room", "id": 1 }, instead of { "title": "Luxury room", "id": 1 }

* UI design, I'm not a very good designer, so I spent about a day creating prototypes on how the whole site would look

###### Solution: Initially the landing page was suppose to have an image background, but i just settled with a simple logo and white background, since I spent too much on this.

* Initially I was planning on using Materialize design datepicker, instead of flatpickr, but after installing, it caused a huge error that broke the whole site, and reverting the whole thing would've taken too long, so

###### Solution: I redid the project, I now have two folders called booking-app and booking-app-frontend

* On booking, I disabled dates that are booked to prevent users from selecting already booked dates, but users could book from the 1st of January to 31st of December and the whole booking for a page would be locked.

###### Solution: I implemented a check, so that bookings are only 7 days long i.e. Start date and End date are within 7 days apart, so an error would occur if end date is longer than 7 days from start date

* Error Handling and Success handling when booking, UI wise could've been improved, but I ultimate settled with alerts cause I'm running out of time

* Handling of errors when booking i.e. input missing, start date is after the end date are all handled and checked on the front-end and back-end, so users won't be able to book unless required data are correct

### Tradeoffs
* I didn't properly implement the store endpoints for booking-details model, since I'm running out of time, I quickly used jquery getJSON to get the data off the backend, instead of properly setting up the store. Although, store findAll and findRecord work properly for room model

* The overall look of the site can be improved on

## Files coded (Not Ember boilerplate)

* Everything is done inside the '/app' folder
* `router.js` is where the routes are created i.e. /rooms, /rooms/:id
* All files inside templates i.e. templates/rooms.hbs, templates/components/room-details.hbs
* All files inside routes i.e. routes/rooms.js
* All files inside models
* All files inside controllers
* Application.js inside /adapters/application.js
* All files inside components
* SCSS inside styles/app.scss

## Libraries/CSS frameworks used

* jQuery
* Semantic ui
* Bootstrap
* SASS
* Moment js
* flatpickr

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Running / Development

* Using a terminal cd into the project directory i.e. '/booking-app-frontend'
* Type `npm install`
* Type `ember serve` or `ember s`
* Ignore lint and identation errors and wait until you see 'Build successful'
* Visit app at [http://localhost:4200](http://localhost:4200).

## Visiting test

* Ensure `ember serve` is running
* Visit tests at [http://localhost:4200/tests](http://localhost:4200/tests)
* On Tests page change module to 'Acceptance | check routes'
* Click apply and see the test
* To see test file go to 'tests/acceptance/check-routes-test.js'

This my first time writing unit test using Qunit in Ember, so this is all I can create given the time and the learning I have to do.