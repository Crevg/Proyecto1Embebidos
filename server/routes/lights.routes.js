const router = require('express').Router();
const controller = require("../controllers/lights.controller");

/*Get*/
router.get("/signalsStatus", controller.signalsStatus);

/*Put*/
router.put("/updateSignal", controller.updateSignal);


module.exports = router;