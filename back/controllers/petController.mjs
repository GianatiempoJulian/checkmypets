import { petModel } from "../models/pet.mjs"

export class PetController {
    static async getAll(req, res) {
        const pets = await petModel.getAll()
        res.json(pets);
    }

    static async getById(req, res) {
        const { id } = req.params
        const pet = await petModel.getById({ id })
        if (pet) return res.json(pet)
        res.status(404).json({ message: 'Pet not found' })
    }

    static async create(req, res) {
        const newPet = await petModel.create({ input: req.body })
        res.status(201).json(newPet)
    }

    static async remove(req, res) {
        const { id } = req.params
        const query = await petModel.remove({ id })
        res.status(201).json(query)
    }
}