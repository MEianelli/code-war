function sumIntervals(intervals) {
  intervals.forEach((e) => {
    for (let i = 0; i < intervals.length; i++) {
      e[0] >= intervals[i][0] && e[0] <= intervals[i][1] ? (e[0] = intervals[i][0]) : null;
      e[1] >= intervals[i][0] && e[1] <= intervals[i][1] ? (e[1] = intervals[i][1]) : null;
    }
    for (let i = intervals.length - 1; i >= 0; i--) {
      e[0] >= intervals[i][0] && e[0] <= intervals[i][1] ? (e[0] = intervals[i][0]) : null;
      e[1] >= intervals[i][0] && e[1] <= intervals[i][1] ? (e[1] = intervals[i][1]) : null;
    }
  });

  return Array.from(new Set(intervals.map(JSON.stringify)), JSON.parse)
    .map((e) => e[1] - e[0])
    .reduce((acc, cur) => acc + cur);
}

console.log(
  sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5],
  ])
); //7
