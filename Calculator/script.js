function Calculator(string) {
  let stringArray = string.split(' ');

  while (stringArray.indexOf('*') > -1 || stringArray.indexOf('/') > -1) {
    let m = stringArray.indexOf('*');
    let d = stringArray.indexOf('/');

    console.log(m, d);

    if (m === -1) {
      m = stringArray.length + 1;
    }
    if (d === -1) {
      d = stringArray.length + 1;
    }

    let i = m < d ? m : d;

    let a = stringArray[i - 1];
    let b = stringArray[i + 1];

    let res = stringArray[i] === '*' ? +a * +b : +a / +b;
    stringArray.splice(i - 1, 0, res);
    stringArray.splice(i, 3);
  }

  while (stringArray.indexOf('+') > -1 || stringArray.indexOf('-') > -1) {
    let m = stringArray.indexOf('+');
    let d = stringArray.indexOf('-');

    console.log(m, d);

    if (m === -1) {
      m = stringArray.length + 1;
    }
    if (d === -1) {
      d = stringArray.length + 1;
    }

    let i = m < d ? m : d;

    let a = stringArray[i - 1];
    let b = stringArray[i + 1];

    let res = stringArray[i] === '+' ? +a + +b : +a - +b;
    stringArray.splice(i - 1, 0, res);
    stringArray.splice(i, 3);
  }

  return +stringArray.join('');
}

console.log(Calculator('2 / 2 + 3 * 4 - 6')); //7
/* console.log(Calculator('2 + 3')); //25

console.log(Calculator('127')); //7
 */
