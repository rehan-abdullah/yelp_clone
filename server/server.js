require('dotenv').config();
const express = require("express");
const db = require('./db')
// morgan = require('morgan');

const app = express();

// Middleware
app.use(express.json());

// morgan third-party middleware
// app.use(morgan("tiny"));
// app.use(morgan("dev"));

// Route to GET ALL restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  // Try-catch block for async functions/promises
  try {
    const results = await db.query('SELECT * FROM restaurants');

    console.log(results.rows);

    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        restaurants: results.rows
      }    
    });
  } catch (err) {
    console.log(err);
  }
});

// Route to GET a restaurant by ID
app.get("/api/v1/restaurants/:id", async (req, res) => {
  const id = req.params.id;

  try {
    // Parameterized query to prevent SQL injection attacks
    const results = await db.query("SELECT * FROM restaurants where id = $1", [id]);

    console.log(results.rows[0]);
    if (results.rows.length === 0) {
      res.status(404).json({
        status: "Not Found!",
        message: "No restaurants found matching the given id."
      });
    } else {
      res.status(200).json({
        status: "success",
        data: {
          restaurant: results.rows[0]  // Pulls single restaurant data out of response array
        }    
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Route to CREATE a restaurant
app.post("/api/v1/restaurants/", async (req, res) => {

  try{
    const results = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *", [
      req.body.name,
      req.body.location,
      req.body.price_range
    ]);

    console.log(results.rows[0]);

    res.status(201).json({
      status: "success",
      data: {
        restaurant: results.rows[0]
      }    
    });
  } catch (err) {
    console.log(err);
  }
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