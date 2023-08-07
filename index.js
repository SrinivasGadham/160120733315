const express = require('express');
const axios = require('axios');
require("dotenv").config();
const body_parser= require('body-parser');
var routes= require('./routes.js');

const app = express();
const PORT = process.env.PORT || 3000;




// POST REST API to register all the user.
app.use('/api',routes);
const NodeCache = require('node-cache');

app.get('/',(req,res)=>{
    res.send("<h1>hello</h1>")
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
