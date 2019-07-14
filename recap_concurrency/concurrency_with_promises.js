console.log('Start the request.');

const logs = (json) => {
  console.log(json);
  console.log('Finished the request.');
}

ajaxAsync('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(logs);

console.log('It will log before the finish log')
