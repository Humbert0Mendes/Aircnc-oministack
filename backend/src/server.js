const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://humbertodev:humbertodev@cluster0-7lnt7.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
