import express from "express";
import cors from cors;
import {config} from "dotenv";
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