const {setRedis, getRedis} = require('../config/redisConfig');

const userRedisCreate = async (req, res) =>{
    try {
        const {email, name, password} = req.body;
    
        const users = {
            email,
            name,
            password
        }

        await setRedis(`Users`, JSON.stringify(users))

        return res.status(200).send(JSON.stringify(users))

    } catch (error) {
        console.error(error)
        res.status(500).send(error)
    }

}
const userGetRedis = async (req, res) =>{
    try {
        const result = await getRedis(userRedisCreate(users));
        
        const response = {
            length: result.length,
            users: result.map(user =>{
                return {
                    email: user.email,
                    name: user.name,
                    password: user.password
                }
            })
        }
        return res.status(200).send(response)

    } catch (error) {
        return res.status(500).send({message: error})
    }
}

module.exports = {userRedisCreate, userGetRedis};