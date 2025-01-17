const User = require('../models/userModel');

//Método para obter todos os usuários
const getUsers = async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

//Método para criar um usuário
const createUser = async(req,res)=>{
    const user = new User(req.body);
    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch(err){
        res.status(400).json({message: err.message});
    }
};

module.exports ={
    getUsers,
    createUser
}