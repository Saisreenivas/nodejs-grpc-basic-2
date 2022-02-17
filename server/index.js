var messages = require('./proto_files_js/greet_pb');
var services = require('./proto_files_js/greet_grpc_pb');

var grpc = require('@grpc/grpc-js');

async function bindServer(server, url, creds) {
    return new Promise((resolve, reject) => {
        server.bindAsync(url, creds, (err, port) => {
            if (err) reject(err);
            console.log("binded to port: " + port);
            resolve(port);
        })
    })
}

async function main() {
    // services to function execution logic executer
    var server = new grpc.Server();
    server.addService(services.GreetServiceService, {
        greet: (call, callback) => {
            console.log('\nCalled Greet Method with payload: ', call.request.toObject());

            // logging input metadata.
            console.log("input metadata: ", call.metadata.toJSON());

            // response payload
            var reply = new messages.GreetResponse();
            reply.setResult('Hello ' + call.request.getGreeting().getFirstName());
            callback(null, reply);
        }
    });
    console.log('Services Added');


    // defining the host, port and server creds for server
    const port = await bindServer(server, '0.0.0.0:50052', grpc.ServerCredentials.createInsecure())

    // starting the server
    server.start();
    console.log('Server is running in port: ' + port);
}

main();