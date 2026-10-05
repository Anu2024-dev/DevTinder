const authAdmin = (req, res, next) => {
  const token = "xyz";
  const adminvalidation = token == "xyz";
  if (!adminvalidation) res.status(401).send("Unauthorized request of admin");
  else next();
};
const userAuth = (req, res, next) => {
  const token = "xyz";
  const adminvalidation = token == "xyz";
  if (!adminvalidation) res.status(401).send("Unauthorized request of admin");
  else next();
};
module.exports = { authAdmin, userAuth };
