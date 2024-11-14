function objectToString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

// Example usage
const obj = { a: 1, b: 2, c: 3 };
const resultString = objectToString(obj);
console.log(resultString); // Output: "a=1 b=2 c=3"
