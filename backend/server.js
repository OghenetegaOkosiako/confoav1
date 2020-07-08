const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("MongoBD database connected!");
  })
  .on("error", (error) => console.log("error"));
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

const users = new Schema({
  name: String,
  course: String,
});

const person = mongoose.model("users", users);

const firstPerson = new person({
  name: "Tega",
  course: "Billionaire",
});

firstPerson.save();
