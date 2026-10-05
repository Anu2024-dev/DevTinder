const express = require("express");
const app = express();
//this wil only handle get call to /user;
//actually how to write middleware for standard
const { authAdmin, userAuth } = require("./Middlewares/auth");
app.use("/admin", authAdmin);
app.get("/admin/getAllData", (req, res) => {
  res.send("All data fetched");
});
app.delete("/admin/deleteData", (req, res) => {
  res.send("delete req for data sent");
});
app.get("/user/login", (req, res) => {
  res.send("user Login");
});
app.get("/user/data", userAuth, (req, res) => {
  res.send("user data fetched");
});
app.listen(3000, () => {
  console.log("Server is Successfully listning on port 3000...");
});
