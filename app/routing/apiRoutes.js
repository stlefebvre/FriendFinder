//GET methods and whatnot to determine what data gets pulled from the front end
var friendData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    //Fix this to survey for loop to get paired with friend based on score
    app.post("/api/friends", function(req, res) {
        if (friends.length < 7) {
            friends.push(req.body);
            res.json(true)
        }
    })
} 