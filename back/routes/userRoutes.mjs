import express from 'express'
import { UserController } from '../controllers/userController.mjs';
export const userRouter = express.Router();

//!:::::::::::::: USER ROUTES :::::::::::::: !//

//* CREATE USER [REGISTER] *//
userRouter.post("/register", UserController.create)

//* LOGIN *//
userRouter.post("/verify", UserController.verify)

//* GET ALL THE USERS *//
userRouter.get("/", UserController.getAll)

//! GET BY EMAIL [DEV-ONLY]
userRouter.post("/:email", UserController.getByEmail);

 