function formatDuration(seconds) {
  if (seconds === 0) return 'now';

  let tags = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
  let times = [];

  for (key in tags) {
    if (seconds >= tags[key]) {
      let temp = Math.floor(seconds / tags[key]);
      times.push((temp += temp > 1 ? ' ' + key + 's' : ' ' + key));
      seconds = Math.floor(seconds % tags[key]);
    }
  }

  if (times.length === 1) return times[0];

  return times.join(', ').replace(/,(?=[^,]*$)/, ' and');
}

console.log(formatDuration(86401));

/*
1 segundo
1 min = 60 segundos
1 hora = 3600 segundos
1 dia = 86400 segundos
1 ano = 31536000 segundos
*/
