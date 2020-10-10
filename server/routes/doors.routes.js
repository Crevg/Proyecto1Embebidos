const router = require('express').Router();
const controller = require("../controllers/doors.controller");

/*Get */
router.get("/signalsStatus", controller.signalsStatus);

/* Put */
router.get("/updateSignal", controller.updateSignal);


module.exports = router;