const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const mysqlConnection = require("../connection");

router.get("/people", (req, res) => {
  mysqlConnection.query("select * from people", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});
router.post("/addpeople", (req, res) => {
  let sql = "INSERT INTO people SET ?";
  let post = {
    name: req.body.name,
    contactNo: req.body.contactNo,
  };
  mysqlConnection.query(sql, post, (err, res) => {
    if (err) throw err;
    console.log("success");
  });
  res.send(post);
});

router.put("/updatepeople", (req, res) => {
  let sql = "UPDATE people SET ? WHERE ?";
  let post = [{ contactNo: req.body.contactNo }, { name: req.body.name }];
  mysqlConnection.query(sql, post, (err, res) => {
    if (err) throw err;
    console.log("success");
  });
  res.send(post);
});

router.delete("/deletepeople", (req, res) => {
  let sql = "DELETE from people WHERE ?";
  let post =[ { name: req.body.name }];
  mysqlConnection.query(sql, post, (err, res) => {
    if (err) throw err;

    console.log("success");
  });
  res.json("deleted successfully")
});


module.exports = router;
