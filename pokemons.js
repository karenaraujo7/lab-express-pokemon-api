const express = require("express");
const pokemonRouter = express.Router();
const allPokemon = require("./data");

// Rota que mostra todos os pokemons 
pokemonRouter.get("/pokemon", (req, res) => {
    return res.status(200).json({...allPokemon});
});

// Rota que busca um pokemon pelo seu id
pokemonRouter.get("/pokemon/:id", (req, res) => {
    const pokemon = allPokemon.find((currentPokemon) => {
        return currentPokemon.id == req.params.id;
    });
    return res.status(200).json({...pokemon});
});

// Rota que busca pelo nome do pokemon
pokemonRouter.get("/search/:name", (req, res) => {
    const pokemon = allPokemon.find((currentPokemon) => {
        return currentPokemon.name == req.params.name;
    });
    return res.status(200).json({...pokemon});
})

module.exports = pokemonRouter;