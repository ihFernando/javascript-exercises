// 1
function capitalize(str) {
  let newString = str.split(' ');
  let newa = []

  newString.forEach(word => {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    word = word.join('');
    console.log(word)

    newa.push(word);
  })

  console.log(newa);

  newa = newa.join(' ');
  return newa
}

// 2
function capitalize(str) {
  let newa = []

  str.split(' ').forEach(word => {
    newa.push(word[0].toUpperCase() + word.slice(1))
  })

  return newa.join(' ');
}

// 3
function capitalize(str) {
  let word = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      word += str[i].toUpperCase();
    } else {
      word += str[i];
    }
  }

  return word
}
