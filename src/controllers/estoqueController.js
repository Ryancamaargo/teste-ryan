const { Estoque: EstoqueModel } = require('../models/estoque');

const estoqueController = {
  create: async (req, res) => {
    try {

      const estoqueCreate = {
        data: now(),
        tipo: req.body.tipo,
        quantidade: req.body.quantidade
      }

      const response = await estoqueModel.create(estoqueCreate)

      return res.status(201).json({ response, msg: "registro inserido no estoque" });

    } catch (err) {
      console.log(err);
      return res.status(400).json({ msg: "erro ao criar o regristro: " + err });
    }
  },
  getAll: async (req, res) => {
    try {
      const estoque = await EstoqueModel.find();

      res.json(estoque);
    } catch (error) {
      console.log(error);
    }
  },
};


module.exports = estoqueController;