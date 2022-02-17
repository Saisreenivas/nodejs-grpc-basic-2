# Basic NodeJS gRPC Starter

gRPC server uses proto file for defining the behaviour of gRPC service.

These proto files can be built:

1. during runtime using: `@grpc/proto-loader` or
2. during buildtime using cli tool: `protoc`

This Repository follows the second method among these.

## Server

```bash
cd server
```

### Installation

```bash
$ npm install
```

Note: If you are changing the `greet.proto` file, then you will have to update the js files. To do this,

1. Install gRPC Tools `npm install -g grpc-tools`
2. Install protoc from https://developers.google.com/protocol-buffers/docs/downloads
3. go into `proto_files` folder and execute the following commands:

   - `grpc_tools_node_protoc --grpc_out=grpc_js:../proto_files_js/ .\greet.proto`
   - `protoc .\greet.proto --js_out=import_style=commonjs,binary:../proto_files_js/`

### Running the app

```bash
# development
$ npm run start
```

### Executing a gRPC Request

gRPC Call to Server

- Can be done using the Client Section below
- Can be directly executed from Postman by passing the services and methods using proto file from `server/proto_files/greet.proto`. [Screenshot]

## Client

This is a script that triggers the gRPC Server and retrieves the data.

It is present in the /client folder.

```bash
cd client
```

### Installation

```bash
$ npm install
```

Note: If you are changing the `greet.proto` file, then you will have to update the js files. To do this,

1. Install gRPC Tools `npm install -g grpc-tools`
2. Install protoc from https://developers.google.com/protocol-buffers/docs/downloads
3. go into `proto_files` folder and execute the following commands:

   - `grpc_tools_node_protoc --grpc_out=grpc_js:../proto_files_js/ .\greet.proto`
   - `protoc .\greet.proto --js_out=import_style=commonjs,binary:../proto_files_js/`

### Running the app

```bash
# development
$ npm run start
```
