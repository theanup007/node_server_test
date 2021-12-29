const express = require("express");
const app = express();

app.route("/").get((req, res) => {
  res.send("Server up and running!");
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
