require('dotenv').config();
const express = require("express");
morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());

// morgan third-party middleware
// app.use(morgan("tiny"));
// app.use(morgan("dev"));

// Route to GET ALL restaurants
app.get("/api/v1/restaurants", (req, res) => {
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
      restaurant: "Pizza Hut"
    }    
  });
});

// Route to CREATE a restaurant
app.post("/api/v1/restaurants/", (req, res) => {
  console.log(req.body);
  res.status(201).json({
    status: "success",
    data: {
      id: 543,
      name: req.body.name,
      location: req.body.location,
      price_range: req.body.price_range
    }    
  });
});

// Route to UPDATE a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      id: req.params.id,
      name: req.body.name,
      location: req.body.location,
      price_range: req.body.price_range
    }    
  });
});

// Route to DELETE a restaurant by ID
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success",
  })
});

// port defaults to 3001 if PORT not provided by '.env'
const port = process.env.PORT || 3001;

// Port set to 3005 to avoid conflict with react app on 3000
// Second arg is a callback function
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});