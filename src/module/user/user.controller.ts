// ----> req and res manage <----
import { Request, Response } from "express";
import User from "./user.model";

// ----> Create user controller <----
const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;

        const result = await User.create(payload);

        res.json({
            message: "User created successfully",
            data: result,
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "Something went wrong",
            error: error instanceof Error ? error.message : "Unknown error",
        });
        console.error(error); // Logs the full error for debugging
    }
};

// ----> export <----
export const userController = {
    createUser,
};
