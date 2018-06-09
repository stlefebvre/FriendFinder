var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var friends = [
    {
        name: "Bill Burr",
        photo: "https://pixel.nymag.com/imgs/daily/vulture/2018/05/17/bill-burr/17-bill-burr-feature.w512.h600.2x.jpg",
        scores: ["5", "3", "1", "4", "2", "2", "5", "1", "3", "1"]
    },
    {
        name: "Joe Rogan",
        photo: "https://static1.squarespace.com/static/587aec812994ca23948fd074/t/5a0c91e2f9619a2a368bc4ad/1510773362145/Joe+Rogan+-+Photo+Credit+Paul+Mobley.jpg?format=1500w",
        scores: ["4", "1", "3", "2", "1", "2", "5", "4", "2", "3"]
    },
    {
        name: "Lewis Black",
        photo: "https://pbs.twimg.com/profile_images/797243702871658496/ScTXBjAk_400x400.jpg",
        scores: ["5", "1", "2", "3", "1", "5", "5", "3", "2", "4"]
    },
    {
        name: "BANKS",
        photo: "https://i1.sndcdn.com/avatars-000035600637-bpkdku-t500x500.jpg",
        scores: ["1", "4", "3", "5", "2", "1", "4", "2", "3", "4"]
    },
    {
        name: "Ian Matthias Bavits",
        photo: "http://www.deviousphoto.com/img/s/v-3/p226803995-3.jpg",
        scores: ["1", "5", "2", "3", "4", "3", "2", "2", "2", "3"]
    },
    {
        name: "Natasha Romanov",
        photo: "https://am22.akamaized.net/tms/cnt/uploads/2018/05/black-widow-scarlett-johansson-marvel-the-avengers-1200x752.jpg",
        scores: ["5", "2", "3", "4", "1", "2", "4", "3", "2", "1"]
    },
    {
        name: "Olive Penderghast",
        photo: "https://s3.r29static.com//bin/entry/a73/340x408/1771006/image.png",
        scores: ["5", "1", "2", "4", "3", "5", "3", "2", "1", "2",]
    }
];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})