const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');

const UserSchema = Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  successRate: { type: Number, default: 0 },
  date: { type: Date, default: Date.now } ,
  wins: { type: Number, default: 0  },
  rounds: { type: Number, default: 0 },
  games: [ { 
    dice1: { type: Number},
    dice2: { type: Number},
    score: { type: Boolean},
    result: { type: String} } ]
  
}, {
  versionKey: false
});

UserSchema.statics.encryptPassword = function(password) {
   return bcrypt.hashSync(password, 10)
}

UserSchema.statics.comparePassword = function(password, receivedPassword) {
  return bcrypt.compare(password, receivedPassword)
}

UserSchema.statics.setAnonimName = function() {
  return uniqid('ANONIM-');
} 

//Exporting User model based on UserSchema
module.exports= mongoose.model('User',UserSchema);
