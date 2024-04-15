import { connection } from '../db/connect.mjs';

export class medicineModel{

    //* Crea una medicina
    static async create({input}){
        const {
            name,
            brand,
            description
        } = input

        try{
            await connection.query(`INSERT INTO medicine (name, brand, description) 
            VALUES (?, ?, ?);`,
            [name, brand, description])   
        }catch(err){
            console.log(err);
        }
    }

    //* Retorna todas las medicinas
    static async getAll(){
        try{
            const [medicines] = await connection.query(`SELECT * FROM medicine;`)
            return medicines;
        }catch(err){
            console.log(err)
        }
    }

    //* Elimina una medicina
    static async remove({id}){
        try{
            await connection.query(`DELETE FROM medicine WHERE id = (?);`,
            [id]);
        }catch(err){
            console.log(err)
        }
    }

}