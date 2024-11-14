function invertObject(obj) {
  const inverted = {};
  for (const [key, value] of Object.entries(obj)) {
    inverted[value] = key;
  }
  return inverted;
}

const original = {
  John: "Kanady",
  Vinod: "Sharma",
  Mark: "Zuckerberg",
};

const inverted = invertObject(original);
console.log(inverted);

