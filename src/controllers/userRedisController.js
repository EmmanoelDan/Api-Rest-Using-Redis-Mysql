
const {setRedis, getRedis} = require('../config/redisConfig');

const userRedisCreate = async (req, res) =>{
    try {
        const {email, username, password} = req.body;
    
        const users = {
            email,
            username,
            password
        }

        await setRedis(`Users`, JSON.stringify(users))

        const response = {
            message: "Usuario Criado",
            createdUsers: email
        }

        return res.status(200).send(JSON.stringify(response))

    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
}

const userLogin = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const user = {
            email,
            password
        }

        await setRedis(JSON.stringify(user));

        const response = {
            message: "Login realizado com sucesso",
            createdUsers: email
        }
        return res.status(200).send(JSON.stringify(response))

    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }
    
}

module.exports = {userRedisCreate, userLogin};