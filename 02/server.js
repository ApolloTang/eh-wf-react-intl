const path = require('path')

const express = require('express')
const app = express()

const compression = require('compression')

// middleware - compression comes first
app.use(compression())

// middlewares - serve static assets
app.use(express.static(path.join(__dirname, 'dist')))

// routes - send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res){
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// start server
const PORT = process.env.PORT || 8080
app.listen(PORT, function(){
  console.log('Production express server running at http://localhost:' + PORT)
})

