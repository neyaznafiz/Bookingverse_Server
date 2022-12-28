import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getRoomById,
  getRooms,
  updateRoom,
} from "../controllers/room.controller.js";

const router = express.Router();

router.get("/", getRooms);
router.post("/:hotelId", verifyAdmin, createRoom);

router
  .route("/:id")
  .get(getRoomById)
  .put(verifyAdmin, updateRoom)
  .delete(verifyAdmin, deleteRoom);

export default router;
