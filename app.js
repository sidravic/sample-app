'use strict';
const uuidv4 = require('uuid/v4');
const Hapi = require('hapi')
const Server = new Hapi.Server();
const serverId = uuidv4()

Server.connection({ port: (process.env.PORT || 3010), host: 'localhost'})

Server.route({
    method: "GET",
    path: '/',
    handler: function(request, reply) {
        reply({
            message: "Hello000000000000000000000000000000",
            time: Date.now(),
            serverId: serverId
        }).code(200)
    }
})


Server.start((err) => {
    if (err){
        throw err;
    }

    console.log(`Server running at ${Server.info.uri}`)
})

