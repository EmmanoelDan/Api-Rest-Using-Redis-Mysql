const mysql = require('../config/mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const createUser = async (req, res, next) => {
        try {
            const users = req.body.users.map(user => [
                user.email,
                user.name,
                user.password
            ])
    
            query = 'INSERT INTO users (email, name, password) VALUES ?;';
            const results = await mysql.execute(query, [ users ]);
    
            const response = {
                message: 'Usuário criado com sucesso',
                createdUsers: req.body.users.map(user => { return { email: user.email } })
            }
            return res.status(201).send(response);
    
        } catch (error) {
            return res.status(500).send({ error: error });
        }
};

const userLogin = async (req, res, next)=>{
    try {
        const query = `SELECT * FROM users WHERE email = ?`;
        var results = await mysql.execute(query, [req.body.email]);

        if (results.length < 1) {
            return res.status(401).send({ message: 'Falha na autenticação' })
        }

        if (await bcrypt.compareSync(req.body.password, results[0].password)) {
            const token = jwt.sign({
                user_id: results[0].user_id,
                email: results[0].email
            },
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            });
            return res.status(200).send({
                message: 'Autenticado com sucesso',
                token: token
            });
        }
        return res.status(401).send({ message: 'Falha na autenticação' })
    } catch (error) {
        return res.status(500).send({ message: 'Falha na autenticação' });
    }
}

module.exports = {createUser, userLogin}