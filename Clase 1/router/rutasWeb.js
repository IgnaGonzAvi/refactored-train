const { application } = require("express");
const express = require("express");
const router = express.Router();

router.get('/', (request, response) =>{
    response.render("index", {titulo: "titulo dinámico para la página Index"});
});

// lo exporto para verlo en router
module.exports = router;