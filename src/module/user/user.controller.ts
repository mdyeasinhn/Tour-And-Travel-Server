// ----> req and res manage <----
import { Request, Response } from "express";
import User from "./user.model";
import { userService } from "./user.service";


// ----> Create user controller <----
const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;

        const result = userService.createUser(payload)

        res.json({
            status: true,
            message: "User created successfully",
            data: result,
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
      
    }
};
// ----> Get users controller <----
const getUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUser()
        res.json({
            message: "Users geting successfully",
             result,
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
      
    }
};
// ----> Get single user controller <----
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const result = await userService.getSingleUser(userId)
        res.json({
            message: "User geting successfully",
             result,
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
    }
};
// ----> Update user controller <----
const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const body = req.body

        const result = await userService.updateUser(userId, body)
        res.json({
            message: "User updated successfully",
             result,
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
    }
};
// ----> Delete user controller <----

const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
             await userService.deleteUser(userId)
        res.json({
            message: "User deleted successfully",
             result:{},
        });

    } catch (error) {
        res.json({
            status: false,
            message: "Something went wrong",
            error,
        });
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
