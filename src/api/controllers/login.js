const user = require('../../services/user');
const bcrypt = require('bcrypt');

class loginController {
  //LOGIN user 
  async login(req, res){
    try {
        console.log(req.body);
      const {email, password} = req.body;
      const userFound = await user.findUser(email);
      console.log(userFound);
      const passwordCorrect = userFound === null? false : await user.comparePassword(password, userFound.password)

      if (!passwordCorrect) {
        res.status(401).json({ success: false, error: 'Invalid user or Password'})
      }
      const token = await user.createToken(userFound);
      res.status(200).json({ success: true, email: userFound.email, token: token })

    }catch(err){
      res.status(400).json({ success: false, error: err })}
    }
}

module.exports = new loginController;

