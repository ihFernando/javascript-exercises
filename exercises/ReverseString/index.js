/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

const reverse = (str) => {
  // str.split('').reverse().join('');
  let reverse = [];

  // Percorrendo a palavra
  for( i = str.length; i > 0; i-- ) {
    //Puxando de forma inversa
    reverse.push( str[ i - 1 ] );
  }

  //Retornando palavra
  return reverse.join("");
};

module.exports = reverse;
