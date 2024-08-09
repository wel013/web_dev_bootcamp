import express from "express";
import morgan from "morgan"
const app = express();
const port = 3000;

app.use(morgan("tiny"))

app.get("/", (req, res) => {
  res.send("Hello");
});
// we acc do not need the handler just to print GET / 304 - - 2.424 ms
app.post("/submit", (req, res) => {
  console.log(req.method)
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
