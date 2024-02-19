const router = require('express').Router();

//animal
const animalRouter = require('./animalRouter');

router.use("/", animalRouter);

//estoque
const estoqueRouter = require('./estoqueRouter');

router.use("/", estoqueRouter);

module.exports = router;