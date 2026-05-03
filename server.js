const express = require("express");
const app = express();

app.use(express.json()); 

app.post("/students", (req, res) => {
  const data = req.body;

  console.log(data);

  res.send("Student received!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});