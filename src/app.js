const express = require("express");
const app = express();
//this wil only handle get call to /user;
app.use(
  "/user",
  [
    (req, res, next) => {
      console.log("successfully send");
      //res.send("route handler 1 is called");
      next();
    },
    (req, res, next) => {
      console.log("successfully send");
      //res.send("route handler 2 is called");
      next();
    },
  ],
  (req, res, next) => {
    console.log("successfully send");
    res.send("route handler 3 is called");
    next();
  },
);
app.listen(3000, () => {
  console.log("Server is Successfully listning on port 3000...");
});
