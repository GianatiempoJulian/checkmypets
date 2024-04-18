import express from 'express'
import { PetController } from '../controllers/petController.mjs';
export const petRouter = express.Router();


//! :::::::::::::: PET ROUTES :::::::::::::: !//

//* CREATE PET *//
petRouter.post("/", PetController.create)

//* GET ALL THE PETS *//
petRouter.get("/", PetController.getAll)

//* DELETE PET *//
petRouter.delete("/:id", PetController.remove);
 