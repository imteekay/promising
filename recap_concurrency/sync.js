console.log('Start the request.');

let json = ajaxSync('https://pokeapi.co/api/v2/pokemon/pikachu');

console.log(json);

console.log('Finished the request.');

// This would execute in sequence.
// The ajaxSync blocks the sequence,
// and the rest of console logs need to wait
// until it finish
