import { Request, Response } from "express";
import { Blogs } from "../models/blogs.model";

export const createPost = async (req:Request, res: Response) => {
    try{
        const {title, content, username, tags} = req.body;

        const result = await Blogs.create({title, content, username, tags});
        res.status(200).json({
            message: "Post Created Successfully",
            data: result
        })
    }
    catch(error) {
        res.status(400).json({
            message: "Error creating Post"
        })
    }
}


export const fetchAllPosts = async (req:Request, res: Response) => {
    try{
        const result = await Blogs.find();
        res.status(200).json({
            message: "Posts Fetched Successfully",
            data: result
        })
    }
    catch(error) {
        res.status(400).json({
            message: "Error fetching Posts"
        })
    }
}


export const deletePost = async (req:Request, res: Response) => {
    try{
        const id = req.params.id;
        const result = await Blogs.findByIdAndDelete(id);
        res.status(200).json({
            message: "Post Deleted Successfully",
            data: result
        })
    }
    catch(error) {
        res.status(400).json({
            message: "Error Deleting Post"
        })
    }
}