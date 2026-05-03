const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const studentRoutes = require("./routes/studentRoutes");
const swaggerDocs = require("./utils/swagger");

app.use(express.json());

connectDB();

app.use("/auth", authRoutes);
app.use("/students", studentRoutes);

swaggerDocs(app);

app.get("/", (req, res) => {
  res.send("Student API is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));