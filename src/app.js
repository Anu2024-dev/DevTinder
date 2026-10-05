const express = require("express");
const app = express();
//this wil only handle get call to /user;
//****GET/users=>middleware chain=>request handler..
app.use("/", (req, res, next) => {
  //res.send("Handling /route");
  next();
});
app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling / user route");
    next();
  },
  (req, res) => {
    res.send("1st Route Handler");
  },
  (req, res) => {
    res.send("2nd Route Handler");
  },
);
app.listen(3000, () => {
  console.log("Server is Successfully listning on port 3000...");
});
