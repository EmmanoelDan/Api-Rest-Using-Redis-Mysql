const {Router} = require('express');
const mysqlRoutes = require('./user.mysql.routes')
const redisRoutes = require('./user.redis.routes')

const routes = Router();

routes.use((req, res, next)=>{
    console.log(`
        request type: ${req.method} \n
        name route: ${req.url} \n
        body: ${JSON.stringify(req.body)}
        `)
    next()
})

routes.use(mysqlRoutes);
routes.use(redisRoutes)

module.exports = routes;
