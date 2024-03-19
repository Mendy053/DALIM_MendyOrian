import { NextFunction, Request, Response } from "express";
import { ErrorCatchType, PostType, RequestWithPost } from "./types";
import { Error500 } from "../helpers";

function isValidPost(post: any): boolean {
    return (
        post.title &&
        typeof post.title === "string" &&
        post.description &&
        typeof post.description === "string"
    );
}

export function postValidator(request: RequestWithPost, response: Response, next: NextFunction) {
    try {
        const newPost: any = {
            title: request.body.title,
            description: request.body.description
        };

        if (isValidPost(newPost)) {
            request.newPost = newPost as PostType;
            next();
        } else {
            next(Error500({ message: "The post is not valid" }));
        }
    } catch (error: ErrorCatchType) {
        next(Error500(error));
    }
}
