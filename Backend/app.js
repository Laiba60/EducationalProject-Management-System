import express from "express";
import cors from cors;
import {config} from "dotenv";
import {errorMiddleware} from "./middlewares/error.js";
config();
const app = express();

app.use(cors({
    origin: [process.env.Frontend_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
connectDB();
app(errorMiddleware)
export default app;