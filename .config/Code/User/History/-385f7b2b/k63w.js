function invertObject(obj) {
  // Create an empty object to store the inverted key-value pairs
  const inverted = {};

  // Iterate over the entries of the original object
  for (const [key, value] of Object.entries(obj)) {
    // Assign the value as the key and the key as the value in the inverted object
    inverted[value] = key;
  }

  return inverted;
}

// Example usage:
const original = {
  John: "Kanady",
  Vinod: "Sharma",
  Mark: "Zuckerberg",
};

const inverted = invertObject(original);

console.log(inverted);
// Output: { Kanady: 'John', Sharma: 'Vinod', Zuckerberg: 'Mark' }
