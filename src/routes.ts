import { Request, Response } from "express";
import createUser from "./service/CreateUser";

export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    name: "vinicius",
    email: "vinicius@gmail.com",
    password: "123456",
    techs: ["react", "react native", { title: "Javascript", experience: 100 }],
  });

  return res.json({ message: "Hello World" });
}
