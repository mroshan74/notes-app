const express = require('express')
const router = express.Router()
var multer = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname.replace(/\s+/g, ""))
  },
})
var upload = multer({ storage: storage })

const categoriesController = require('../app/controllers/categoriesController')
const notesController = require('../app/controllers/notesController')
const usersController = require('../app/controllers/usersController')

const { authenticateUser } = require('../app/middlewares/authentication')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account',authenticateUser, usersController.account)

router.get('/categories', authenticateUser, categoriesController.list)
router.post('/categories', authenticateUser, categoriesController.create)
router.get('/categories/:id', authenticateUser, categoriesController.show)
router.put('/categories/:id', authenticateUser, categoriesController.update)
router.delete('/categories/:id', authenticateUser, categoriesController.destroy)

router.get('/notes', authenticateUser, notesController.list)
router.post('/notes', authenticateUser, upload.array('pic',5), notesController.create)
router.get('/notes/:id', authenticateUser, notesController.show)
router.put('/notes/:id', authenticateUser, notesController.update)
router.delete('/notes/:id', authenticateUser, notesController.destroy)


module.exports = router
