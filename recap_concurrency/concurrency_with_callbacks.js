console.log('Start the request.');

ajaxAsync('https://pokeapi.co/api/v2/pokemon/pikachu', json => {
  console.log(json);
  console.log('Finished the request.');
});

console.log('It will log before the finish log')

/*
  1. Start the request.
  2. It will log before the finish log.
  3. json
  4. Finished the request.
*/
