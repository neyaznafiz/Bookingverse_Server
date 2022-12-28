import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotelById, getHotels, updateHotel } from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();


router.route("/")
  .get(getHotels)
  .post(verifyAdmin, createHotel);

router.route("/:id")
  .get(getHotelById)
  .put(verifyAdmin, updateHotel)
  .delete(verifyAdmin, deleteHotel)

export default router;
