const router = require("express").Router();
const postRoutes = require("./posts");
const projectRoutes = require("./projects");

// Post routes
router.use(postRoutes);
router.use(projectRoutes);

module.exports = router;
