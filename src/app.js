const express = require("express");
const app = express();
const jogosRoutes = require("./routes/router");

app.use(express.json());
app.use("/jogos", jogosRoutes);

module.exports = app;