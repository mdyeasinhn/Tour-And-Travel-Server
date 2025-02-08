// ----> req and res manage <----
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";


// ----> Create user controller <----
const createUser = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const payload = req.body;

        const result = userService.createUser(payload)

        sendResponse(res, {
            statusCode: StatusCodes.CREATED,
            message: 'User created successfully',
            data: result,
        })
    } catch (error) {
        next(error)
    }

};

// ----> Get users controller <----
const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.getUser()
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            message: 'Users geting successfully',
            data: result,
        })

    } catch (error) {

        next(error)
    }
};
// ----> Get single user controller <----
const getSingleUser = async (req: Request, res: Response,  next: NextFunction) => {
    try {
        const userId = req.params.id
        const result = await userService.getSingleUser(userId)
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            message: 'User geting successfully',
            data: result,
        })

    } catch (error) {
       next(error)
    }
};
// ----> Update user controller <----
const updateUser = async (req: Request, res: Response,  next: NextFunction) => {
    try {
        const userId = req.params.userId;
        const body = req.body

        const result = await userService.updateUser(userId, body)
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            message: 'User updated successfully',
            data: result,
        })

    } catch (error) {
      next(error)
    }
};
// ----> Delete user controller <----

const deleteUser = async (req: Request, res:Response ,  next: NextFunction) => {
    try {
        const userId = req.params.userId;
        await userService.deleteUser(userId)
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            message: 'user deleted successfully',
            data: {},
        })

    } catch (error) {
   next(error)
    }
};

// ----> export <----
export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
};
