import express from 'express';



const bookingRouter = express.Router()

bookingRouter.post('/create-booking', bookingController.createBooking)

export default bookingRouter;