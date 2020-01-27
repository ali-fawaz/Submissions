const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("ok"));
app.get("/test", (req, res) => res.send({ status: 200, message: "ok" }));
app.get("/time", (req, res) => {
  var d = new Date();
  var t1 = d.getHours();
  var t2 = d.getMinutes();
  res.send({ status: 200, message: `${t1}:${t2}` });
});

app.get("/hello/:ID?", (req, res) => {
  var x = req.params.ID;
  res.send({ status: 200, message: "Hello ", x });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
