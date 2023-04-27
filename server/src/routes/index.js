const EBookController = require("../controllers/ebook.controllers");

const router = require("express").Router();

router.get("/", EBookController.getEBooks)

module.exports = router