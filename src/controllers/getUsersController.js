const mysql = require('../config/mysql');
const { getAsync, setAsync } = require('../redis');

const getUsers = async (req, res, next)=>{
    try {
        const result = await mysql.execute("SELECT * FROM users;")
        const response = {
            length: result.length,
            users: result.map(user =>{
                return {
                    id_user: user.id_user,
                    email: user.email,
                    name: user.name
                }
            })
        }
        return res.status(200).send(response)
       
    }
    catch (error) {
        return res.status(500).send({message: error})
    }

    /*mysql.getConnection((error, conn)=>{
        
        if(error){
            return res.status(500).send({error: error})
        }
        conn.query(
            'SELECT * FROM users;',
            (error, result, fields)=>{
                if(error){
                    return res.status(500).send({error: error})
                }
                return res.status(200).send({response: result})
            }
        )
    });*/
    
}
module.exports = { getUsers }
