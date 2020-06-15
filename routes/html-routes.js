// Calling path module to help route html files correctly
var path = require("path")

// Setting up html routing as its own module to export to server.js file for express handling

module.exports = function(app) {
 // Each of the below routes just handles the HTML page that the user gets sent to.

//  Index route loads index.html
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

// Setting up exercise get route to render exercise.html
app.get("/exercise", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

// Setting up statse route to render stats.html
app.get("/stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})

}