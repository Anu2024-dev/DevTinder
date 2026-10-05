const express = require("express");
const app = express();
//wildcard error handlers and its order
app.use("/", (err, req, res, next) => {
  //Log your errors
  if (err) {
    res.status(500).send("something went wrong");
  }
});
app.get("/user", (req, res) => {
  //res.send("user data fetched");
  throw new Error("fghj");
  try {
    throw new Error("fghj");
    res.send("user data fetched");
  } catch (err) {
    res.status(500).send("contact with support team");
  }
});
app.use("/", (err, req, res, next) => {
  //Log your errors
  if (err) {
    res.status(500).send("something went wrong");
  }
});
app.listen(3000, () => {
  console.log("Server is Successfully listning on port 3000...");
});
