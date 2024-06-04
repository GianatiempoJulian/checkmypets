import { userModel } from '../models/user.mjs'

export class UserController {
    static async getAll (res) {
      const users = await userModel.getAll()
      res.json(users)
    }
  
    static async getByEmail (req, res) {
      const { email } = req.body
      const user = await userModel.getByEmail({ email })
      if (user) return res.json(user)
      res.status(404).json({ message: 'User not found' })
    }

    static async create (req, res) {
        if(req.body) { //What is going to receive here
          const newUser = await userModel.create({ input: req.body })
          res.status(201).json(newUser)
        }
      }

      static async verify(req,res)
      {
        const email = req.body.email;
        const password = req.body.password;
        if(req.body.email && req.body.password){
          const user = await userModel.verify({ email, password});
          if(!user){
            return res.status(404).json({ message: "Email y/o contraseña incorrecta" })
          }
          res.status(201).json(user);
        }
        else
        {
          res.status(404).json({ message: 'Debes ingresar ambos campos.' })
        }
      }

      static async update(req, res) {
        try {
            const { id } = req.params;
            const userData = req.body;
            console.log('Request body:', userData); // Verificar el cuerpo de la solicitud
            const result = await userModel.update(id, { userData });
           
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Usuario no encontrada' });
            }
            res.json({ message: 'Usuario actualizado correctamente' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar el usuario' });
        }
    }
}