
const dbConnection = require('../config/db');
const User = require('../models/user');

const getUserList = (req, res) => {
    User.getAllUserList((err, users) => {
        if (err) return res.status(500).json(err);
        res.status(200).json(users);
    })
}

const createOneUser = (req, res) => {
    const userData = new User(req.body);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).json('Please fill out all fields');
    }
    else {
        User.createUser(userData, (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.status(200).json({ message: 'Created Successfully', data: result })


        });
    }

}


const getSingleUser = (req,res) => {
    const { id } = req.params;

    User.getUserById(id,(err,result) => {
        if(err){
            return res.status(err).json(result);
        }
        res.status(200).json(result);
    })
}


const updateUser = (req, res) => {
    const userData = new User(req.body);
    const {id} = req.params;

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).json('Please fill out all fields');
    }
    else {
        User.updateUser(id,userData, (err, result) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.status(200).json({ message: 'Updated Successfully', data: result })


        });
    }

}


const deleteUser = (req,res) => {
    const {id} = req.params;

    User.deleteUser(id,(err,result) => {
        if(err){
            return res.status(err).json(result);
        }
        res.status(200).json({message:'Deleted Successfully'})
    })
}


module.exports = { getUserList, createOneUser, getSingleUser,updateUser,deleteUser };