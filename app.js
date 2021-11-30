const express = require("express");
const pokemonRouter = require("./pokemons")

const PORT = 4000;

// Importing all the pokemon for our data file
const allPokemon = require("./data");

const app = express();
app.use(express.json());
app.use("/", pokemonRouter);

// -- Define your route listeners here! --

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
