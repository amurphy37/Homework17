const express = require("express");
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout"

const options = {
    useNewURLParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
};

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const Workout = require("./models/Workout")

mongoose.connect(MONGODB_URI, options);

// routes
require("./routes/api-routes")(app)
require("./routes/html-routes")(app)

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});