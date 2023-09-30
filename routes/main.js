const express = require('express');
const router = express.Router();

const mainAppController = require('../controllers/main');

//middleware that are specific to this router

router.get('/signup', mainAppController.getSignup);
router.post('/signup', mainAppController.postSignup);

router.get('/login', mainAppController.getLogin);
router.post('/login', mainAppController.postLogin);

router.get("/", mainAppController.index);


module.exports = router;