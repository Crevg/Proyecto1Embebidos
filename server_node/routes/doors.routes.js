const router = require('express').Router();
const controller = require("../controllers/doors.controller");

/*Get */
router.get("/signalsStatus", controller.signalsStatus);

/* Post */
router.get("/readSignal", controller.readSignal);


module.exports = router;