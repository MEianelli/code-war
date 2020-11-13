function humanReadable(seconds) {
  let hours = "0" + Math.floor(seconds / 3600);
  let min = "0" + Math.floor((seconds / 60) % 60);
  let sec = "0" + Math.floor((seconds % 60) % 60);
  return hours.slice(-2).concat(":", min.slice(-2), ":", sec.slice(-2));
}

console.log(humanReadable(60));
