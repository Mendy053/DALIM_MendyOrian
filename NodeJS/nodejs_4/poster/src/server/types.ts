import { Request } from "express";

export interface PostType {
    id?: number,
    title: string,
    description: string
}

export interface ErrorType {
    message: string,
    statusCode: number
}

export type ErrorCatchType = { [key: string]: any, message: string; }  | any

export interface RequestWithPost extends Request {
    newPost?: PostType;
}
