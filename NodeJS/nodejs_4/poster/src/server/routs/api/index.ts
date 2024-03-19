import express, { Router } from "express";
import {getAllPostsController} from "./methods/get";
import POST from "./methods/post";
import DELETE from "./methods/delete";

const router: Router = express.Router();

router.get("/get_all_posts", getAllPostsController);
router.use("/", POST);
router.use("/", DELETE);

export default router;