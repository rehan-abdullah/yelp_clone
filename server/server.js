require('dotenv').config()
const express = require("express");

const app = express()

// port defaults to 3001 if PORT not provided by '.env'
const port = process.env.PORT || 3001;

// Port set to 3005 to avoid conflict with react app on 3000
// Second arg is a callback function
app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});