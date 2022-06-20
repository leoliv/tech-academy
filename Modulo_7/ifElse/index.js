function media(a, b) {
  if (a > b) {
    return a;
  }
  if (b > a) {
    return b;
  }
  if (a == b) {
    return a + b;
  }
}

console.log(media(6, 7));
