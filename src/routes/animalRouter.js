const router = require("express").Router();
const animalController = require("../controllers/animalController")

router.route("/animais/create").post((req, res) => animalController.create(req, res));

module.exports = router;