const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) => {  // async indica que la función es asíncrona
  try {
    const data = await fetchData(url_api);  // await indica que la función es asíncrona
    const character = await fetchData(`${url_api}${data.results[0].id}`);
    const origin = await fetchData(character.origin.url);
    console.log(data.info.count);
    console.log(character.name);
    console.log(origin.dimension);
  } catch (error) {
    console.error(error);
  }
}

async function foo() {
	const [characters , episodes, locations] = await Promise.all([
		getCharacters(),
		getEpisodes(),
		getLocations(),
	])

	console.log(characters)
	console.log(episodes)
	console.log(locations)
}

function getData(){
  return fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(json => json)
  }

getData().then(data => console.log(data))