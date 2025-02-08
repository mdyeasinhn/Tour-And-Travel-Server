// ----> req and res manage <----
import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";
import catchAsync from "../../utils/catchAsync";


// ----> Create user controller <----
const createUser = catchAsync(async (req, res) => {
    const payload = req.body
  
    const result = await userService.createUser(payload)

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      message: 'User created successfully',
      data: result,
    })
  })

// ----> Get users controller <----
const getUser = catchAsync(async(req, res) => {

        const result = await userService.getUser()
        sendResponse(res, {
            statusCode: StatusCodes.OK,
            message: 'Users geting successfully',
            data: result,
        })

    })
// ----> Get single user controller <----
const getSingleUser = catchAsync(async (req, res) => {
    const userId = req.params.userId
  
    const result = await userService.getSingleUser(userId)
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User getting successfully',
      data: result,
    })
  })
// ----> Update user controller <----
const updateUser = catchAsync(async (req, res) => {
    const userId = req.params.userId
    const body = req.body
    const result = await userService.updateUser(userId, body)
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'User updated successfully',
      data: result,
    })
  })
// ----> Delete user controller <----

const deleteUser = catchAsync(async (req, res) => {
    const userId = req.params.userId
    await userService.deleteUser(userId)
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      message: 'user deleted successfully',
      data: {},
    })
  })

// ----> export <----
export const userController = {
    createUser,
    getUser,
    getSingleUser,
    updateUser,
    deleteUser
};
