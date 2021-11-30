const express = require("express");



allPokemon.get("/pokemon", (req, res) => {
    return res.status(200).json({ ...allPokemon })
})
allPokemon.get("/pokemon/id", (req, res) => {
    return res.status(200).json({ ...allPokemon })
})

allPokemon.get('/pokemon/:types', (req, res,) => {
    return res.send(req.params);
});

module.exports  =  allPokemon;