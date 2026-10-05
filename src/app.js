const express = require("express");
const app = express();
//this wil only handle get call to /user;
//middleware is a theroriticall khnowledge there is no rule for it..
app.get("/admin/getAllData", (req, res) => {
  //logic of checking if the request is authorized
  const token = "xyzabc";
  const validatedAdmin = token == "xyz";
  if (validatedAdmin) {
    res.send("all data sent");
  } else {
    res.status(401).send("Unauthorized request of admin");
  }
});
app.delete("/admin/deleteData", (req, res) => {
  //logic of checking if the request is authorized
  const token = "xyz";
  const validatedAdmin = token == "xyz";
  if (validatedAdmin) {
    res.send("delete req for data sent");
  } else {
    res.status(401).send("Unauthorized request of admin");
  }
});
app.listen(3000, () => {
  console.log("Server is Successfully listning on port 3000...");
});
