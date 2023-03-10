import { Request, Response } from "express";
import * as coffeeServices from "../services/coffee_services";

export const getCoffee = async (
  req: Request<object, object, object, { coffeeName: string | undefined }>,
  res: Response
) => {
  const  coffeeName  = req.query.coffeeName;
  const coffee = coffeeServices.getCoffee(coffeeName);
  res.json(coffee).status(200);
};
    