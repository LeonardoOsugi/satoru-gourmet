import {Router} from "express";
import { postCarts } from "../controllers/carts-controllers.js";

const cartsRouter = Router();

cartsRouter.post("/carts", postCarts)

export {cartsRouter};