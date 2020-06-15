// Calling in our models
const Workout = require("../models/Workout")

// exporting api routes as its own module to be called in server.js

module.exports = function(app) {

    // Route for getting workouts
    app.get("/api/workouts", function (req, res) {
        Workout.find({}).sort({day: 1})
            .exec((err,data) => {
                if (err) {
                    console.log(err.message)
                }
            res.json(data)

            })
        })

    // Route for adding exercise to workout

    app.put("/api/workouts/:id", function (req, res) {
        
        Workout.findByIdAndUpdate(req.params.id, 
        {$push: {exercises: req.body}})
        .then(success => {
            if (success) {
                console.log("Successfully added exercise to workout")
                res.json(success)
            }
            else {
                console.log("Couldn't add exercise")
            }
        })
        .catch(err => console.log("Error: " + err.message))  

    })

    // Route for creating workout

    app.post("/api/workouts", function (req, res) {
        Workout.create(req.body, function (err, success) {
            if(err) {
                console.log(err.message)
            }

            res.json(success)
        })
    })
        


    // Route for getting workouts in a specific range
    app.get("/api/workouts/range", function (req, res) {
        Workout.find({}, function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result)
                res.json(result);
            }
        })

    })






}




