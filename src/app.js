const express = require("express");
const app = express();
//this wil only handle get call to /user;
app.get("/user", (req, res) => {
  res.send({ fistName: "Chetana", lastName: "Saha" });
});
app.post("/user", (req, res) => {
  console.log("Save Data to the database.");
  res.send("Data Successfully saved to the database");
});
app.delete("/user", (req, res) => {
  res.send("Deleted Successfully");
});
//this will match all the http method api calls to /test;
app.use("/test", (req, res) => {
  res.send("test");
});
app.listen(3000, () => {
  console.log("Server is Successfully listning on port 3000...");
});
