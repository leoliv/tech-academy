import { getPeople } from './StarWarsService.js';

(async function main() {
  const startWarsPeople = await getPeople(1);
  const startWarsPeopleReduce = startWarsPeople.reduce((total, person) => {
    // total += Number(person.height);
    total += parseInt(person.height);
    return total;
  }, 0);
  console.log(
    'media de altura: ',
    startWarsPeopleReduce / startWarsPeople.length,
  );
})();
