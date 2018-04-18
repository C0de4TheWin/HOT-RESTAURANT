
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// RESERVATION DATA
var reservation = [{

    name: "Sam",
    phoneNum: "8675309",
    email: "sam@gmail.com",
    uniqueId: "Test",

}];

var waitlist = [{

    name: "Test",
    phoneNum: "8675309",
    email: "sam@gmail.com",
    uniqueId: "Test1"

}]

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/view", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function (req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
});

//Display Reservations and Wait List

app.get("/api/reservation", function (req, res) {
    return res.json(reservation);

});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);

});


app.post("/api/reservation", function (req, res) {
    var newreservation = req.body;
    console.log(newreservation);
    if (reservation.length <= 4) {
        reservation.push(newreservation);
    }
    else {
        waitlist.push(newreservation);
    }
    res.json(newreservation);
});

app.listen(PORT, function () {

    console.log("App listening on PORT " + PORT);

});