"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const simulacionDB = require("./data.json");
const bodyParser = require("body-parser");

//Req -> request
//Res -> Response

app.options("*", cors());
app.use(cors());
app.use(bodyParser.json());
app.get("/usuarios", function (req, res) {
  const { nombre, ciudad } = req.query;
  console.log(nombre, ciudad);

  const usuarioEncontrado = simulacionDB.find(
    (simulacio) => simulacio.nombre == nombre
  );

  usuarioEncontrado
    ? res.send(`{"res": "Usuario encontrado"}`)
    : res.send(`{"res": "Usuario no encontrado"}`);
});

app.post("/usuarios", (req, res) => {
  //Conectar a DB
  //Organizar informacion
  //Enviar informacion
  console.log(req.body);
  res.send(`{"data": "Respues Bien :D"}`);
});

app.put("/datos", (req, res) => {});

app.delete("/datos", (req, res) => {});

app.listen(3000);

// C
// R
// U
// D
