import express from 'express';
import blogsRouter from './blogs.router';

const router = express.Router();

router.use('/posts', blogsRouter);

export default router;