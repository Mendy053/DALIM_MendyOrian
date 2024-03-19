import express, { Router, Request, Response, NextFunction } from "express";
import { deletePost } from "../../../utils";
import { Error500 } from "../../../../helpers";
import { ErrorCatchType } from "../../../types";
const router: Router = express.Router();

router.delete("/delete_post", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { id } = request.body;
        if (await deletePost(+id)) {
            response
                .status(200)
                .json({
                    success: true
                });
        }
        response
            .status(404)
            .json({
                success: false,
                message: "Nothing deleted"
            });
    } catch (error: ErrorCatchType) {
        next(Error500(error));
    }
});

export default router;
