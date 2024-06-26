import express from 'express'
import { UserController } from '../controllers/userController.mjs';
export const userRouter = express.Router();

//!:::::::::::::: USER ROUTES :::::::::::::: !//

//* CREATE USER [REGISTER] *//
userRouter.post("/register", UserController.create)

//* LOGIN *//
userRouter.post("/login", UserController.verify)

//* GET ALL THE USERS *//
userRouter.get("/", UserController.getAll)

//* UPDATE USER *//
userRouter.put("/:id", UserController.update);

//! GET BY EMAIL [DEV-ONLY]
userRouter.post("/:email", UserController.getByEmail);

 