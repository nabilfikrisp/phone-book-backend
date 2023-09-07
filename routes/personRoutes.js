const express = require("express");
const router = express.Router();
const personController = require("../controllers/personController");

router.get("/", personController.index);
router.get("/:id", personController.show);
// router.get("/info", personController.info);
router.delete("/:id", personController.delete);
router.post("/", personController.create);

module.exports = router;
