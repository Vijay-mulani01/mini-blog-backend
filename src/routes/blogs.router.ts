import express from 'express';
import { createPost, deletePost, fetchAllPosts } from '../controllers/blogs.controller';

const blogsRouter = express.Router();

blogsRouter.post('/', createPost);

blogsRouter.get('/', fetchAllPosts);

blogsRouter.delete('/:id', deletePost);

export default blogsRouter;