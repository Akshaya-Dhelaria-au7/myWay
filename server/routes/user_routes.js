var router = require('express').Router();
var controller = require('../controller/user_controller')
var {signup,login} = require('../validation/userValidation')
var validationResults = require('../utils/validation')
var userAuth = require('../middleware/auth')


router.post('/signup' , signup , validationResults , controller.signup)
router.post('/verifyotp' , controller.verifyOtp)
router.post('/login' , login , validationResults , controller.login)
router.post('/forgot' , controller.forgetPassword)
router.get('/logout' , userAuth , controller.logout)

module.exports = router;