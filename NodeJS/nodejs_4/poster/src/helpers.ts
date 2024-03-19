import { ErrorCatchType, ErrorType } from "./server/types";

export const Error500 = (error: ErrorCatchType): ErrorType => ({
    message: error.message,
    statusCode: 500
});

export const Error404: ErrorType = {
    message: "Body, It's not found!..",
    statusCode: 404
};