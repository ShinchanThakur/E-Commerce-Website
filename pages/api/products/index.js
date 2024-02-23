import { createRouter } from 'next-connect';
import dbConnect from '@/backend/config/dbConnect';
import { newProduct } from '@/backend/controllers/productController';

const router = createRouter();
dbConnect();
router.post(newProduct);

export default router.handler();