const express = require("express");
const app = express();
const bodyParser = require("body-Parser");
const mysql = require("mysql"); 
const peopleRoutes = require("./routes/people")
const mysqlConnection = require("./connection")


app.use(bodyParser.json());

const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api",peopleRoutes)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
