const router = require("express").Router();
const postRoutes = require("./posts");
const projectRoutes = require("./projects");
const userRoutes = require("./users");

// Post routes
router.use(postRoutes);
router.use(projectRoutes);
router.use(userRoutes);

module.exports = router;
