const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Warehouse connected to server. Response available in browser.");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
