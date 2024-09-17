// Question: What do you think happens to the first element here? Does it throw an error?

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
console.log(uint8Arr);

// Answer:
// When you try to assign 300 to the second element, UInt8Array will not throw an error but will instead wrap the value around, storing 300 % 256 = 44. The UInt8Array enforces the 8-bit limit, so the value will be truncated to fit within the range 0-255.
