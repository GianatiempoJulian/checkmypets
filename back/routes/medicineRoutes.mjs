import express from 'express'
import { MedicineController } from '../controllers/medicineController.mjs';
export const medicineRouter = express.Router();


//! :::::::::::::: MEDICINE ROUTES :::::::::::::: !//

//* CREATE MEDICINE *//
medicineRouter.post("/", MedicineController.create)

//* GET ALL THE MEDICINES *//
medicineRouter.get("/", MedicineController.getAll)

//* DELETE MEDICINE *//
medicineRouter.delete("/:id", MedicineController.remove);
 