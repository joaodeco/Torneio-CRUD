const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose
    .connect("mongodb://localhost:27017/Crud Jogos").then(() => console.log("Conectado ao MongoDB")).catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));

const esquemaJogo = new mongoose.Schema({
    nome: { type: String, required: true },
    ano: { type: String, required: true },
    genero: { type: String, required: true },
    });

const Jogo = mongoose.model("Jogo", esquemaJogo);
