import express, { Router, Request, Response, NextFunction } from "express";
import { ErrorCatchType, ErrorType, PostType } from "../../../types";
import { Error500 } from "../../../../helpers";
import { getAllPosts } from "../../../utils";
const router: Router = express.Router();


export  async function getAllPostsController(request: Request, response: Response, next: NextFunction){
    try {
        response
            .status(200)
            .json(await getAllPosts());
    } catch (error: ErrorCatchType) {
        next(Error500(error));
    }

}


