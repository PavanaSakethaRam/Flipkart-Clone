import express from 'express';
import { signup, signin } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/product-controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', signin);

router.get('/products', getProducts);
router.get('/products/:id', getProductById);

export default router;