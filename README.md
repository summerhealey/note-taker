# Note Taker
  

# Note Taker Guidelines

This is a a [Heroku](../04-Supplemental/HerokuGuide.md) deployed Express.js application that allows the user to write, save, and delete notes via a JSON file. The client requires an application that can keep track of a lot of information and provide it's employees with a way to recall something important.The application will be invoked with the following command:

```



```

This application has the following HTML routes:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `*` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

The application also has the following API routes:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


The specific features of the application are outlined in the acceptance criteria provided by the client. 

# Acceptance Criteria Requirements:

Functional application includes the following:

* Functional application that writes, saves, and deletes notes from user.

* Application should allow users to view previously saved notes.

* Application should allow users to delete previously saved notes.
 

The following animation demonstrates the client's request for application functionality:

Client Demo:

![Note Taker Demo](./assets/images/10-OOP-homework-demo-1.png)

Application Demo: 
![Deployed Application Screenshot](./assets/images/noteTaker.jpg)

Video Demo:
![Video Demonstration of Application](https://drive.google.com/)

GitHub Repository: https://github.com/summerhealey/note-taker/

Heroku URL: 

# Criteria Determination: 

This application provides a fully functional Heroku deployed Express.js application that allows users the option to organize their notes as well as edit (by saving or deleting). 

For additional information, please e-mail the project manager [Summer Healey](https://github.com/summerhealey/): summerleigh.healey@gmail.com.
