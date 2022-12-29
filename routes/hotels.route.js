import express from "express";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {
  createHotel,
  deleteHotel,
  getHotelById,
  getHotels,
  getHotelsCountByCity,
  getHotelsCountByType,
  updateHotel,
} from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/count-by-city", getHotelsCountByCity)
router.get("/count-by-type", getHotelsCountByType)

router
  .route("/:id")
  .get(getHotelById)
  .put(verifyAdmin, updateHotel)
  .delete(verifyAdmin, deleteHotel);

router.route("/")
  .get(getHotels)
  .post(verifyAdmin, createHotel);

export default router;
