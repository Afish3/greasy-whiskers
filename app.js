const express = require('express');
const fetch = require('node-fetch');
const ExpressError = require('./expressError');

const app = express();

app.use('/',express.static(__dirname));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html");
});

app.get('/proxy-image', async (req, res) => {
  const imageUrl = req.query.url;
  
  if (!imageUrl) {
    return res.status(400).send('No image URL provided');
  }

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const contentType = response.headers.get('content-type');
    res.setHeader('Content-Type', contentType);
    
    response.body.pipe(res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error fetching image');
  }
});

// 404 handler
app.use(function (req, res, next) {
    return next(new ExpressError("Not Found", 404));
});
  
// generic error handler
app.use(function (err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
  
    // set the status and alert the user
    return res.status(status).json({
      error: {
        message: err.message,
        status: status
      }
    });
});

app.listen(3000, () => {
  console.log("Server running on port 3000")
});
