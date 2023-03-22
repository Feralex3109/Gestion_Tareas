const express = require('express');
const morgan = require("morgan")
const cors = require("cors")
const app = express()


app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: False }));
app.use("/api/employees", require("./routes/employees.routes"));

module.exports = app;