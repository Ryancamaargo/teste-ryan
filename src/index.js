/* const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./db/connection'); 
const routes = require("./routes/router");


app.use("/suinos/", routes);
app.use(cors());
app.use(express.json());
app.listen(4200); */


const express = require("express");
const sequelize = require('./db/connection'); 
const productRoutes = require("./routes/product.routes");
const app = express();


sequelize.sync().then(() => console.log("database connected successfully 🏦"));

app.use(express.json());

app.use("/api/products", productRoutes)

app.listen(5500, () => {
  console.log("Server started on port 3000 🔥");
});