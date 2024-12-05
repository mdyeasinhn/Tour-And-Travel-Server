import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRouter from "./module/user/user.route";
const app: Application = express();
const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter)

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: true,
    message: "server Live",
  });
});

console.log(process.cwd());

export default app;
