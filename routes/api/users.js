const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router
  .route("/users")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:id"
// i.e. to hit this route use: /api/users/id?id=5f1eaf18ddadac05c4e8cc34
router
  .route("/users/:id")
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);


module.exports = router;
