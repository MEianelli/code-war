function encode(text) {
  return text
    .split("")
    .map((e) => {
      return ("00000000" + (e.charCodeAt() >>> 0).toString(2)).substr(-8);
    })
    .join("")
    .split("")
    .map((e) => {
      return e === "0" ? "000" : "111";
    })
    .join("");
}

console.log(encode("hey"));

function decode(bits) {
  return bits
    .match(/.{1,3}/g)
    .map((e) => {
      if (e === "000" || e === "111") return e[0];
      else {
        return Math.floor(e.split("").reduce((acc, curr) => parseInt(acc) + parseInt(curr)) / 2).toString();
      }
    })
    .join("")
    .match(/.{1,8}/g)
    .map((e) => {
      return e
        .split("")
        .map((e, i) => {
          return parseInt(e) * 2 ** (7 - i);
        })
        .reduce((acc, curr) => acc + curr);
    })
    .map((e) => {
      return String.fromCharCode(e);
    })
    .join("");
}

console.log(decode("010111111011111000000000000111111000000111000111000111111111111000000111"));
//000111111000111000000000000111111000000111000111000111111111111000000111
/*.reduce((acc, curr, i) => {
        parseInt(acc) + parseInt(curr) /* * (2 ^ (8 - i) */
