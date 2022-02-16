const mongoose = require('mongoose');
const User = require('../models/User')
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const jwt = require('jsonwebtoken');

class UserService {
    async findUser(email){
        let result = await User.findOne({email})
        return result;
    }
    
    async checkIfExists(email){
        let result = await User.find({email: {$eq: email}})
        return result;
    }
      async addUser(email, password){
        let newUser = new User({
            name: User.setAnonimName(),
            email,
            password: User.encryptPassword(password)
        })
        await newUser.save()
        return newUser;
    }
    async updateName(query, newName){
        let result = await User.findOneAndUpdate(query, {name: newName})
        return result;
    }
    async read(id, query){
        let result = await User.findById(id, query)
        return result;
        }
    async readUsers(query){
        let result = await User.find({}, query)
        return result;
    }
    async readUsersRanking(){
        let result = await User.find({}, '_id name successRate').sort({ successRate : 'desc'})
        return result;
    }
    async addGame(id, newGame){
        let result = await User.findByIdAndUpdate(
            id,
            { $push: {games: newGame}}, 
            { new:true })
        return result; 
    }
    async setSuccess(id, wins, rounds){
        let successDTO = wins/rounds
        let success;
        if (isNaN(successDTO)) {
            success = 0;
        } else{
            success = successDTO.toFixed(2);
        }
        let result = await User.findByIdAndUpdate(
            id,
            {successRate: success}, 
            { new:true })
        return result;
        }
    
    checkWins(gamesList){
            let wins = 0;
            gamesList.forEach(obj => { 
                if (obj.result == 'WIN') { wins++ }}) 
            return wins;
        }
        
    async countWins(array){
        let games = array;
        let result = await User.games.aggregate(
            [
              {
                $match: {
                  result: {
                    $eq: 'WIN'
                  }
                }
              },
              {
                $count: "wins"
              }
            ]
          )
        return result;
    }     

    async removeGames(id) {
        let result = await User.findByIdAndUpdate(id, { games:[] }, { new:true })
        return result;    
    }
    async readOverallSuccess(){
        let result = await User.aggregate([
            {
              $group : {
                 _id : null,
                 overallSuccessRate: { $avg: "$successRate" },
                 totalUsers: { $sum: 1 }
              }
            }
           ])
        return result;
    }
    async getMaxSuccess(){
        let result = await User.aggregate([
            {
              $group : {
                 _id : null,
                 maxSuccessRate: { $max: "$successRate" },
              }
            }
           ])
        return result;
    }
    async getMinSuccess(){
        let result = await User.aggregate([
            {
              $group : {
                 _id : null,
                 minSuccessRate: { $min: "$successRate" },
              }
            }
           ])
        return result;
    }
    async readWinnerLoser(query){
        let result = await User.find({ successRate: query }, '_id successRate')
        return result;
    }   
    async deleteAll() {
        let result = await User.remove({});
        return result;    
    }
    async createToken(obj){
        let result = jwt.sign({id: obj._id}, process.env.SECRET_TOKEN_ACCESS)
        return result;
    }
    async comparePassword(password, hashedpassword){
        let result = await User.comparePassword(password, hashedpassword);
        return result
    }
    
}



module.exports = new UserService;
