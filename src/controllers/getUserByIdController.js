const {setAsync, getAsync} = require('../redis');
const mysql = require('../config/mysql').pool;

const getUserById = async (req, res, next)=>{
    mysql.getConnection((error, conn)=>{
        
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
    });
}

module.exports = {getUserById}