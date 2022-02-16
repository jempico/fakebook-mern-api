const user = require('../../services/user');
const bcrypt = require('bcrypt');

class userController {
    async addUser(req, res){
        try {      
          const {email, password} = req.body;
          const userFound = await user.checkIfExists(email);
          if (userFound.length === 0) {
            const userCreated = await user.addUser(email, password)
            const token = await user.createToken(userCreated);
            res.status(200).json({
              success: true,
              text: `user with ID ${userCreated._id} created and added to ranking!`,
              token: token})
          } else {
            res.status(400).json({
              success: false,
              text: 'This email is already taken. Please choose another name'})
          }
        } catch(err) {
          res.status(400).json({ success: false, error: err })}
    }
}


module.exports = new userController;
