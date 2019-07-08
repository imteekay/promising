const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

const pokemonsList = document.querySelector('#pokemon-list');

const pikachuUrl = `${baseUrl}pikachu`;
const mewUrl = `${baseUrl}mew`;
const charmanderUrl = `${baseUrl}charmander`;

const getPokemon = (url) =>
  fetch(url)
    .then(response => response.json())
    .then(pokemon => ({ id: pokemon.order, name: pokemon.name }));

const promises = [
  getPokemon(pikachuUrl),
  getPokemon(mewUrl),
  getPokemon(charmanderUrl)
];

const template = ({ id, name }) =>
  `<li>${id} - ${name}</li>`;

const renderPokemons = (list) => (pokemons) =>
  list.innerHTML = pokemons
    .map(template)
    .join(' ');

Promise
  .all(promises)
  .then(renderPokemons(pokemonsList));
