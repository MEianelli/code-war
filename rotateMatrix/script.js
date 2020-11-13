/* function snail(array) {
  let resultArray = [];

  while (array.length !== 0) {
    console.log(array);
    array[0].forEach((e) => {
      resultArray.push(e);
    });
    array.splice(0, 1);
    array.forEach((e) => {
      resultArray.push(e[e.length - 1]);
      e.splice(e.length - 1, 1);
    });
    rotate90anticlock(array);
    rotate90anticlock(array);
  }

  return resultArray;
}

function rotate90anticlock(array) {
  let L = array.length;

  for (let i = 0; i < L; i++) {
    for (let j = i; j < L; j++) {
      let temp = array[i][j];
      array[i][j] = array[j][i];
      array[j][i] = temp;
    }
  }

  for (let i = 0; i < L; i++) {
    for (let j = 0, k = L - 1; j < k; j++, k--) {
      let temp = array[j][i];
      array[j][i] = array[k][i];
      array[k][i] = temp;
    }
  }
  return array;
}

console.table(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); */

/* function validParentheses(parens) {
  let l = 0;
  let r = 0;
  for (let i = 0; i < parens.length; i++) {
    parens[i] === "(" ? l++ : r++;
    if (r > l) return false;
  }
  return r === l;
}

console.log(validParentheses("(())((()())())"));
 */
/* var maxSequence = function (arr) {
  let arrSize = arr.length;
  if (arrSize === 0) return 0;

  let maxTotal = 0;
  for (let i = 1; i <= arrSize; i++) {
    for (let j = 0; j < arrSize; j++) {
      let count = 0;
      for (let z = 0; z < i; z++) {
        if (Number.isInteger(arr[z + j])) {
          count += arr[z + j];
        }
      }
      if (count > maxTotal) {
        maxTotal = count;
      }
    }
  }
  if (maxTotal < 0) return 0;
  return maxTotal;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); */

/* function dirReduc(arr) {
  let NS = arr
    .filter((e) => e === "NORTH" || e === "SOUTH")
    .map((e) => {
      return e === "NORTH" ? 1 : -1;
    })
    .reduce((acc, curr) => acc + curr);
  let WE = arr
    .filter((e) => e === "EAST" || e === "WEST")
    .map((e) => {
      return e === "EAST" ? 1 : -1;
    })
    .reduce((acc, curr) => acc + curr);

  let nsArray = [];
  for (let i = 0; i < Math.abs(NS); i++) {
    if (NS > 0) {
      nsArray.push("NORTH");
    } else {
      nsArray.push("SOUTH");
    }
  }

  let weArray = [];
  for (let i = 0; i < Math.abs(WE); i++) {
    if (WE > 0) {
      nsArray.push("EAST");
    } else {
      nsArray.push("WEST");
    }
  }

  return nsArray.concat(weArray);
}

console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
 */
