const express = require("express");
const router = express.Router();

//Home Page
router.get("/Home", (req,res) => res.render("index/home"));

module.exports = router;