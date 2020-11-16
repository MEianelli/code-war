function rgb(r, g, b) {
  return convertHex(r) + convertHex(g) + convertHex(b);
}

function convertHex(num) {
  if (num < 0) return "00";
  if (num > 255) return "FF";
  let a = Math.floor(num / 16);
  let b = Math.floor(num % 16);
  a = a < 10 ? Math.floor(a).toString() : ["A", "B", "C", "D", "E", "F"][Math.floor(a % 10)];
  b = b < 10 ? Math.floor(b).toString() : ["A", "B", "C", "D", "E", "F"][Math.floor(b % 10)];
  return a + b;
}

console.log(convertHex(255));

console.log(rgb(173, 255, 47)); //ADFF2F
