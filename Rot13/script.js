function rot13(message) {
  ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz';
  ascii_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  return message
    .split('')
    .map((e) => {
      if (ascii_lowercase.indexOf(e) > -1) {
        let index = (ascii_lowercase.indexOf(e) + 13) % 26;
        return ascii_lowercase.charAt(index);
      } else if (ascii_uppercase.indexOf(e) > -1) {
        let index = (ascii_uppercase.indexOf(e) + 13) % 26;
        return ascii_uppercase.charAt(index);
      } else {
        return e;
      }
    })
    .join('');
}

console.log(rot13('Test'));

//Test , Expected Output: Grfg
