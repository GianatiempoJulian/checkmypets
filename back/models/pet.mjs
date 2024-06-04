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

   //* Actualizar mascota *//
   static async update(id , { petData }) {
    const { name, gender, weight, race, image } = petData;
    try {
      const [updatedPet] = await connection.query(
        `UPDATE pets SET name = (?), gender = (?), weight = (?), race = (?), image = (?) WHERE id = 
            (?);`,
        [name, gender, weight, race, image, id]
      );
      return updatedPet;
    } catch (err) {
      console.error(err);
    }
  }

  //! PET X MEDICINE !//

  //* GET PETMEDICINE BY ID *//
  static async getMedicineByPetID({ id }) {
    try {
      console.log(id)
    }
    catch (err) {
      console.error(err)
    }
  }

  //* ADD MEDICINE TO A PET *//
  static async addMedicineToPet(medicineId, petId) {
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
