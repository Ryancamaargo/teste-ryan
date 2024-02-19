const Animal = require('../models/animal');

const animalController = {
  create: async (req, res) => {

    try {

      console.log(req.body)

      const animalCreate = {
        tipo: req.body.tipo,
        quantidade_racao: req.body.quantidade_racao
      }

      console.log(Animal)

      const response = await Animal.create(animalCreate)

      return res.status(201).json({ response, msg: "registro inserido no animal" });

    } catch (err) {
      console.log(err);
      return res.status(400).json({ msg: "erro ao criar o regristro: " + err });
    }
  },
};


module.exports = animalController;