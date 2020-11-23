function mix(s1, s2) {
  let originals1 = organizeString(s1);
  s1 = organizeString(s1);

  let originals2 = organizeString(s2);
  s2 = organizeString(s2);

  let res = [];
  for (let i = s2.length - 1; i >= 0; i -= 1) {
    for (let j = s1.length - 1; j >= 0; j -= 1) {
      if (s2[i][0] === s1[j][0] && s2[i].length === s1[j].length) {
        res.push(s2[i]);
        s2.splice(i, 1);
        s1.splice(j, 1);
        break;
      } else if (s2[i][0] === s1[j][0]) {
        if (s2[i].length > s1[j].length) {
          res.push(s2[i]);
          s2.splice(i, 1);
          s1.splice(j, 1);
          break;
        } else {
          res.push(s1[j]);
          s2.splice(i, 1);
          s1.splice(j, 1);
          break;
        }
      }
    }
  }

  for (let i = s1.length - 1; i >= 0; i -= 1) {
    res.push(s1[i]);
  }
  for (let i = 0; i < s2.length; i += 1) {
    res.push(s2[i]);
  }

  res = sameSizeArray(res);

  for (let i = 0; i < res.length; i += 1) {
    if (originals1.indexOf(res[i]) > -1 && originals2.indexOf(res[i]) > -1) {
      res[i] = '=:' + res[i];
    } else if (originals1.indexOf(res[i]) > -1) {
      res[i] = '1:' + res[i];
    } else if (originals2.indexOf(res[i]) > -1) {
      res[i] = '2:' + res[i];
    }
  }

  res.sort((a, b) => b.length - a.length || a.charAt(0) + a.charAt(2) > (b.charAt(0) + b.charAt(2) ? 1 : -1));

  // (objA.src + objA.char > objB.src + objB.char ? 1 : -1)

  return res;
}

function organizeString(string) {
  let temp = string
    .split('')
    .sort()
    .filter((e) => e.match(new RegExp(/[a-z]/, 'g')));

  let res = [];
  let curr = temp[0];
  start = 0;
  for (let i = 0; i < temp.length; i += 1) {
    if (temp[i] !== curr) {
      res.push(temp.join('').slice(start, i));
      start = i;
      curr = temp[i];
    }
  }
  res.push(temp.join('').slice(start));
  return res.filter((e) => e.length > 1);
}

const sameSizeArray = (array) => {
  let res = [];

  let sizes = [...new Set(array.map((e) => e.length))].forEach((e, index) => {
    res.push([]);
    for (let i = 0; i < array.length; i += 1) {
      if (array[i].length === e) {
        res[index].push(array[i]);
      }
    }
  });

  for (let i = 0; i < res.length; i += 1) {
    res[i].sort();
  }

  res.sort((a, b) => b[0].length - a[0].length);

  let allinOne = [];
  for (let i = 0; i < res.length; i += 1) {
    for (let j = 0; j < res[i].length; j += 1) {
      allinOne.push(res[i][j]);
    }
  }

  return allinOne;
};

console.log(mix('my&friend&Paul has heavy hats! &', 'my friend John has many many friends &'));

//mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
