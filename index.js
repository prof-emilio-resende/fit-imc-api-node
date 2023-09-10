import express from "express";
import cors from "cors";

import { Person } from "./person.js";

const app = express();
const port = 3000;

app.use(express.json(), cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/table", (req, res) => {
  const table = {
    0: "Magreza",
    18.5: "Normal",
    24.9: "Sobrepeso",
    99: "Obesidade",
  };
  res.send(JSON.stringify(table));
});

app.post("/imc/calculate", (req, res) => {
  const { height, weight } = req.body;

  const person = new Person(height, weight).withImc().withImcDescription();

  res.send(JSON.stringify(person));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
