// src/Routers/index.js
import { Router } from 'express';
import CustomerService from '../services/customer.service.js';
import authenticateMiddleware from '../../auth/middleware/auth.middleware.js';


const router = Router();

// Define your routes here
router.get('/', authenticateMiddleware, CustomerService.GetCustomerByTenant)
router.post('/', authenticateMiddleware, CustomerService.PostCustomer)

// router.get('/seed/tenant', insertTenants)

export default router;