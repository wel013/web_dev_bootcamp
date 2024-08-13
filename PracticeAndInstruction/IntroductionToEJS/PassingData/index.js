import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  let name1 = req.body["fName"]
  let name2 = req.body["lName"]
  let names = name1 + name2
  let data = { name: names }
  res.render("index.ejs", data)


});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
