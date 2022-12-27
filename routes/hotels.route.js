import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotelById, getHotels, updateHotel } from "../controllers/hotel.controller.js";

const router = express.Router();

// create
router.route("/")
  .get(getHotels)
  .post(createHotel);

// update
router.route("/:id")
  .get(getHotelById)
  .put(updateHotel)
  .delete(deleteHotel)

export default router;
