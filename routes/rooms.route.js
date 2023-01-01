import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getRoomById,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.controller.js";

const router = express.Router();

router.put("/availability/:id",updateRoomAvailability )

router.get("/", getRooms);
router.post("/:hotelId", verifyAdmin, createRoom);
router.delete( "/:id/:hotelId",verifyAdmin, deleteRoom);

router
  .route("/:id")
  .get(getRoomById)
  .put(verifyAdmin, updateRoom)

export default router;
