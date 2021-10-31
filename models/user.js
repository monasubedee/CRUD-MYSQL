const dbConnection = require('../config/db');


const User = function (user) {
    this.first_name = user.first_name;
    this.last_name = user.last_name;
    this.phone = user.phone;
    this.status = user.status;
}


//get all user list

User.getAllUserList = (result) => {
    dbConnection.query(`SELECT * FROM user`, (err, res) => {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}

//get single user by id

User.getUserById = (id, result) => {
    dbConnection.query('SELECT * FROM user WHERE id= ? ', id, (err, res) => {
        if (err) {
            result(null, err);
        }
        else if (res.length === 0) {
            result(404, `No such data with this id ${id}`)
        }
        else {
            result(null, res);
        }
    })
}


//create user
User.createUser = (data, result) => {
    dbConnection.query('INSERT INTO user SET ? ', data, (err, res) => {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}


//update user

User.updateUser = (id, data, result) => {
    const { first_name, last_name, phone, status } = data;
    dbConnection.query('UPDATE user SET first_name = ?,last_name=?,phone=?,status=? WHERE id=? ', [first_name, last_name, phone, status, id], (err, res) => {
        if (err) {
            result(null, err);
        }
        else {
            result(null, res);
        }
    })
}


//delete user

User.deleteUser = (id, result) => {

    dbConnection.query(`SELECT * FROM user WHERE id=${id} `, (err, res) => {
        if (res.length === 0) {
            result(404, `No such id ${id}`);
        }
        else {
            dbConnection.query(`DELETE FROM user WHERE id=${id}`, (err, res) => {

                if (err) {
                    result(null, err);
                }

                else {
                    result(null, res);
                }
            })
        }
    })


}

module.exports = User;