import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postsRoutes from "./route/posts.js";
import userRoutes from "./route/users.js";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

const app = express();
dotenv.config();

app.set('trust proxy', 1);

const apiLimiter = rateLimit({
   windowsMs: 15 * 60 * 1000,
   max: 100,
   message: "Too many requests from this IP, please try again after 15 minutes",
   standardHeaders: true,
   legacyHeaders: false,
});

app.use(cors());
app.use('/posts', apiLimiter);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/posts", postsRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

