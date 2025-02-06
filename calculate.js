const express = require("express");
const app = express();

app.get("/add", function(req, res){
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    add: a + b
  })
})

app.get("/subtract", function(req, res){
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    sub: a - b
  })
})

app.get("/multiply", function(req, res){
  const a = req.query.a;
  const b = req.query.b;

 res.json({
  multiply: a * b
 })
})

app.get("/divide", function(req, res){
  const a = req.query.a;
  const b = req.query.b;

  res.json({
    divide: a / b
  })
})
app.listen(3004)