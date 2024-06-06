import { petModel } from "../models/pet.mjs"
import jws from "jsonwebtoken"

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
        const authorization = req.get('authorization')
        let token = null
        if(authorization && authorization.toLowerCase().startsWith('bearer')){
            token = authorization.substring(7);
        }

        const decodedToken = jws.verify(token, process.env.SECRET)

        if(!token || !decodedToken.user.id){
            res.status(401).json({error: 'token invalido o no encontrado.'})
        }

        const newPet = await petModel.create({ input: req.body })
        res.status(201).json(newPet)
    }


    static async remove(req, res) {
        const { id } = req.params
        const query = await petModel.remove({ id })
        res.status(201).json(query)
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const petData = req.body;
            console.log('Request body:', petData); // Verificar el cuerpo de la solicitud
            const result = await petModel.update(id, { petData });
            
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Mascota no encontrada' });
            }
            res.json({ message: 'Mascota actualizada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar la mascota' });
        }
    }

    static async medicineFromPet(req, res) {
        const { id } = req.params
        const query = await petModel.getMedicineByPetID({ id })
        res.status(201).json(query)
    }

    static async vinculateMedicineToPet(req, res) {
        try {
            const petId  = req.body.petId;
            const medicineId = req.body.medicineId;
            const result = await petModel.addMedicineToPet(petId, medicineId);
            res.json({ message: 'Medicina vinculada correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al vincular la medicina' });
        }
    }
}