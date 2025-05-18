function unpack(input) {
  const parts = input.split(".");
  if (parts.length === 1) return parts[0];

  const [first, ...rest] = parts;
  return { [first]: unpack(rest.join(".")) };
}

const inputString = "a.b.c.d.e";
const result = unpack(inputString);
console.log(result);
