const router = require('express').Router();
const controller = require('../controllers/auth.controller');

/* Post */ 
router.post("/login", controller.login);
//router.post("/login", controller.signup);


module.exports = router;