import { getPeople } from './StarWarsService.js';

(async function main() {
  const startWarsPeople = await getPeople(2);
  // const startWarsPeopleNames = startWarsPeople.map(item => item.name); // pegar um item

  // pegando dois items
  const startWarsPeopleNames = startWarsPeople.map(item => {
    // const name = item.name;
    // const height = item.height;
    // return { name, height };

    // destructuring
    const { name, height, gender } = item;
    return { name, height, gender };
  });

  console.log(startWarsPeopleNames);
})();
