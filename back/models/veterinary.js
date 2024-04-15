import { connection } from '../db/connect.mjs';
const saltRounds = 10;

export class veterinaryModel{

    static async create({ input }){
        const password = input.password;    
        const encryptedPassword = await hash(password, saltRounds)
        const{
            name,
            address,
            email
        } = input
        try{
            await connection.query(`INSERT INTO veterinary (name, address, email, password) 
            VALUES (?, ?, ?, ?);`,
            [name, address, email, encryptedPassword])
        }catch(err){
            console.log(err)
        }
    }

    static async getAll(){
        try{
            const [veterinaries] = await connection.query(`SELECT * FROM veterinary;`)
            return veterinaries
        }catch(err){
            console.log(err)
        }
    }

    static async remove({id}){
        try{
            await connection.query(`DELETE FROM veterinary WHERE id = (?)`, [id])
        }catch(err){
            console.log(err)
        }
    }
}