// src/Routers/index.js
import { Router } from 'express';
import { Login, SingUp } from '../services/Auth.service.js';


const router = Router();

// Define your routes here
router.post('/', Login)
router.post('/register', SingUp)

// router.get('/seed/tenant', insertTenants)

export default router;