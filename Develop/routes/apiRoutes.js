const db = require("../models");


module.exports = function (app) {

    //get all workouts
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(workouts => {
            
            res.json(workouts);
        }).catch(err => {
            res.json(err);
        });
    });

    
    // get workouts for stats
    app.get("/api/workouts/range", (req, res) => {

        db.Workout.find({}).then(workouts => {
            res.json(workouts);
        }).catch(err => {
            res.json(err);
        });

    });


}