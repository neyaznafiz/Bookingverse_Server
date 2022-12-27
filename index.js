import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import usersRouter from "./routes/users.route.js";
import hotelsRouter from "./routes/hotels.route.js";
import roomsRouter from "./routes/rooms.route.js";

const app = express();

const connect = async () => {
  try {
    // mongoose
    await mongoose.connect(process.env.MONGO);
    console.log("Mongoose connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected..!");
});
mongoose.connection.on("connected", () => {
  console.log("MongoDB connected..");
});

// middleware
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong.!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.get("/", (req, res) => {
  res.send("BookingVerse Server is running");
});

app.listen(5000, () => {
  connect();
  console.log("Connect to backend..!");
});
