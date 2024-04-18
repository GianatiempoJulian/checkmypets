import { connection } from "../db/connect.mjs";

export class petModel {
  //* Crear mascota *//
  static async create({ input }) {
    const { name, gender, weight, race, image } = input;
    try {
      await connection.query(
        `INSERT INTO pets (name, gender, weight, race, image)
            VALUES (?, ?, ?, ?, ?);`,
        [name, gender, weight, race, image]
      );
    } catch (err) {
      console.error(err);
    }
  }

  //* Obtener todas las mascotas *//
  static async getAll() {
    try {
      const [pets] = await connection.query(
        "SELECT id, name, gender, weight, race, image FROM pets"
      );
      return pets;
    } catch (err) {
      console.error(err);
    }
  }

  //* Eliminar mascota *//
  static async remove({ id }) {
    try {
      await connection.query(
        `DELETE FROM pets WHERE id =
            (?);`,
        [id]
      );
    } catch (err) {
      console.error(err);
    }
  }
}
