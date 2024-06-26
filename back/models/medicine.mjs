import { connection } from '../db/connect.mjs';

export class medicineModel {

    //* Crea una medicina
    static async create({ input }) {
        const {
            name,
            brand,
            description
        } = input

        try {
            await connection.query(`INSERT INTO medicines (name, brand, description) 
            VALUES (?, ?, ?);`,
                [name, brand, description])
        } catch (err) {
            console.log(err);
        }
    }

    //* Retorna todas las medicinas
    static async getAll() {
        try {
            const [medicines] = await connection.query(`SELECT * FROM medicines;`)
            return medicines;
        } catch (err) {
            console.log(err)
        }
    }

    //* Elimina una medicina
    static async remove({ id }) {
        try {
            await connection.query(`DELETE FROM medicines WHERE id = (?);`,
                [id]);
        } catch (err) {
            console.log(err)
        }
    }

    //* Actualizar medicina
    static async update(id, { medicineData }) {
        const { name, brand, description } = medicineData;
        try {
            const [updatedMedicine] = await connection.query(
                `UPDATE medicines SET name = (?), brand = (?), description = (?) WHERE id = 
            (?);`,
                [name, brand, description, id]
            );
            return updatedMedicine;
        } catch (err) {
            console.error(err);
        }
    }

}