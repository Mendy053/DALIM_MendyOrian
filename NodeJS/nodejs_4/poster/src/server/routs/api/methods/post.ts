import express, { Router, Response, NextFunction } from "express";
import { Error500 } from "../../../../helpers";
import { ErrorCatchType, RequestWithPost } from "../../../types";
import { postValidator } from "../../../validators";
import { addNewPost } from "../../../utils";
const router: Router = express.Router();

router.post("/add_post", postValidator, async (request: RequestWithPost, response: Response, next: NextFunction) => {
    try {
        const isAdded: boolean = await addNewPost(request.newPost!);
        if (isAdded) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "post added!"
                });
        }
    } catch (error: ErrorCatchType) {
        next(Error500(error));
    }
});

export default router;
