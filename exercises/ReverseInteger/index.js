/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

const reverse = (int) => {
  //Declara as variáveis
  let reverse = [];
  let x       = int.toString();

  //Cria o laço
  for( i = x.length; i > 0; i-- ) {
    //Verifica se é igual a -, se for puxa para o top
    if( x[ i - 1 ] === '-' ) {
      reverse.unshift('-');
    } else {
      //Puxa os demais elementos de forma inversa
      ( x[ i - 1 ] !== '0' ) ? reverse.push(x[ i - 1 ]) : false;
    }
  }
  //Converter em INT
  reverse = parseInt(reverse.join(""));

  //Retorna a palavra
  return reverse;
}

module.exports = reverse;
