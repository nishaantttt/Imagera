import "dotenv/config"; // This MUST be the first line
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 4000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Initialize Database Connection
await connectDB();

// API Routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));