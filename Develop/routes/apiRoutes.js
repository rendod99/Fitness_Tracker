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

    // adds an exercise
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate({ _id: req.params.id },
            {
                $push: { exercises: req.body }
            },
            { new: true }).then(workouts => {
                res.json(workouts);
            }).catch(err => {
                res.json(err);
            });

    });

    //creates a new workout
    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body).then((workouts => {
            res.json(workouts);
        })).catch(err => {
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