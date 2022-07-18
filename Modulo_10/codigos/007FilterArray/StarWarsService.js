import fetch from 'node-fetch'; // O fetch é uma promise que retorna um objeto com os dados da requisição por isso é necessário usar o async/await

const apiUrl = 'https://swapi.dev/api/';

export async function getPeople(page = 1) {
  const response = await fetch(`${apiUrl}people/?page=${page}`);
  const data = await response.json();
  return data.results;
}
