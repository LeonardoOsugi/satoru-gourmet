import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { productsRouter } from "./routes/products-router.js";
import { cartsRouter } from "./routes/carts-router.js";

dotenv.config();



const app = express();

app.use(cors()).
use(express.json())
.use(productsRouter)
.use(cartsRouter)


app.listen(5000, () => console.log("Server running in port 5000"))