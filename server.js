const express = require("express");
const path = require("path");
const connection = require("./config/mongo.js")
const session = require("express-session");
const passport = require('./config/passport');
const routes = require("./routes");
const compression = require('compression')
const cors = require('cors')


const app = express();
const PORT = process.env.PORT || 3001;

//use compression 
app.use(compression({}))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("shed-share/build"));
}


app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// app.all('/*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// Add routes, both API and view
app.use("/api", routes);

app.use(cors());

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./shed-share/build/index.html"));
});

// Connect to the Mongo DB then start the API server
connection.then(() => {
  app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
})
