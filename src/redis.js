const redis = require('redis');
const { promisify } = require('util')

const PORT_REDIS = process.env.PORT_REDIS || 6379

const client = redis.createClient(PORT_REDIS);

exports.getAsync = promisify(client.get).bind(client);
exports.setAsync = promisify(client.set).bind(client);
