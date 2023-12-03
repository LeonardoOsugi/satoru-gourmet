import express from "express";
import cors from "cors";

const app = express();

app.use(cors()).
use(express.json())

app.listen(5000, () => console.log("Server running in port 5000"))