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

//* UPDATE PET *//
petRouter.put("/:id", PetController.update);

//* GET ALL THE MEDICINE FROM PET *//
petRouter.post("/medicines/:id", PetController.medicineFromPet);