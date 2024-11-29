const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const indexfile = require("./router/index.js");

// DOTENV CONFIGURATION
dotenv.config();

// DATABASE CONFIGURATION
// connectDB();

// REST OBJ
const app = express();

//******** MIDDLEWARE *******/
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json());

app.use("/", indexfile);


const dbURI = `mongodb+srv://name:password@cluster0.0tq4xsw.mongodb.net/real_easte_mangment?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(1818);
    console.log("MongoDB connected... You are live Now !!!!!!!!!!");
  })
  .catch((err) => console.log(err));
