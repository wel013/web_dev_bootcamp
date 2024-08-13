import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const d = new Date();
let day = d.getDay();
var weekday = [];
weekday = [0, 6];
var value = "/"
day = 0
if (day in weekday) {
    value = "It's weekday, its time to work hard!"

}
else {
    value = "It's weekend, its time to have fun!";

}
app.get("/", (req, res) => {
    res.render("index.ejs", { day: value });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});