const router = require('express').Router();
const controller = require('../controllers/cam.controller');

/* Post */ 
router.post("/photo", controller.takePicture);
//router.post("/login", controller.signup);


module.exports = router;