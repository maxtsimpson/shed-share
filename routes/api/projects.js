const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/projects"
router
  .route("/projects")
  .get(projectsController.findAll)
  .post(projectsController.create);

// Matches with "/api/projects/:id"
router
  .route("/projects/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

// Matches with "/api/projects/user/:id"
router
  .route("/projects/user/:id")
  .get(projectsController.findByUserId)
//   .put(projectsController.update)
//   .delete(projectsController.remove);


module.exports = router;
