import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

// create
export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
      res.status(200).json(savedRoom);
      
  } catch (err) {
    next(err);
  }
};


// update
export const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (err) {
      next(err);
    }
};
  

// delete
export const deleteRoom = async (req, res, next) => {
    try {
      const deletedRoom = await Room.findByIdAndDelete(req.params.id);
      res.status(200).json("Room deleted successfully");
    } catch (err) {
      next(err);
    }
};
  
// get single room by id
export const getRoomById = async (req, res, next) => {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (err) {
      next(err);
    }
};
  
//   get all hotels
export const getRooms = async (req, res, next) => {
    try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
    } catch (err) {
      next(err);
    }
  };