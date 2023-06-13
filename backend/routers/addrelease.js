const express = require("express");
const releaseController = require("../controllers/addrelease");
const { authenticate } = require("../middleware");
const router = express.Router();

router.get("/", releaseController.getAllReleases);

router.get("/:id", releaseController.getReleaseById);

router.post("/", releaseController.addRelease);

router.put("/:id", releaseController.updateReleaseById);

router.delete("/:first_name", releaseController.deleteReleaseById);

module.exports = router;

