use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add(n1: f64, n2: f64) -> f64 {
   n1 + n2
}

#[wasm_bindgen]
pub fn substract(n1: f64, n2: f64) -> f64 {
   n1 - n2
}

#[wasm_bindgen]
pub fn multiply(n1: f64, n2: f64) -> f64 {
   n1 * n2
}

#[wasm_bindgen]
pub fn divide(n1: f64, n2: f64) -> f64 {
   n1 / n2
}
