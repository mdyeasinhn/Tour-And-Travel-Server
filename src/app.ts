import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import userRouter from "./module/User/user.route";
import { StatusCodes } from "http-status-codes";
import tourRouter from "./module/Tour/tour.route";
const app: Application = express();
// const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/tour', tourRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "server Live",
  });
});

//console.log(process.cwd());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
//  console.log('error from app.ts', err)
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ success: false, message: err.message, error: err })
})

export default app;
