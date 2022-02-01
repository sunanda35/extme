const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", async (req, res, next) => {
  res.send("Hello World!");
});

app.listen(port, () =>
  console.log(`Example app listening on: http://localhost:${port}`)
);
