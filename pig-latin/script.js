function solve(str) {
  let arr = str.match(/[A-Za-z0-9]/g).reverse();
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(+arr[i])) {
      string = string.repeat(+arr[i]);
    } else {
      string = string.split("").reverse().join("");
      string += arr[i];
      string = string.split("").reverse().join("");
    }
  }
  return string;
}

console.log(solve("k(a3(b(a2(c))))"));

//string.match(/[A-Za-z0-9]/g); retorna array com numeros e letras apenas

/*20587  20857 20785 20758*/

function pigIt(str) {
  return str
    .split(" ")
    .map((element) => {
      if (element.match("^[a-zA-Z]+$")) return element.slice(1, element.length).concat(element.slice(0, 1)).concat("ay");
      else return element;
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool !"));

function moveZeros(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) result.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) result.push(arr[i]);
  }
  return result;
}

console.log(moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]));
