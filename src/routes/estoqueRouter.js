const router = require("express").Router();
const estoqueController = require("../controllers/estoqueController")

router.route("/estoque/create").post((req, res) => estoqueController.create(req, res));

router.route("/estoque").get((req, res) => estoqueController.getAll(req, res));

module.exports = router;