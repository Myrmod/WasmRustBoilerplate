const wasm = WebAssembly.instantiateStreaming(fetch('./wasm/pkg/wasm_bg.wasm'));
wasm
   .then(({ instance }) => {
      const { add, substract, multiply, divide } = instance.exports;
      console.log(`2 + 4 = ${add(2, 4)}`);
      console.log(`2 - 4 = ${substract(2, 4)}`);
      console.log(`2 * 4 = ${multiply(2, 4)}`);
      console.log(`2 / 4 = ${divide(2, 4)}`);
   })
   .catch(err => {
      console.error('Error: ', err);
   });
