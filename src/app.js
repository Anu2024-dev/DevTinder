const express = require("express");
const app = express();
//this wil only handle get call to /user;
app.get("/user", (req, res, next) => {
  console.log("send successfully");
  res.send("router handler !");
  //next();
});
app.get("/user", (req, res, next) => {
  console.log("send successfully");
  //res.send("router handler 2!");
  next();
});
app.listen(3000, () => {
  console.log("Server is Successfully listning on port 3000...");
});
