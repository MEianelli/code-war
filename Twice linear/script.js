function dblLinear(n) {
  let allArrays = [[1]];
  let currArray = [];
  let j = 0;
  while (currArray.length <= n) {
    currArray = allArrays[j];
    let newArray = [];
    for (let i = 0; i < currArray.length; i++) {
      newArray.push(2 * currArray[i] + 1);
      newArray.push(3 * currArray[i] + 1);
    }
    newArray = [...new Set(newArray)];
    newArray.sort((a, b) => {
      return a - b;
    });
    allArrays.push(newArray);
    j++;
  }

  let res = [];
  for (let i = 0; i < allArrays.length; i++) {
    for (let j = 0; j < allArrays[i].length; j++) {
      res.push(allArrays[i][j]);
    }
  }

  return res[n];
}
console.log(dblLinear(30)); //91

/* function dblLinear(n) {
  let res = [1];
  let i = 0;
  while (res.length <= n) {
    for (let j = 0 + i; j < 2 * i + 1; j++) {
      res.push(2 * res[j] + 1);
      res.push(3 * res[j] + 1);
    }
    console.log(res);

    i = 2 * i + 1;
    res = [...new Set(res)];
    res.sort((a, b) => {
      return a - b;
    });
  }

  return res;
}
console.log(dblLinear(30)); //22 */

//For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
//u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
/*
+0 +2 +4 +8 +16 +32
0, 1, 3, 7, 15, 31, 63
z
*/
