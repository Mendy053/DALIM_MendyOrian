import express, { Express, NextFunction, Request, Response } from "express";
import ApiRouts from "./server/routs/api";
import { ErrorType } from "./server/types";
import { Error404 } from "./helpers";

const app: Express = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = 4344;

app.use((request: Request, response: Response, next: NextFunction) => {
    if (request.body) { console.log(request.body); }
    next();
});

app.use("/api", ApiRouts);

app.use("*", (request: Request, response: Response, next: NextFunction) => {
    next(Error404);
});

app.use((error: ErrorType, request: Request, response: Response, next: NextFunction): void => {
    console.error(error);
    
    response
        .status(error.statusCode)
        .json({
            success: false,
            message: error.message
        });
});

app.listen(PORT, () => {
    console.log(`${new Date().toDateString()}, ${new Date().toTimeString().split(" ")[0]}`);
    console.log(`Server is running on port: ${PORT}`);
});
