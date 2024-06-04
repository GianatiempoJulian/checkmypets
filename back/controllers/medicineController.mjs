import { medicineModel } from "../models/medicine.mjs"

export class MedicineController {
    static async getAll(req, res) {
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

    static async update(req, res) {
        try {
            const { id } = req.params;
            const medicineData = req.body;
            console.log('Request body:', medicineData); // Verificar el cuerpo de la solicitud
            const result = await medicineModel.update(id, { medicineData });
            
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Medicina no encontrada' });
            }
            res.json({ message: 'Medicina actualizada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar la medicina' });
        }
    }

   
}