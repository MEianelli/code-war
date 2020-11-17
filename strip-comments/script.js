function solution(input, markers) {
  let lines = input.split('\n');

  let marker = markers.map((e) => {
    return '\\' + e;
  });
  let regexp = new RegExp(marker.join('|'), 'g');
  let res = [];

  lines.forEach((element) => {
    if (element.search(regexp) > -1) {
      res.push(element.slice(0, element.search(regexp)).trim());
    } else {
      res.push(element);
    }
  });
  return res.join('\n');
}

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']));
console.log(solution('Q @b\nu\ne -e f g', ['@', '-'])); //  "Q\nu\ne'
