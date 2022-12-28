import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/check-authentication", verifyToken, (req, res, next) => {
//   res.send("Hello, you are logged in!");
// });

// router.get("/check-user/:id", verifyUser, (req, res, next) => {
//   res.send("Hello, you are logged in and you can delete you account");
// });

// router.get("/check-admin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all accounts");
// });

router.route("/").get(verifyAdmin, getUsers);

router
  .route("/:id")
  .get(verifyUser, getUserById)
  .put( verifyUser, updateUser)
  .delete(verifyUser, deleteUser);

export default router;
