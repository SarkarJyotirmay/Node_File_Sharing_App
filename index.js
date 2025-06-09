const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/fileSharing.route.js");
const mongoose = require("mongoose");
const cors = require("cors")

dotenv.config();

// DB connection
console.log(process.env.ATLAS_DB_CONNECTION_STRING);

mongoose
  .connect(process.env.ATLAS_DB_CONNECTION_STRING)
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("Error in conecting DB", err));

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
// app.use(cors({
//   origin: process.env.FRONT_END_URL, // or your frontend URL
//   credentials: true
// }))
app.use(cors("*"))

// route middleware
app.use("/api/v1/file",router);



const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is up and running on port", PORT));
