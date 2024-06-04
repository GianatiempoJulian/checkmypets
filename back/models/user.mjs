import { connection } from '../db/connect.mjs';
import { hash, compare } from 'bcrypt';
const saltRounds = 10;

export class userModel {

    //* CREATE USER *//
    static async create({ input }) {
        const password = input.password;
        const encryptedPassword = await hash(password, saltRounds)
        const {
            name,
            lastname,
            email,
            phoneNumber,
            address
        } = input
        try {
            await connection.query(`INSERT INTO users (name, lastname, email, password, phoneNumber, address)
                VALUES (?, ?, ?, ?, ?, ?);`,
                [name, lastname, email, encryptedPassword, phoneNumber, address])
        } catch (err) {
            if (err.sqlState == 23000) {
                return res.status(422).json({ message: "Mail en uso. Prueba con otro" })
            }
        }
    }

    //* GET ALL THE USERS *//
    static async getAll() {
        try {
            const [users] = await connection.query(
                'SELECT * FROM users'
            )
            return users
        }
        catch (err) {
            console.error(err)
        }
    }

    //* GET USER BY ID *//
    static async getByID({ id }) {
        try {
            const [user] = await connection.query(
                `SELECT * FROM users WHERE id =
                (?);`
                [id]
            )
            return user[0]
        }
        catch (err) {
            console.error(err)
        }
    }

    //* GET USER BY EMAIL *//
    static async getByEmail({ email }) {
        try {
            const [user] = await connection.query(
                `SELECT * FROM users WHERE email =
                (?);`,
                [email])
            return user;
        } catch (err) {
            console.error(err)
        }
    }

    //* DELETE USER *//
    static async remove({ id }) {
        try {
            await connection.query(`DELETE FROM users WHERE id =
            (?);`,
                [id])
        } catch (err) {
            console.error(err)
        }
    }

    //* Actualizar usuario
    static async update(id, { userData }) {
        
        const { phoneNumber, email, address } = userData;
        try {
            const [updatedUser] = await connection.query(
            `UPDATE users SET phoneNumber = (?), email = (?), address = (?) WHERE id = 
                (?);`,
            [phoneNumber, email, address, id]
            );
        return updatedUser;
        } catch (err) {
            console.error(err);
        }
    }

    //* VERIFY IF USER EXISTS *//
    static async verify({ email, password }) {
        try {
            const user = await this.getByEmail({ email })
            if (Object.keys(user).length != 0)  //Verifies email
            {
                const passwordVerified = await compare(password, user[0].password); //Verifies password
                if (passwordVerified == true) {
                    return user[0];
                }
            }
        } catch (err) {
            console.error(err);
        }
    }




}
