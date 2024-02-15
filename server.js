require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middlewares/errorMiddleware");
const cors = require("cors"); // To setup CORS(Cross site origin) Policy

const app = express();

const Mongo_URL = process.env.Mongo_URL; // To Use Mongo Url variable in .env file

const PORT = process.env.PORT || 3000; // To Use PORT variable in .env file

//Middleware
app.use(cors()); // To allow any IP/Domain to access to Backend
app.use(express.json()); //So, now our application can use json datatype
app.use(express.urlencoded({ extended: false })); //To use FORM instead of json

app.use("/api/product", productRoute); // To use productRoute

//routes
app.get("/", (req, res) => {
  res.send("Hello Node API");
});

app.get("/blogs", (req, res) => {
  res.send("Hello Blogs, I am UAK.");
});

app.use(errorMiddleware); // Custom Error Middleware

mongoose.set("strictQuery", false);
mongoose
  .connect(Mongo_URL)
  .then(() => {
    console.log("Connected to MongoDB Database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
