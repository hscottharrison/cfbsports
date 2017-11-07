const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const massive = require("massive");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/public"));


app.get("/api/test", (req, res, next) => {
  res.status(200).json({id: 'hello'})
})


app.listen(3001, () => {
  console.log("Jet fuel cant melt steel beams");
});
