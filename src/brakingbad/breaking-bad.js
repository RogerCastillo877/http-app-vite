/**
 * @returns { Object } quote information
*/
const fetchPokemon = async () => {

  const URL = `${import.meta.env.VITE_URL_BASE}`;
  const res = await fetch(`${URL}/pokemon/ditto`);
  const data = await res.json()
  return data;
};
/**
 * 
 * @param { HTMLDivElement } element
 */
export const BreakingBad = async (element) => {

  document.querySelector('#title').innerHTML = 'Breakingbad';
  element.innerHTML = '...Loading';

  const pokemonLabel = document.createElement('h2');
  const pokemonId = document.createElement('h3');

  const renderPokemon = (pokemon) => {

    pokemonLabel.innerHTML = pokemon.forms[0].name;
    pokemonId.innerHTML = pokemon.id;
    element.replaceChildren(pokemonLabel, pokemonId);
  }

  fetchPokemon()
    .then(renderPokemon)
};