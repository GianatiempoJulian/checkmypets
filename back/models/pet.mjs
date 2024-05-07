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
        "SELECT * FROM pets"
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

  //! PET X MEDICINE !//

  //* GET PETMEDICINE BY ID *//
  static async getMedicineByPetID({ id }) {
    try {
      const [medicinePet] = await connection.query(
        `SELECT * FROM medicine_x_pet WHERE petId =
              (?);`
        [id]
      )
      return medicinePet
    }
    catch (err) {
      console.error(err)
    }
  }

  //* ADD MEDICINE TO A PET *//
  static async addMedicineToPet({ input }) {
    const { medicineId, petId } = input;
    try {
      await connection.query(
        `INSERT INTO medicine_x_pet (medicineId, petId)
            VALUES (?, ?);`,
        [medicineId, petId]
      );
    } catch (err) {
      console.error(err);
    }
  }

}
