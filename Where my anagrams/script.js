function anagrams(word, words) {
  return words
    .map((element) => {
      return new Set(element);
    })
    .filter((e) => e.size === new Set(word).size);
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
