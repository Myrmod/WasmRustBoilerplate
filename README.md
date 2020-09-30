# WASM Demo
WASM basic boilerplate using Rust implementing some basic math functions.

## Setup
In the src directory we have a flder called "wasm". In there we use Rust to create our WebAssembly in the pkg directory. Those can be imported like shown in the src/app.js.

You can ofcourse extend this project to be able to handle a lot more. Like integrate it into a bundler of your choice.

## Installation
``` bash 
yarn first-install
```

## Development
to build the .wasm files from Rust you have to call 
``` bash 
yarn build:wasm
```

to start a simple server just run
``` bash
yarn start
```

## Server
We use a custom node server to be able to send the `application/wasm` MIME type with the .wasm files. Otherwise we would get an error.
