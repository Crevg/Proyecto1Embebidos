const router = require('express').Router();
const controller = require("../controllers/lights.controller");

/*Get*/
router.get("/signalsStatus", controller.signalsStatus);

/*Put*/
router.put("/updateSignal", controller.updateSignal);
router.put("/turnAllOff", controller.turnAllOff);
router.put("/turnAllOn", controller.turnAllOn);

module.exports = router;