const express = require("express");
const animalController = require("../controllers/animalController");
const router = express.Router();

router.route("/").get(animalController.all).post(animalController.create)

module.exports = router;