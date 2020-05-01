var friendData = require("../data/friend.json");
var fs = require("fs");

module.exports = function(app) {
    app.get("/api/friends", function(req,res) {

        res.json(friendData);
    })

    app.post("/api/friends", function(req,res) {
        console.log(req.body);
        
        friendData.push(req.body)

        fs.writeFile("./app/data/friend.json", JSON.stringify(friendData), function(err, results) {
            if (err) throw err
            console.log("Success");
        })
        res.json(req.body);
    })      
}