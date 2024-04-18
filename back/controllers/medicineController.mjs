import { medicineModel } from "../models/medicine.mjs"

export class MedicineController {
    static async getAll(res) {
        const medicines = await medicineModel.getAll()
        res.json(medicines);
    }

    static async getById(req, res) {
        const { id } = req.params
        const medicine = await medicineModel.getById({ id })
        if (medicine) return res.json(medicine)
        res.status(404).json({ message: 'Medicine not found' })
    }

    static async create(req, res) {
        const newMedicine = await medicineModel.create({ input: req.body })
        res.status(201).json(newPet)
    }

    static async remove(req, res) {
        const { id } = req.params
        const query = await medicineModel.remove({ id })
        res.status(201).json(query)
    }
}