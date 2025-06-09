const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/fileSharing.route.js");
const mongoose = require("mongoose");
const cors = require("cors")

dotenv.config();

// DB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/file_sharing_app")
  .then(() => console.log("DB connected successfully"))
  .catch((err) => console.log("Error in conecting DB", err));

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({
  origin: "http://localhost:5173", // or your frontend URL
  credentials: true
}))

// route middleware
app.use("/api/v1/file",router);



const PORT = process.env.PORT;
app.listen(PORT, () => console.log("Server is up and running on port", PORT));
