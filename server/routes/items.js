const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemsController");

// Ruta para /api/items?q=:query
router.get("/", itemsController.searchItems);

// Ruta para /api/items/:id
router.get("/:id", itemsController.getItemById);

module.exports = router;
