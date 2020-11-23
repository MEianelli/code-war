function solution(list) {
  let res = [[list[0]]];
  let j = 0;

  for (let i = 1; i < list.length; i++) {
    if (list[i] - 1 === list[i - 1]) {
      res[j].push(list[i]);
    } else {
      res.push([list[i]]);
      j++;
    }
  }

  return (ans = res
    .map((e) => {
      if (e.length >= 3) {
        return e[0] + '-' + e[e.length - 1];
      } else {
        return e.join(',');
      }
    })
    .join(','));
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
//"-6,-3-1,3-5,7-11,14,15,17-20"
