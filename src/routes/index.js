const { Router } = require('express')

const UserController = require('../controllers/UserController')
const SessionController = require('../controllers/Login')
const ProductController = require('../controllers/ProductController')
const CartController = require('../controllers/CartController')

const { authenticate } = require('../middlewares')

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Olá Mundo')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)
routes.get('/users/:user_id', UserController.getUserById)

routes.post('/sessions', SessionController.createSession)

routes.post('/products/:user_id', authenticate, ProductController.createProduct)
routes.get('/:user_id/products', ProductController.getUserProducts)
routes.patch('/products/:user_id/:product_id', authenticate, ProductController.updateProduct)
routes.delete('/products/:user_id/:product_id', authenticate, ProductController.deleteProduct)

routes.get('/products', ProductController.getProducts)
routes.get('/products/:product_id', ProductController.getProductById)

routes.post('/carts/:user_id', authenticate, CartController.createCart)
routes.get('/carts/:user_id', authenticate, CartController.getUserCarts)
routes.get('/carts/:user_id/:cart_id', authenticate, CartController.getCart)

module.exports = routes 