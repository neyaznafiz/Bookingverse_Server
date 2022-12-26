import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
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
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/rooms", roomsRouter);

app.get("/", (req, res) => {
  res.send("BookingVerse Server is running");
});

app.listen(5000, () => {
  connect();
  console.log("Connect to backend..!");
});
