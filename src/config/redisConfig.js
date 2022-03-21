const redis = require('redis');
const {promisify} = require('util')

const PORT_REDIS = process.env.PORT_REDIS || 6379

const client = redis.createClient(PORT_REDIS);

function getRedis(value) {
    const syncRedisGet = promisify(client.get).bind(client);
    return syncRedisGet(value);
  
    // client.get("")
}
  
  function setRedis(key, value) {
    const syncRedisSet = promisify(client.set).bind(client);
    return syncRedisSet(key, value);
  
    // redisClient.set("", "")
}


module.exports = {setRedis, getRedis};