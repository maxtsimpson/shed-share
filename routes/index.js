const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./authRoutes");

// API Routes
router.use(apiRoutes);
router.use(authRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../shed-share/build/index.html"));
});

module.exports = router;
