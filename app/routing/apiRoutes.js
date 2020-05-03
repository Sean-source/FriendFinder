var friendData = require("../data/friend.json");
var fs = require("fs");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {

        res.json(friendData);
    })

    app.post("/api/friends", function (req, res) {
        let userScores = req.body.scores;
        let minDifference = 0;
        console.log(req.body);

        for (let i = 0; i < friendData.length; i++) {
            for (let j = 0; j < friendData[i].scores.length; j++) {
                minDifference += Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScores[j]))
            }
            friendData[i].minDifference = minDifference;
            minDifference = 0;
            
        }
        friendData.sort((a, b) => a.minDifference - b.minDifference);
        console.log(friendData);
        friendData.push(req.body)

        fs.writeFile("./app/data/friend.json", JSON.stringify(friendData), function (err, results) {
            if (err) throw err
            console.log("Success");
        })
        res.json(friendData[0]);
    })
}