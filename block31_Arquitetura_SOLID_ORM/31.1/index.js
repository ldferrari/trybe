const express = require("express");
const app = express();
const plantsModule = require("./plants.js");

app.get("/plants", (_req, res) => {
  const plants = plantsModule.getPlants();
  res.send(plants);
});

app.get("/plant/:id", (req, res) => {
  const { id } = req.params;
  const idFormat = parseInt(id);
  const plant = plantsModule.getPlantById(idFormat);
  res.send(plant);
});

app.delete("/plant/:id", (req, res) => {
  const { id } = req.params;
  const idFormat = parseInt(id);
  const plant = plantsModule.removePlantById(idFormat);
  res.send(plant);
});

app.use("*", (_req, res) => {
  res.send("error");
});

app.listen(3001, function() {
  console.log("Ouvindo a porta 3001!");
});
