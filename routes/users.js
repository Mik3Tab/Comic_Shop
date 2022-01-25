const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController')
const { authentication } = require('../middlewares/authentication');

router.post('/', UserController.register)
router.post('/login',UserController.login)
router.delete('/logout',authentication, UserController.logout)
router.get('/', authentication, UserController.getUserByIdAuth)
router.put('/:id', UserController.update)
router.delete('/user/:id', UserController.delete)
router.delete('/deletemyself', authentication, UserController.deletemyself)

module.exports = router;