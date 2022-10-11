const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "calis",
});
connection.connect(function (err) {
  err ? console.log(err) : console.log(connection);
});
var dateTime = "";
const timer = setInterval(() => {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  dateTime = date + " " + time;
}, 1000);

app.get("/api/test", (req, res) => {
  res.json({ message: dateTime });
});
app.listen(4000, () => console.log("App listening on port 4000"));
