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

router
  .route("/projects/users/:id")
  .get(projectsController.findByUserId)
  .put(projectsController.update)
  .delete(projectsController.remove);

//used for adding a step to an existing project
// Matches with "/api/projects/step/:id"
router
  .route("/projects/step/:id")
  .post(projectsController.addStep);


module.exports = router;
