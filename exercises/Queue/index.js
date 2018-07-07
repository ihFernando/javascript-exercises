/**
 * Queue
 *
 * Create a queue data structure. The queue
 * should be a class with methods 'add' and 'remove'.
 * Adding to the queue should store an element until
 * it is removed.
 *
 * Examples:
 * const q = new Queue();
 * q.add(1);
 * q.remove(); // returns 1
 */

function Queue(x) {
  this.vetor = [];

  this.add = function( x ) {
    this.vetor.push( x );
  };
  this.remove = function( x ) {
    return this.vetor.shift( );
  };
}

module.exports = Queue;
