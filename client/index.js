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
    const client = new services.GreetServiceClient('0.0.0.0:50052', grpc.credentials.createInsecure());

    const request = new messages.GreetRequest();
    const greeting = new messages.Greeting();
    greeting.setFirstName('Test');
    request.setGreeting(greeting);

    client.greet(request, function (err, response) {
        if (err) throw err;
        console.log('Response from Client: ', response.getResult());
    })
}

main();