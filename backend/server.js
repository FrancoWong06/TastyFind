const express = require('express')
const cors = require('cors')
const mongoose = require("./db");
const userRoutes = require("./routes/userRoutes");

const app =express()

app.use(express.json())
app.use(cors())

app.get("/", (_, res) => {
  res.send("Server");
});

app.use("", userRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});