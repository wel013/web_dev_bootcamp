//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(bodyParser.urlencoded({ extended: true }));

var userAuthenticated = false;

function checkPassword(req, res, next) {
    var user = (req.body["password"]);
    if (user === "ILoveProgramming") {
        userAuthenticated = true;
    }
    //because we are creating an middle ware
    next(); // we need this to allow the flow
}
app.use(checkPassword)
app.get("/", (req, res) => {
    //require the exact path
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (userAuthenticated) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
