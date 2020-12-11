require('dotenv').config();
const express = require("express");
morgan = require('morgan');

const app = express();

// morgan third-party middleware
// app.use(morgan("tiny"));
app.use(morgan("dev"));

// Custom Middleware
app.use((req, res, next) => {
  console.log("Custom middleware executed!");

  // next function required to tell the middleware what to do after running
  next();
});


// Route to GET ALL restaurants
app.get("/api/v1/restaurants", (req, res) => {
  console.log("Get all restaurants endpoint");
  res.status(200).json({
    status: "success",
    data: {
      restaurant: ["McDonalds", "Nandos"]
    }    
  });
});

// Route to GET a restaurant by ID
app.get("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: {
      response: req.params
    }    
  });
});

// Route to GET a restaurant by ID
app.post("/api/v1/restaurants/", (req, res) => {});

// port defaults to 3001 if PORT not provided by '.env'
const port = process.env.PORT || 3001;

// Port set to 3005 to avoid conflict with react app on 3000
// Second arg is a callback function
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});