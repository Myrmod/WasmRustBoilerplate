# WASM Demo
WASM basic boilerplate using Rust implementing some basic math functions.

## Server
We use a custom node server to be able to send the `application/wasm` MIME type with the .wasm iles. Otherwise we would get an error.
