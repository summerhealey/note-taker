// ===============================================================================
// DEPENDENCIES
// ===============================================================================

const fs = require("fs");

const { v4: uuidv4 } = require('uuid');

const router = require('express').Router();


// ===============================================================================
// API ROUTING REQUESTS
// ===============================================================================

  // API GET Request
  // ---------------------------------------------------------------------------

  router.get("/notes", function(req, res){

    // Reads the db.json file
    fs.readFile("./db/db.json", "utf8", function(err, data){
      if(err){
          console.log(err);
      }
          // Parses the data and stores to note variable
          let note = JSON.parse(data);

          // Provides data to user
          res.json(note);
  });

  });


  // API POST Requests
  // ---------------------------------------------------------------------------

  router.post("/notes", function(req, res){

    // Reads the db.json file
    fs.readFile("./db/db.json", "utf8", function(err, data){
        if(err){
            console.log(err);
        }
            // Parses the data and stores to note variable (as in the GET Request)
            let note = JSON.parse(data);

            // Assigns a random number as the id to the note when it's saved
            req.body.id = uuidv4();

            // Store the new note from the POST request to a newNote variable
            let newNote = req.body;
            console.log(newNote);

            // Push request adds the newNote into note variable (it's an array)
            note.push(newNote); 

            // Writes new note file 
            fs.writeFile("./db/db.json", JSON.stringify(note), function(err){
                if(err){
                    return console.log(err);
                }
                    console.log("success!");
            })

            // Provides new data to user
            res.json(note);
    });
});

 // API DELETE Requests
// ---------------------------------------------------------------------------


  router.delete("/notes/:id", function(req, res){
    
    // Assigns variable to selected id that is retrieved from the front end
    let selectedId = req.params.id;

    // Reads the db.json file
    fs.readFile("./db/db.json", "utf8", function(err, data){
        if(err){
            console.log(err);
        }
        // if no error obtained, run code below

            // Parses the currently selected note data
            const selectedNote = JSON.parse(data);

            // Loops through the note array and finds the note with the id that matches the id selected
            for(let i = 0; i < selectedNote.length; i++){

                // If statement determines if the selectedNote id matches the selectedId
                if(selectedNote[i].id === selectedId){
                    // Getting the index of an object inside an array:  
                    // https://www.rithmschool.com/courses/node-express-fundamentals/express-router
                    let index = selectedNote.findIndex(x => x.id === selectedId);

                    // Removes the object with the matching id
                    selectedNote.splice(index, 1);

                    // Rewrites json file with the updated notes
                    fs.writeFile("./db/db.json", JSON.stringify(selectedNote), function(err){
                        if(err){
                            return console.log(err);
                        }
                            console.log("success!");
                    });

                    // Provides user with updated array
                    res.json(selectedNote);

                    console.log(selectedNote);
                } 
            }
    });
});

module.exports = router;
