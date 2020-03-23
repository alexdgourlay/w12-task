const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const port = 4000;

const app = express();
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PATCH");
  next();
});

app.get("/logo.svg", (req, res) => {
  res.setHeader("Content-Type", "image/svg+xml");
  res.sendFile(path.join(__dirname, "../src/assets/svg/stranger-things-logo.svg"));
});

const guiSettingsPaths = {
  app: "./src/gui-app.json",
  "stranger-things-logo": "./src/components/StrangerThingsLogo/gui-stranger-things-logo.json"
};

app.get("/gui-settings/:component", (req, res) => {
  fs.readFile(guiSettingsPaths[req.params.component], (err, data) => res.send(data));
});

app.patch("/gui-settings/:component", (req, res) => {
  const data = req.body;
  console.log("Incoming patch body");
  console.log(JSON.stringify(data));

  fs.writeFile(guiSettingsPaths[req.params.component], JSON.stringify(data), (err) => {
    if (!err) {
      res.sendStatus(202);
    } else {
      res.sendStatus(500);
    }
  });
});

app.listen(port, () => console.log(`Dev server on port ${port}`));
