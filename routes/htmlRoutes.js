// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");

const router = require('express').Router();

// ===============================================================================
// ROUTING
// ===============================================================================

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  //Sends user to homepage
  router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  //Sends user to notes.html
  router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  })

  //Sends user to the homepage if unable to locate route
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

module.exports = router; 
